
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '' 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 animate-pulse">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {error ? (
        <div className="w-full h-full flex items-center justify-center bg-secondary/30 text-foreground/60">
          Failed to load image
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          className={cn(
            className,
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
};

export default ImageLoader;
