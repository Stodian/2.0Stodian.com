import React, { useRef, useEffect } from 'react';

function Background() {
    const canvasRef = useRef(null);
    const headerHeight = 0;  // Height of the header
    const squareSize = 20;    // Size of each square
    const fadeDuration = 2000; // Duration in ms for a line to fade out

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let lines = []; // Array to store drawn lines and their timestamps
        let squares = []; // Array to store squares and their timestamps

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            // Set the height to the total scrollable height of the document
            canvas.height = document.documentElement.scrollHeight;
            canvas.style.position = 'absolute'; // Ensure canvas is positioned absolutely
            canvas.style.top = '0px'; // Start from the very top of the page
            canvas.style.bottom = '55px'
            drawGrid();
        };

        const drawGrid = () => {
            const spacing = 20;
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


        const addSquare = () => {
            const x = Math.floor(Math.random() * ((canvas.width - squareSize) / 20)) * 20;
            const y = Math.floor(Math.random() * ((canvas.height - squareSize) / 20)) * 20 + headerHeight;            
            const color = `rgba(128, 0, 0)`;
            squares.push({ x, y, color, timestamp: Date.now() });
            drawSquare(x, y, color);
        };

        const drawSquare = (x, y, color) => {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, squareSize, squareSize);
        };

        const drawLine = (line) => {
            const timeElapsed = Date.now() - line.timestamp;
            const opacity = Math.max(0, 1 - timeElapsed / fadeDuration);
            ctx.beginPath();
            ctx.moveTo(line.x1, line.y1);
            ctx.lineTo(line.x2, line.y2);
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.stroke();
        };

        const updateCanvas = () => {
            drawGrid();
            const currentTime = Date.now();
            squares = squares.filter(square => currentTime - square.timestamp < fadeDuration);
            squares.forEach(square => {
                const timeElapsed = currentTime - square.timestamp;
                const opacity = Math.max(0, 1 - timeElapsed / fadeDuration);
                ctx.fillStyle = `rgba(${square.color.split('(')[1].split(')')[0]}, ${opacity})`; // Adjust color opacity
                ctx.fillRect(square.x, square.y, squareSize, squareSize);
            });

            lines = lines.filter(line => Date.now() - line.timestamp < fadeDuration);
            lines.forEach(drawLine);
        };

        const draw = event => {
            const x = event.clientX;
            const y = event.clientY - headerHeight;
            if (!lines.length || lines[lines.length - 1].x2 !== x || lines[lines.length - 1].y2 !== y) {
                lines.push({
                    x1: lines.length > 0 ? lines[lines.length - 1].x2 : x,
                    y1: lines.length > 0 ? lines[lines.length - 1].y2 : y,
                    x2: x,
                    y2: y,
                    timestamp: Date.now()
                });
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
        window.addEventListener('resize', resizeCanvas);

        const interval = setInterval(updateCanvas, 50); // Update canvas every 50ms
        const addSquareInterval = setInterval(addSquare, 2000); // Add a new square every 2000ms


        resizeCanvas(); // Initial resize to set up canvas size

        return () => {
            clearInterval(interval);
            clearInterval(addSquareInterval);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousedown', mouseDownHandler);
            canvas.removeEventListener('mouseup', mouseUpHandler);
            canvas.removeEventListener('mousemove', draw);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', left: 0, zIndex: -1 }} />;
}

export default Background;
