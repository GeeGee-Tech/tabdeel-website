interface DiagonalFrameProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  borderWidth?: string;
}

export default function DiagonalFrame({ 
  children, 
  className = '',
  borderColor = 'border-primary',
  borderWidth = 'border-[6px]'
}: DiagonalFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div 
        className={`
          ${borderWidth} ${borderColor}
          [clip-path:polygon(15%_0,100%_0,85%_100%,0_100%)]
        `}
        style={{
          clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)'
        }}
      >
        {children}
      </div>
    </div>
  );
}
