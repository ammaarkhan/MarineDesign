import React from "react";

interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageContainer = ({ src, alt, className }: ImageContainerProps) => {
  return (
    <img src={src} alt={alt} className={`rounded-xl shadow-md ${className}`} />
  );
};

export default ImageContainer;
