"use client";

import Image from 'next/image';
import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  suppressHydrationWarning?: boolean;
}

export default function SafeImage({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  fallbackSrc = '/logo.png', 
  priority = false,
  suppressHydrationWarning = false
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      suppressHydrationWarning={suppressHydrationWarning}
      onError={handleError}
    />
  );
}
