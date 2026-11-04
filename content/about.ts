import type { AboutSection } from "@/lib/types";

// Body: blank lines split paragraphs. Optional `image`: /images/about/<file>.jpg (landscape, 1200px+).
export const aboutSections: AboutSection[] = [
  {
    id: "our-story",
    image: "/images/about/alan-lfo.jpg",
    title: "Our story",
    body: `AB Recording Studio is an Orlando, Florida recording studio run by father-and-son duo Alan and Andy Binau — two producers, songwriters and musicians with years of experience on stage, in the studio and in the church. From songwriting and arrangement to tracking, mixing and live sound, AB brings a touring musician's ear and a producer's attention to detail to every project.

The name says who we are: AB stands for Alan & Andy Binau.`,
  },
  {
    id: "alan-binau",
    image: "/images/about/alan.jpg",
    title: "Alan Binau",
    subtitle: "Lead Producer · Audio Engineer · Musician",
    body: `Born in Copenhagen, Denmark, Alan Binau picked up his first guitar at 15 and has been writing, playing and producing music ever since. He came up through the Copenhagen band scene, first with "Gypsy" and later with "Grumpy," playing hundreds of gigs through the 1990s. In 2000 and 2002 he composed and recorded music for two ballets, Ghosts and Ocean, and he has written charity songs for several organizations, including the Danish MS Association and military veterans.

In 2007 Alan founded CEONEO in Copenhagen — the Danish-American band he still leads today, with multiple Denmark tours and a long run of releases. Between 2006 and 2016 he produced a score of Danish artists through his record company, Danish Music Company, and he is a former co-owner of Tigerspring Records and Radio North.

Alan moved to the U.S. in 2009. Since 2017 he has toured with LFO ("Summer Girls," "Girl on TV," "Every Other Time"), playing acoustic guitar and percussion and singing backing vocals, starting with their East Coast "Rich in Love" tour. He records, arranges, mixes and produces for other artists, including Leo Von, Kenny Broc, M Rosset, Byorn Gold, Harold Lima, Brad Fischetti and Shelley Hicks. He has also worked with Rico Monaco (Sammy Hagar, Tears for Fears, The Monkees), Ted Anderson (Joe Perry), Reel Republic and others, and works as a front-of-house engineer for live shows.

Alan was a member of the Christian band Band of Angels (Celebration, FL) for almost 10 years, playing bass and guitar. He has also served with NewSong (Orlando) and with worship teams at Corpus Christi Catholic Church and Sunshine Church, and has played several prison and charity concerts in the Orlando area.

Instruments: vocals and guitar primarily; he has also recorded bass, keyboards, mellotron, percussion, harmonica, banjo, mandolin and ukulele. Influences: 60s rock (Pink Floyd, The Beatles, The Doors), Americana (Johnny Cash, Willie Nelson), Björk, country and hard rock (Deep Purple, Black Sabbath).`,
  },
  {
    id: "andy-binau",
    image: "/images/about/andy-portrait.jpg",
    title: "Andy Binau",
    subtitle: "Producer · Musician · Multi-instrumentalist",
    body: `Andy Binau has been playing music since he was very young, starting out in jazz band and branching into just about every style and genre since. A true multi-instrumentalist, he covers guitar (acoustic and electric), bass, drums, keys, percussion, vocals and harmonica.

Andy fronts his own band, Gravis Pars, and is a member of Zara among other projects. After years with CEONEO as a guest musician, roadie and live sound engineer, he joined as a core member — lead guitarist and backing vocalist, also contributing lead vocals, acoustic guitar and harmonica. CEONEO was named Band of the Year at the 2024 Celebration Festival. Andy and Alan are currently producing a new CEONEO album together.

Like his father, Andy has spent years serving in church music, including as a worship musician at Calvary Assembly of God in Kissimmee (guitar, bass, drums, vocals) and as worship leader at Sunshine Church.`,
  },
  {
    id: "church-and-worship",
    title: "Church & worship",
    body: `Both Alan and Andy have spent many years playing in church — honing their craft and helping worship bands raise the quality of their sound, musicianship and production.`,
  },
  {
    id: "gear",
    title: "Gear",
    body: `Mics: Neumann U-87 (studio), Shure Beta 58 wireless (live)

Guitars: Fender Telecaster & Stratocaster, Rickenbacker 360 12-string, Gibson Hummingbird, Martin 6-string, Taylor 12-string, Hagstrom Viking, plus banjo, ukuleles, dobro, lap steel and mandolin

Keys: Mini Moog Voyager, Kurzweil PC3x, Roland RS-202 Stringer

Bass: Fender Jazz Bass

Amp: Vox Night Train`,
  },
];
