"use client";

import Image from 'next/image';
import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  suppressHydrationWarning?: boolean;
  fill?: boolean; // ⬅️ مفيد لصور الخلفية أو full width
}

export default function SafeImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = '/logo.png',
  priority = false,
  suppressHydrationWarning = false,
  fill = false,
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
      alt={alt || "image"}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
      priority={priority}
      suppressHydrationWarning={suppressHydrationWarning}
      onError={handleError}
    />
  );
}
