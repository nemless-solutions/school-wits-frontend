import Image, { StaticImageData } from "next/image";

export function Icon({
  src,
  alt,
  containerBgColor = "#F5F2FF",
  containerHeight = 48,
  containerWidth = 48,
  containerRadius = 8,
  height = 24,
  width = 24,
}: {
  src: StaticImageData;
  alt?: string;
  containerBgColor?: string;
  containerHeight?: number;
  containerWidth?: number;
  containerRadius?: number;
  height?: number;
  width?: number;
}) {
  return (
    <div
      style={{
        backgroundColor: containerBgColor,
        height: containerHeight,
        width: containerWidth,
        borderRadius: containerRadius,
      }}
      className="flex items-center justify-center"
    >
      <Image src={src} alt={alt || "Icon"} height={height} width={width} />
    </div>
  );
}
