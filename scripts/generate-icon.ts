import fs from 'node:fs';
import { createCanvas } from 'canvas';

// Create a 512x512 canvas
const canvas = createCanvas(512, 512);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#4F46E5';
ctx.beginPath();
ctx.roundRect(0, 0, 512, 512, 128);
ctx.fill();

// Draw a chat bubble shape for prompt
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 24;
ctx.beginPath();
ctx.moveTo(156, 156);
ctx.lineTo(356, 156);
ctx.lineTo(356, 256);
ctx.lineTo(256, 256);
ctx.lineTo(206, 306);
ctx.lineTo(206, 256);
ctx.lineTo(156, 256);
ctx.closePath();
ctx.stroke();

// Draw prompt cursor (blinking line and dots)
ctx.beginPath();
ctx.moveTo(206, 196);
ctx.lineTo(306, 196);
ctx.moveTo(206, 226);
ctx.lineTo(266, 226);
ctx.stroke();

// Save the icon
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('generated-icon.png', buffer);