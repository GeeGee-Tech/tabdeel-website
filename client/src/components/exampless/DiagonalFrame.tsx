import DiagonalFrame from '../DiagonalFrame';

export default function DiagonalFrameExample() {
  return (
    <div className="p-8 bg-muted/30">
      <DiagonalFrame>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
          alt="Example"
          className="w-full h-64 object-cover"
        />
      </DiagonalFrame>
    </div>
  );
}
