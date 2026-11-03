import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Simple "AB" mark. Replace with app/icon.png if the studio has a logo.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0d",
          color: "#f5a524",
          fontSize: 34,
          fontWeight: 800,
          borderRadius: 14,
        }}
      >
        AB
      </div>
    ),
    size,
  );
}
