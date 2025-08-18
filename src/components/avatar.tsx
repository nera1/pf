import React, { useRef, useState } from "react";

interface AvatarProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  scale?: number;
  offsetX?: number;
  offsetY?: number;
  backgroundColor?: string; // 배경색 prop (양옆 레터박스 영역 색)
}

const Avatar: React.FC<AvatarProps> = ({
  className = "",
  width = 300,
  height = 300,
  borderRadius = 8,
  scale = 1,
  offsetX = 0,
  offsetY = 0,
  backgroundColor = "#ffffff", // 기본 배경색
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
        backgroundColor,
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
            width: "100%", // 컨테이너 기준
            height: "100%", // 컨테이너 기준
            objectFit: "contain", // 비율 유지, 양옆/위아래는 컨테이너 배경색으로
            transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`,
            transformOrigin: "center center",
            userSelect: "none",
            pointerEvents: "none",
            display: "block",
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
