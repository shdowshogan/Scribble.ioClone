import React from 'react';
import LiquidEther from './LiquidEther.jsx';

const InteractiveBackground = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#543ABC' }}>
          <LiquidEther
            colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={100}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.2}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
    );
};

export default InteractiveBackground;