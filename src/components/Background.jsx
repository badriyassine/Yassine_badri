import React, { useEffect, useRef } from "react";

const SlowWavyWhiteGradientBackground = () => {
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

    // Wavy lines
    const waveCount = 6;
    const waves = Array.from({ length: waveCount }, (_, i) => ({
      amplitude: 20 + Math.random() * 40,
      frequency: 0.002 + Math.random() * 0.003,
      phase: Math.random() * Math.PI * 2,
      speed: 0.001 + Math.random() * 0.003, // slower for subtle movement
      offset: i * 50,
    }));

    // Animate
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Dark background with subtle white gradient overlay
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0, "rgba(10,10,10,1)"); // dark
      bgGradient.addColorStop(1, "rgba(17,17,17,1)"); // slightly lighter dark
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Optional subtle white gradient overlay for depth
      const overlayGradient = ctx.createLinearGradient(0, 0, width, height);
      overlayGradient.addColorStop(0, "rgba(255,255,255,0.03)");
      overlayGradient.addColorStop(1, "rgba(255,255,255,0.06)");
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw wavy lines
      waves.forEach((wave, i) => {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 2) {
          const y =
            height / 2 - 50 + // shift waves slightly up
            wave.amplitude * Math.sin(wave.frequency * x + wave.phase + mouseX * 0.001) +
            wave.offset +
            Math.sin(x * 0.01 + mouseY * 0.001) * 10;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(255,255,255,${0.02 + i * 0.02})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        wave.phase += wave.speed; // slow wave movement
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

export default SlowWavyWhiteGradientBackground;

