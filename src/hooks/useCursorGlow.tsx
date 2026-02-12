import { useEffect, useRef } from 'react';

export const useCursorGlow = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Check if device has hover capability (not mobile/tablet)
        const hasHover = window.matchMedia('(hover: hover)').matches;

        // Performance check - skip on low-end devices
        const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

        if (isLowEndDevice) return;

        const cursor = cursorRef.current;
        if (!cursor) return;

        let isActive = false;

        // Smooth lerp function for elegant trailing effect
        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        // Animation loop using RAF for 60fps
        const animate = () => {
            if (!cursor) return;

            // Smooth interpolation (0.15 = subtle lag effect)
            cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.15);
            cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.15);

            // Use transform for GPU acceleration
            cursor.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;

            rafRef.current = requestAnimationFrame(animate);
        };

        // Mouse move handler (desktop)
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            if (!isActive) {
                isActive = true;
                cursor.style.opacity = '1';
            }
        };

        // Touch handlers (mobile)
        const handleTouchStart = (e: TouchEvent) => {
            const touch = e.touches[0];
            mousePos.current = { x: touch.clientX, y: touch.clientY };
            cursorPos.current = { x: touch.clientX, y: touch.clientY };

            isActive = true;
            cursor.style.opacity = '1';
        };

        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            mousePos.current = { x: touch.clientX, y: touch.clientY };
        };

        const handleTouchEnd = () => {
            isActive = false;
            cursor.style.opacity = '0';
        };

        // Mouse leave handler (desktop)
        const handleMouseLeave = () => {
            isActive = false;
            cursor.style.opacity = '0';
        };

        // Add event listeners
        if (hasHover) {
            window.addEventListener('mousemove', handleMouseMove, { passive: true });
            document.addEventListener('mouseleave', handleMouseLeave);
        }

        // Always add touch events for mobile support
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });

        // Start animation loop
        rafRef.current = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return cursorRef;
};
