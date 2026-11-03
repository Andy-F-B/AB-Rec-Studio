import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// Browser tab icon: the record + sun from the logo (public/brand/icon-512.png).
export default function Icon() {
  const png = readFileSync(join(process.cwd(), "public", "brand", "icon-512.png")).toString("base64");
  return new ImageResponse(
     
    <img src={`data:image/png;base64,${png}`} width={512} height={512} alt="" />,
    size,
  );
}
