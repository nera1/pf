import React, { useRef, useState } from "react";

interface AvatarProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
}

const Avatar: React.FC<AvatarProps> = ({
  className = "",
  width = 300,
  height = 300,
  borderRadius = 8,
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
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="uploded iamge"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
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
