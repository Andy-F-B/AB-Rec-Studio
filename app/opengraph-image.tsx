import { ImageResponse } from "next/og";
import { getStudio } from "@/lib/content";

export const alt = "AB Recording Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share image for links. Replace with app/opengraph-image.jpg if the studio has a photo.
export default function OpengraphImage() {
  const studio = getStudio();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0b0d",
          color: "#f4f4f5",
        }}
      >
        <div style={{ color: "#f5a524", fontSize: 28, letterSpacing: 6, fontWeight: 700 }}>RECORDING STUDIO</div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 16 }}>{studio.name}</div>
        <div style={{ fontSize: 36, color: "#a1a1aa", marginTop: 24 }}>{studio.tagline}</div>
      </div>
    ),
    size,
  );
}
