
const BOT_DRAWINGS = {
    "house": [
        // Box
        { type: 'line', x0: 300, y0: 300, x1: 500, y1: 300, color: '#000000', size: 5 },
        { type: 'line', x0: 500, y0: 300, x1: 500, y1: 500, color: '#000000', size: 5 },
        { type: 'line', x0: 500, y0: 500, x1: 300, y1: 500, color: '#000000', size: 5 },
        { type: 'line', x0: 300, y0: 500, x1: 300, y1: 300, color: '#000000', size: 5 },
        // Roof
        { type: 'line', x0: 300, y0: 300, x1: 400, y1: 200, color: '#EF130B', size: 5 },
        { type: 'line', x0: 400, y0: 200, x1: 500, y1: 300, color: '#EF130B', size: 5 },
        // Door
        { type: 'line', x0: 370, y0: 500, x1: 370, y1: 400, color: '#8B4513', size: 3 },
        { type: 'line', x0: 370, y0: 400, x1: 430, y1: 400, color: '#8B4513', size: 3 },
        { type: 'line', x0: 430, y0: 400, x1: 430, y1: 500, color: '#8B4513', size: 3 }
    ],
    "sun": [
        // Circle (approximated with octagon lines for simplicity)
        { type: 'line', x0: 350, y0: 100, x1: 450, y1: 100, color: '#FFE400', size: 8 },
        { type: 'line', x0: 450, y0: 100, x1: 500, y1: 150, color: '#FFE400', size: 8 },
        { type: 'line', x0: 500, y0: 150, x1: 500, y1: 250, color: '#FFE400', size: 8 },
        { type: 'line', x0: 500, y0: 250, x1: 450, y1: 300, color: '#FFE400', size: 8 },
        { type: 'line', x0: 450, y0: 300, x1: 350, y1: 300, color: '#FFE400', size: 8 },
        { type: 'line', x0: 350, y0: 300, x1: 300, y1: 250, color: '#FFE400', size: 8 },
        { type: 'line', x0: 300, y0: 250, x1: 300, y1: 150, color: '#FFE400', size: 8 },
        { type: 'line', x0: 300, y0: 150, x1: 350, y1: 100, color: '#FFE400', size: 8 },
        // Rays
        { type: 'line', x0: 400, y0: 100, x1: 400, y1: 50, color: '#FF7100', size: 4 },
        { type: 'line', x0: 500, y0: 200, x1: 550, y1: 200, color: '#FF7100', size: 4 },
        { type: 'line', x0: 400, y0: 300, x1: 400, y1: 350, color: '#FF7100', size: 4 },
        { type: 'line', x0: 300, y0: 200, x1: 250, y1: 200, color: '#FF7100', size: 4 }
    ],
    "tree": [
        // Trunk
        { type: 'line', x0: 380, y0: 500, x1: 380, y1: 350, color: '#8B4513', size: 10 },
        { type: 'line', x0: 380, y0: 350, x1: 420, y1: 350, color: '#8B4513', size: 10 },
        { type: 'line', x0: 420, y0: 350, x1: 420, y1: 500, color: '#8B4513', size: 10 },
        // Leaves (Triangle)
        { type: 'line', x0: 400, y0: 200, x1: 300, y1: 350, color: '#00CC00', size: 8 },
        { type: 'line', x0: 300, y0: 350, x1: 500, y1: 350, color: '#00CC00', size: 8 },
        { type: 'line', x0: 500, y0: 350, x1: 400, y1: 200, color: '#00CC00', size: 8 },
        // Second layer
        { type: 'line', x0: 400, y0: 150, x1: 320, y1: 250, color: '#00CC00', size: 8 },
        { type: 'line', x0: 320, y0: 250, x1: 480, y1: 250, color: '#00CC00', size: 8 },
        { type: 'line', x0: 480, y0: 250, x1: 400, y1: 150, color: '#00CC00', size: 8 }
    ],
    "smiley": [
        // Face outline
        { type: 'line', x0: 300, y0: 200, x1: 500, y1: 200, color: '#FFD700', size: 5 },
        { type: 'line', x0: 500, y0: 200, x1: 500, y1: 400, color: '#FFD700', size: 5 },
        { type: 'line', x0: 500, y0: 400, x1: 300, y1: 400, color: '#FFD700', size: 5 },
        { type: 'line', x0: 300, y0: 400, x1: 300, y1: 200, color: '#FFD700', size: 5 },
        // Eyes
        { type: 'line', x0: 350, y0: 250, x1: 350, y1: 270, color: '#000000', size: 8 },
        { type: 'line', x0: 450, y0: 250, x1: 450, y1: 270, color: '#000000', size: 8 },
        // Smile
        { type: 'line', x0: 350, y0: 350, x1: 375, y1: 380, color: '#000000', size: 5 },
        { type: 'line', x0: 375, y0: 380, x1: 425, y1: 380, color: '#000000', size: 5 },
        { type: 'line', x0: 425, y0: 380, x1: 450, y1: 350, color: '#000000', size: 5 }
    ],
    "ball": [
        { type: 'line', x0: 400, y0: 200, x1: 300, y1: 300, color: '#FF0000', size: 10 },
        { type: 'line', x0: 300, y0: 300, x1: 400, y1: 400, color: '#FF0000', size: 10 },
        { type: 'line', x0: 400, y0: 400, x1: 500, y1: 300, color: '#FF0000', size: 10 },
        { type: 'line', x0: 500, y0: 300, x1: 400, y1: 200, color: '#FF0000', size: 10 },
        { type: 'line', x0: 350, y0: 250, x1: 450, y1: 350, color: '#FFFFFF', size: 5 }
    ],
    "cloud": [
        { type: 'line', x0: 300, y0: 300, x1: 350, y1: 250, color: '#00B2FF', size: 8 },
        { type: 'line', x0: 350, y0: 250, x1: 450, y1: 250, color: '#00B2FF', size: 8 },
        { type: 'line', x0: 450, y0: 250, x1: 500, y1: 300, color: '#00B2FF', size: 8 },
        { type: 'line', x0: 500, y0: 300, x1: 450, y1: 350, color: '#00B2FF', size: 8 },
        { type: 'line', x0: 450, y0: 350, x1: 350, y1: 350, color: '#00B2FF', size: 8 },
        { type: 'line', x0: 350, y0: 350, x1: 300, y1: 300, color: '#00B2FF', size: 8 }
    ],
    "flower": [
        { type: 'line', x0: 400, y0: 400, x1: 400, y1: 300, color: '#00CC00', size: 5 }, // Stem
        { type: 'line', x0: 400, y0: 300, x1: 350, y1: 250, color: '#FF0000', size: 8 }, // Petal
        { type: 'line', x0: 400, y0: 300, x1: 450, y1: 250, color: '#FF0000', size: 8 },
        { type: 'line', x0: 400, y0: 300, x1: 350, y1: 350, color: '#FF0000', size: 8 },
        { type: 'line', x0: 400, y0: 300, x1: 450, y1: 350, color: '#FF0000', size: 8 },
        { type: 'line', x0: 400, y0: 300, x1: 400, y1: 200, color: '#FF0000', size: 8 },
        { type: 'line', x0: 400, y0: 300, x1: 400, y1: 300, color: '#FFFF00', size: 10 } // Center
    ],
    "star": [
        { type: 'line', x0: 400, y0: 100, x1: 450, y1: 250, color: '#FFE400', size: 5 },
        { type: 'line', x0: 450, y0: 250, x1: 600, y1: 250, color: '#FFE400', size: 5 },
        { type: 'line', x0: 600, y0: 250, x1: 475, y1: 350, color: '#FFE400', size: 5 },
        { type: 'line', x0: 475, y0: 350, x1: 525, y1: 500, color: '#FFE400', size: 5 },
        { type: 'line', x0: 525, y0: 500, x1: 400, y1: 400, color: '#FFE400', size: 5 },
        { type: 'line', x0: 400, y0: 400, x1: 275, y1: 500, color: '#FFE400', size: 5 },
        { type: 'line', x0: 275, y0: 500, x1: 325, y1: 350, color: '#FFE400', size: 5 },
        { type: 'line', x0: 325, y0: 350, x1: 200, y1: 250, color: '#FFE400', size: 5 },
        { type: 'line', x0: 200, y0: 250, x1: 350, y1: 250, color: '#FFE400', size: 5 },
        { type: 'line', x0: 350, y0: 250, x1: 400, y1: 100, color: '#FFE400', size: 5 }
    ]
};

module.exports = BOT_DRAWINGS;
