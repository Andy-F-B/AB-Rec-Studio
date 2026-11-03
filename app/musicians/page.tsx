import { permanentRedirect } from "next/navigation";

// Old URL. "Musicians" is now "Projects" (also redirected in next.config.ts).
export default function MusiciansRedirect() {
  permanentRedirect("/projects");
}
