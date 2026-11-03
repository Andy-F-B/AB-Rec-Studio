import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "AB Recording Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share image for links: the logo on white (public/brand/og.png).
export default function OpengraphImage() {
  const png = readFileSync(join(process.cwd(), "public", "brand", "og.png")).toString("base64");
  return new ImageResponse(
     
    <img src={`data:image/png;base64,${png}`} width={1200} height={630} alt="" />,
    size,
  );
}
