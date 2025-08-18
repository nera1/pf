import React, { useRef, useState } from "react";

interface AvatarProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  scale?: number;
  offsetX?: number;
  offsetY?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  className = "",
  width = 300,
  height = 300,
  borderRadius = 8,
  scale = 1,
  offsetX = 0,
  offsetY = 0,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={className}
      onClick={handleDivClick}
      style={{
        width,
        height,
        borderRadius,
        background: "#ffffff",
        border: "1px solid #e5e5e5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="uploaded image"
          style={{
            transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`,
            transformOrigin: "center center",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            userSelect: "none",
            pointerEvents: "none",
          }}
          draggable={false}
        />
      ) : (
        <span style={{ fontSize: "48px" }}>🙋🏻‍♂️</span>
      )}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Avatar;
