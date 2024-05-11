import React, { useRef, useEffect } from 'react';

function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const headerHeight = 50; // Height of the header
        let lines = []; // Array to store drawn lines and their timestamps
    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - headerHeight;
        canvas.style.top = `${headerHeight}px`;
    
        const drawGrid = () => {
            const spacing = 20; // Grid spacing
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            for (let x = 0; x <= canvas.width; x += spacing) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
            }
            for (let y = 0; y <= canvas.height; y += spacing) {
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
            }
            ctx.strokeStyle = '#ddd';
            ctx.stroke();
        };
    
        const drawLine = (x1, y1, x2, y2, opacity) => {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.stroke();
        };
    
        const draw = event => {
            const x = event.clientX;
            const y = event.clientY - headerHeight;
            const lastPoint = lines.length > 0 ? lines[lines.length - 1].point : null;
            const currentTime = Date.now();
    
            if (!lastPoint || lastPoint.x !== x || lastPoint.y !== y) {
                const point = { x, y };
                lines.push({ point, timestamp: currentTime });
                if (lastPoint) {
                    const opacity = Math.max(0, 1 - (currentTime - lastPoint.timestamp) / 5000);
                    drawLine(lastPoint.x, lastPoint.y, x, y, opacity);
                }
            }
        };
    
        const mouseDownHandler = event => {
            draw(event);
            canvas.addEventListener('mousemove', draw);
        };
    
        const mouseUpHandler = () => {
            canvas.removeEventListener('mousemove', draw);
        };
    
        canvas.addEventListener('mousedown', mouseDownHandler);
        canvas.addEventListener('mouseup', mouseUpHandler);
    
        const interval = setInterval(drawGrid, 20);
    
        return () => {
            clearInterval(interval);
            canvas.removeEventListener('mousedown', mouseDownHandler);
            canvas.removeEventListener('mouseup', mouseUpHandler);
            canvas.removeEventListener('mousemove', draw); // This might not be necessary depending on your logic
        };
    }, []);
    

    return <canvas ref={canvasRef} style={{ position: 'absolute', left: 0, top: 0, zIndex: -1 }} />;
}

export default Background;
