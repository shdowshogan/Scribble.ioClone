import React, { useRef, useEffect, useState } from 'react';
import socket from '../socket';

function Canvas({ roomId, isDrawer, initialHistory }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    const canvas = canvasRef.current;
    
    // Set initial canvas size (could be responsive)
    canvas.width = 800;
    canvas.height = 600;
    
    const ctx = canvas.getContext('2d');
    // Basic styles
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 5;
    
    // Replay History
    if (initialHistory && initialHistory.length > 0) {
        initialHistory.forEach(action => {
             const currentStrokeStyle = ctx.strokeStyle; 
             const currentLineWidth = ctx.lineWidth;
             
             ctx.strokeStyle = action.color;
             ctx.lineWidth = action.size || 5; // Use synced size
             
             ctx.beginPath();
             ctx.moveTo(action.x0, action.y0);
             ctx.lineTo(action.x1, action.y1);
             ctx.stroke();
             ctx.closePath();
             
             ctx.strokeStyle = currentStrokeStyle;
             ctx.lineWidth = currentLineWidth;
        });
    }

    const handleRoundStart = ({ drawer }) => {
        // Clear canvas
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        setIsDrawing(false); // Reset drawing state
    };

    const handleDrawLine = ({ x0, y0, x1, y1, color, size }) => {
        const ctx = canvasRef.current.getContext('2d');
        const currentStrokeStyle = ctx.strokeStyle; 
        const currentLineWidth = ctx.lineWidth;
        
        ctx.strokeStyle = color;
        ctx.lineWidth = size || 5;
        
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
        ctx.closePath();
        
        ctx.strokeStyle = currentStrokeStyle; // Restore
        ctx.lineWidth = currentLineWidth;
    };

    const handleClearCanvas = () => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    socket.on('round_start', handleRoundStart);
    socket.on('draw_line', handleDrawLine);
    socket.on('clear_canvas', handleClearCanvas);

    return () => {
      socket.off('round_start', handleRoundStart);
      socket.off('draw_line', handleDrawLine);
      socket.off('clear_canvas', handleClearCanvas);
    };
  }, [initialHistory]);

  const startDrawing = (e) => {
    if (!isDrawer) return;
    const { offsetX, offsetY } = e.nativeEvent;
    setIsDrawing(true);
    canvasRef.current.lastX = offsetX;
    canvasRef.current.lastY = offsetY;
  };


  const draw = (e) => {
    if (!isDrawing) return;
    
    const { offsetX, offsetY } = e.nativeEvent;
    const ctx = canvasRef.current.getContext('2d');
    
    // Draw locally
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(canvasRef.current.lastX, canvasRef.current.lastY);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
    ctx.closePath();

    // Emit to server
    socket.emit('draw', {
        roomId,
        x0: canvasRef.current.lastX,
        y0: canvasRef.current.lastY,
        x1: offsetX,
        y1: offsetY,
        color,
        size: ctx.lineWidth // Send current size
    });

    // Update last position
    canvasRef.current.lastX = offsetX;
    canvasRef.current.lastY = offsetY;
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  // Touch Handlers
  const handleTouchStart = (e) => {
      if (!isDrawer) return;
      e.preventDefault(); // Prevent scrolling
      const touch = e.touches[0];
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const offsetX = touch.clientX - rect.left;
      const offsetY = touch.clientY - rect.top;
      
      setIsDrawing(true);
      canvasRef.current.lastX = offsetX;
      canvasRef.current.lastY = offsetY;
  };

  const handleTouchMove = (e) => {
      if (!isDrawing) return;
      e.preventDefault(); // Prevent scrolling
      const touch = e.touches[0];
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const offsetX = touch.clientX - rect.left;
      const offsetY = touch.clientY - rect.top;
      
      const ctx = canvas.getContext('2d');
      const lastX = canvasRef.current.lastX;
      const lastY = canvasRef.current.lastY;

      // Draw locally
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
      ctx.closePath();

      // Emit to server
      socket.emit('draw', {
          roomId,
          x0: lastX,
          y0: lastY,
          x1: offsetX,
          y1: offsetY,
          color,
          size: ctx.lineWidth
      });

      // Update last position
      canvasRef.current.lastX = offsetX;
      canvasRef.current.lastY = offsetY;
  };

  const handleTouchEnd = () => {
      setIsDrawing(false);
  };

  return (
    <div className="canvas-wrapper">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="game-canvas"
      />
      
      {isDrawer && (
          <div className="skribbl-toolbar">
             {/* Left: Current Color Indicator */}
             <div className="current-color-preview" style={{ backgroundColor: color }}></div>
             
             {/* Colors Grid */}
             <div className="colors-container">
                 {[
                    '#FFFFFF', '#C1C1C1', '#EF130B', '#FF7100', '#FFE400', '#00CC00', '#00B2FF', '#231FD3', '#A300BA', '#D37CAA', '#A0522D',
                    '#000000', '#4C4C4C', '#740B07', '#C23800', '#E8A200', '#005510', '#00569E', '#0E0865', '#550069', '#A75574', '#63300D'
                 ].map((c) => (
                     <div 
                        key={c}
                        className="skribbl-color"
                        style={{ backgroundColor: c }}
                        onClick={() => setColor(c)}
                     />
                 ))}
             </div>
             
             {/* Tools */}
             <div className="tools-container">
                 <div className={`tool-icon ${color !== '#FFFFFF' ? 'active' : ''}`} onClick={() => setColor('#000000')}>
                    ✏️
                 </div>
                 <div className={`tool-icon ${color === '#FFFFFF' ? 'active' : ''}`} onClick={() => setColor('#FFFFFF')}>
                    🧼
                 </div>
                 <div className="tool-icon" onClick={() => {
                     const ctx = canvasRef.current.getContext('2d');
                     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                     socket.emit('clear_canvas', { roomId });
                 }}>
                    🗑️
                 </div>
             </div>
             
             {/* Sizes */}
             <div className="sizes-container">
                 {[4, 8, 15, 25].map((size) => (
                     <div 
                        key={size}
                        className="size-option"
                        onClick={() => {
                            const ctx = canvasRef.current.getContext('2d');
                            ctx.lineWidth = size;
                            canvasRef.current.currentLineWidth = size; // Store if needed
                        }}
                     >
                         <div className="size-circle" style={{ width: size, height: size, background: '#000' }}></div>
                     </div>
                 ))}
             </div>
          </div>
      )}
    </div>
  );
}

export default Canvas;
