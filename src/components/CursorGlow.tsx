import { useCursorGlow } from '@/hooks/useCursorGlow';

const CursorGlow = () => {
    const cursorRef = useCursorGlow();

    return (
        <div
            ref={cursorRef}
            className="cursor-glow"
            style={{
                position: 'fixed',
                top: '-75px',
                left: '-75px',
                width: '150px',
                height: '150px',
                pointerEvents: 'none',
                zIndex: 9999,
                opacity: 0,
                transition: 'opacity 0.3s ease-out',
                willChange: 'transform',
            }}
        >
            {/* Outer glow */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                }}
            />

            {/* Inner glow */}
            <div
                style={{
                    position: 'absolute',
                    inset: '20%',
                    background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 60%)',
                    filter: 'blur(10px)',
                }}
            />
        </div>
    );
};

export default CursorGlow;
