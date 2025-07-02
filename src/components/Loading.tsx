"use client";

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

export default function Loading({ size = 'md', text = 'Loading...', fullScreen = false }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4';

  return (
    <div className={containerClasses} suppressHydrationWarning>
      <div className="text-center">
        <div className={`${sizeClasses[size]} border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto`}></div>
        {text && <p className="mt-2 text-gray-600">{text}</p>}
      </div>
    </div>
  );
}
