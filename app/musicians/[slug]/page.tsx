import { permanentRedirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

// Old URL. "Musicians" is now "Projects" (also redirected in next.config.ts).
export default async function MusicianRedirect({ params }: Props) {
  permanentRedirect(`/projects/${(await params).slug}`);
}
