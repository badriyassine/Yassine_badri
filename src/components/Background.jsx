import React, { useEffect, useRef } from "react";

const GradientBubbleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let mouseX = width / 2;
    let mouseY = height / 2;

    // Track mouse
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Create bubbles
    const bubbleCount = 40;
    const bubbles = Array.from({ length: bubbleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 10 + Math.random() * 20,
      speedX: -0.2 + Math.random() * 0.4,
      speedY: -0.2 + Math.random() * 0.4,
      gradientColors: [
        `rgba(255,255,255,${0.05 + Math.random() * 0.1})`,
        `rgba(255,255,255,0)`
      ]
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Dark gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0, "#0a0a0a");
      bgGradient.addColorStop(1, "#111111");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw bubbles
      bubbles.forEach(bubble => {
        // Move bubble
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        // Bounce on edges
        if (bubble.x < 0 || bubble.x > width) bubble.speedX *= -1;
        if (bubble.y < 0 || bubble.y > height) bubble.speedY *= -1;

        // Bubble gradient
        const grad = ctx.createRadialGradient(
          bubble.x, bubble.y, 0,
          bubble.x, bubble.y, bubble.radius
        );
        grad.addColorStop(0, bubble.gradientColors[0]);
        grad.addColorStop(1, bubble.gradientColors[1]);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />;
};

export default GradientBubbleBackground;
