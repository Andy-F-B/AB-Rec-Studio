# Only three Projects artists have confirmable albums

Of the 11 artists on the AB Recording Studio Projects page, only **CEONEO, Benzen & Binau and Byorn Gold** have album releases that can be documented from public sources. Even for those three, most album-level Spotify links and exact release dates are missing or unverified. CEONEO has **three 13–14 track albums distributed in May–June 2026** (Father's Sun, Inspired by Brothers, No Slack!) and a 5-track Danish release from 2023, but no Spotify album URLs could be extracted ([iHeart](https://www.iheart.com/artist/ceoneo-30583999)). Benzen & Binau's own site names two 12-track albums, **Pigs on the Moon** and **The jellyfish says hello**, with no dates ([benzenbinau.com](https://benzenbinau.com/)). Byorn Gold has the richest data: four albums with Spotify album URLs taken from review embeds ([Broken 8 Music](https://www.broken8music.com/blogs/reviews/byorn-gold-s-ambrosia-is-a-three-act-album-charting-love-s-journey)). Brad Fischetti, Leo Von and Marcos Rosset (Mrosset) show **singles only**, and no albums at all were found for Zara, Gravis Pars, Kenny Broc or Shelley Hicks. A developer can fill `credits` now for CEONEO (titles and dates), Byorn Gold (titles, years, Spotify) and Benzen & Binau (titles only). Every other artist needs input from Alan or Andy before their entry can be anything but empty. One limitation applies throughout: Spotify pages fetched without their discography section, and the iTunes and Deezer APIs were blocked. "Not found" therefore means "not found with these tools", not proof that nothing exists.

**How to read the tables.** *Verified* means the link comes from the artist's own site or was opened and matched. *Unverified* means it was found by search or in an embed but not confirmed as the right artist or release. Confidence is **H**igh, **M**edium or **L**ow. The suggested `releaseDate` follows the site format (YYYY-MM-DD or YYYY).

## CEONEO and Benzen & Binau hold the core Binau catalog

CEONEO, Alan Binau's Copenhagen band founded in 2007, has the strongest album evidence. The three 2026 albums are tied to the band because **every track title on Father's Sun and No Slack! matches the credits and lyrics pages on ceoneo-us.com** ([ceoneo-us.com](https://ceoneo-us.com/alan-binau)). The iHeart dates (May–June 2026) are probably distributor upload dates rather than original release dates. The band's site advertised album release parties in **December 2016 and April 27, 2019**, and a 2019 review mentions a just-released "4th album" ([Metal A Day](https://metaladay.dk/anmeldelse/omgivelserne-trak-bandet-og-budskabet-ned); [ceoneo-us.com/music](https://ceoneo-us.com/music)). At least one of these 2026 titles is likely a re-release of an older album, so Alan should confirm the original dates.

**CEONEO.** Spotify artist (unverified, M): https://open.spotify.com/artist/43VkPRq6i7FB6gldbtcSkA, which showed "0 monthly listeners" and nothing that ties it to Binau. Verified: [official site](https://ceoneo-us.com), [iHeart](https://www.iheart.com/artist/ceoneo-30583999).

| Album | Release date | Type | Spotify | Other links | Confidence |
|---|---|---|---|---|---|
| Father's Sun | 2026-05-21 (distributor date) | Album, 14 tr | not found | [iHeart](https://www.iheart.com/artist/ceoneo-30583999/albums/fathers-sun-405881194/) | H (identity), M (date) |
| Inspired by Brothers | 2026-05-27 | Album, 13 tr | not found | [iHeart](https://www.iheart.com/artist/ceoneo-30583999/albums/inspired-by-brothers-407005632/) | H |
| No Slack! | 2026-06-09 | Album, 14 tr, explicit | not found | [iHeart](https://www.iheart.com/artist/ceoneo-30583999/albums/no-slack-406802242/) | H (identity), M (date) |
| Tilbage i 70'erne | 2023-05 → use `2023` | EP-length (5 tr) | not found | [iHeart](https://www.iheart.com/artist/ceoneo-30583999/albums/tilbage-i-70erne-217737465/) | M |
| Beautiful and Fragile | 2018 | EP (2nd of 3) | not found | [ceoneo-us.com/music](https://ceoneo-us.com/music) | H exists / L streaming |
| HOT DOG OR MUSIC | ~2018 | EP | not found | [ceoneo-us.com/music](https://ceoneo-us.com/music) | H exists / L date |
| Made of Paint | ~2018 (unconfirmed) | EP | not found | [ceoneo-us.com/music](https://ceoneo-us.com/music) | M |
| U.S. Remix EP | unknown | EP | not found | [ceoneo-us.com/music](https://ceoneo-us.com/music) | M |

The site also lists a new single, "So Many Brothers and Sisters", which does not belong in album credits.

**Benzen & Binau.** This is the Alan Binau and Klaus Benzen power-pop duo, formed in 2017. Its Spotify artist link is **verified** because the band site links to it: https://open.spotify.com/artist/2IffhwR5LideNJqA5ZfkOJ ([benzenbinau.com](https://benzenbinau.com/)). Other verified links from the band site: [YouTube](https://www.youtube.com/@BenzenBinau), [SoundCloud (Klaus Benzen)](https://soundcloud.com/klaus-benzen), [Bandcamp](https://benzenbinau.bandcamp.com/music) (singles only), [Instagram](https://www.instagram.com/benzenbinau/) and [TikTok](https://www.tiktok.com/@benzenbinau).

| Album | Release date | Type | Spotify | Other links | Confidence |
|---|---|---|---|---|---|
| Pigs on the Moon | unknown ("out now") | Album, 12 tr | not found (use artist link) | [benzenbinau.com](https://benzenbinau.com/) | H exists / no date |
| The jellyfish says hello | unknown | Album, 12 tr | not found | [benzenbinau.com](https://benzenbinau.com/) | H exists / no date |

The single "Miss You" is not an album. Its dates conflict: Bandcamp gives 2019-02-08 ([Bandcamp](https://benzenbinau.bandcamp.com/track/miss-you)), while Apple Music lists it as a 2018 single under the artist "Binau" ([Apple Music](https://music.apple.com/us/artist/binau/1355476654)). Avoid the unrelated Spotify artists "Benzen" (7o6qDZTMNNsoaXDetmbUlt) and "Benzene" (album 2x2qET3FMlPltRx240RfHW).

## Alan Binau solo and Gravis Pars are nearly invisible online

For Alan Binau's solo work, the research notes disagree. One pass found nothing for "Farvel Danmark". Another found an Apple Music listing for **"Farvel Danmark - EP"** at https://music.apple.com/us/album/farvel-danmark-ep/955496758 ([Apple Music](https://music.apple.com/us/album/farvel-danmark-ep/955496758)). The page itself was not checked to confirm that the artist credit is Alan Binau or to read a date. Apple labels it an EP, so it should go in the credits as an EP, not an album, until Alan says otherwise. Album ID 955496758 falls in Apple's 2014–2015 numbering range, but that is a guess and should not be used as a date.

| Artist | Album | Release date | Type | Spotify | Other links | Confidence |
|---|---|---|---|---|---|---|
| Alan Binau | Farvel Danmark | unknown | EP (per Apple) | not found | [Apple Music, unverified](https://music.apple.com/us/album/farvel-danmark-ep/955496758) | L–M |
| Gravis Pars | none found | none | none | not found | none | none |

**No Gravis Pars release or profile surfaced anywhere.** The unrelated metal and electronic artists named "Gravis" on Apple Music, Deezer and Discogs ([Apple Music Gravis](https://music.apple.com/us/artist/gravis/1718345465)) must not be used.

## Byorn Gold supplies the most usable album data

Byorn Gold (Danish, apparently Bjørn Guldager) connects to Binau through a shared June 2024 show with CEONEO in Denmark, not a production credit ([ceoneo-us.com](https://ceoneo-us.com/alan-binau)). His catalog is substantial: *Ambrosia* is billed as his **7th full-length album**. All the Spotify album URLs below come from Broken 8 Music review embeds and were not opened directly, so treat them as **unverified but likely**. The review dates are a ceiling on each release date, not the date itself, so use the year only.

| Album | Release date | Type | Spotify (unverified, from embed) | Other links | Confidence |
|---|---|---|---|---|---|
| Styles | 2019 | Album (debut) | https://open.spotify.com/album/249nLxK3Q3Q7pE1I25r9kO | [review](https://www.broken8music.com/blogs/reviews/byorn-golds-new-album-charts-a-heartfelt-journey-through-parenthood) | M |
| Elody (For My Children, Part 1) | 2025 | Album, 5th, 12 tr | https://open.spotify.com/album/3cd6nF8wdI8cs7OPmnQHy2 | [review](https://www.broken8music.com/blogs/reviews/byorn-golds-new-album-charts-a-heartfelt-journey-through-parenthood) | M–H |
| Borderlines | 2025 | Album (3 EPs combined), 13 tr | https://open.spotify.com/album/0Szj3UCBS46ytgH5sYPK9p (embed not labeled in the review) | [review](https://www.broken8music.com/blogs/reviews/byorn-golds-borderlines-is-a-storied-journey-through-sound-and-film) | M |
| Ambrosia | 2025 | Album, 7th, 12 tr | https://open.spotify.com/album/7m29dXGYVz8LdXbzSoezEQ | [review](https://www.broken8music.com/blogs/reviews/byorn-gold-s-ambrosia-is-a-three-act-album-charting-love-s-journey) | M–H |

The Borderlines component EPs are *Stories From Before Dawn* (6inG60ym0trWKCmnavFLLt), *Stories from the Western Edge* (4950NBPE5gBj94yf2tNH9T) and *Stories from the Middle Ages* (6j2MrjWWr0oa60J1PI5A0G). Albums #2–#4, and possibly #6, are unidentified. No Spotify artist URL was found. Socials from the reviews: [Instagram](https://www.instagram.com/byorngold/), [Facebook](https://www.facebook.com/ByornGold/), [YouTube](https://m.youtube.com/@ByornGoldOfficial).

## Fischetti, Leo Von and Mrosset release singles, not albums

All three are named in Binau's bio as collaborators ([ceoneo-us.com](https://ceoneo-us.com/alan-binau)), but none has a documented solo album. Each should get either an empty credits list or a single-only entry if the site allows singles.

**Brad Fischetti** (LFO). His Apple Music page is verified: https://music.apple.com/gb/artist/brad-fischetti/306679247. It lists only singles: "Ode to Harold" (2020, with at least 2 tracks, likely a Devin Lima tribute), "Set Adrift on Memory Bliss" (2025) and "Let You Down" (2026) ([Apple Music](https://music.apple.com/gb/artist/brad-fischetti/306679247)). No Spotify artist URL was found. The LFO band albums *LFO* (1999) and *Life Is Good* (2001) are group releases, not his solo work ([Wikipedia](https://en.wikipedia.org/wiki/LFO_(American_band))). The *LFO* Spotify album, https://open.spotify.com/album/6DZdRerOCdaQyBLwntH2cX, was found by search and not opened. Use the band albums only if the site wants band credits.

**Leo Von** ("Leo Von (Brazil)" in the bio). His Deezer page shows only singles from 2014–2025. It calls **"The Only Country Bar in Town" a new single**, and a May 2024 Brazilian article headline also describes it as a single ([Deezer](https://www.deezer.com/artist/4781295); [Flertaí](http://flertai.com.br/2024/05/leo-von-lanca-single-e-videoclipe-inspirado-no-melhor-da-country-music-americano/)). A 2-track self-titled release, *Leo Von* (2019-10-22, Midas Music), is the closest thing to an EP. Spotify artist (unverified): https://open.spotify.com/artist/0zCnBwJzzJTq5eQSpHTzvX ([Spotify](https://open.spotify.com/artist/0zCnBwJzzJTq5eQSpHTzvX)).

**Marcos Rosset / Mrosset.** The Spotify artist "Mrosset" matches the bio's spelling "MRosset": https://open.spotify.com/artist/11vMbyul3YngMHNDY0GseJ (M). Its one release is the single **"He Never Left" (2021-08-01)** at https://open.spotify.com/album/6wnI1TKIqphE23deT0hFiH ([Spotify](https://open.spotify.com/album/6wnI1TKIqphE23deT0hFiH)). **The album "Infilennium" returned zero search hits.** It is either unreleased or not indexed.

| Artist | Album | Release date | Type | Spotify | Other links | Confidence |
|---|---|---|---|---|---|---|
| Brad Fischetti | no solo album | none | singles only | artist URL not found | [Apple Music, verified](https://music.apple.com/gb/artist/brad-fischetti/306679247) | M–H (no album) |
| Leo Von | no album (Leo Von, 2-tr, 2019-10-22) | 2019-10-22 | EP/single | [artist, unverified](https://open.spotify.com/artist/0zCnBwJzzJTq5eQSpHTzvX) | [Deezer](https://www.deezer.com/artist/4781295), [iHeart](https://www.iheart.com/artist/leo-von-30063958) | M |
| Mrosset | Infilennium | unknown | Album (unfound) | [artist](https://open.spotify.com/artist/11vMbyul3YngMHNDY0GseJ) | none | L |

## Zara, Kenny Broc and Shelley Hicks return nothing usable

None of these three could be tied to Binau through a streaming profile. **Zara**, described as a Christian rock band with Andy Binau as a member, is not mentioned on CEONEO's pages, and searches surface only unrelated artists named Zara ([ceoneo-us.com/music](https://ceoneo-us.com/music)). **Kenny Broc** is named in Binau's bio, but the "British Invasion" album was not found. The Spotify and Apple Music "Kenny Brock" (with a k) profiles are a different R&B artist and must not be used ([Apple Music Kenny Brock](https://music.apple.com/us/artist/kenny-brock/1550432821)). **Shelley Hicks** has [TIDAL](https://tidal.com/browse/artist/27542727) and [Discogs](https://www.discogs.com/artist/10211530-Shelley-Hicks) pages whose contents could not be read. Nothing ties either page to Binau or Florida.

| Artist | Album | Release date | Type | Spotify | Other links | Confidence |
|---|---|---|---|---|---|---|
| Zara | none found | none | none | none | none | none |
| Kenny Broc | British Invasion (unfound) | unknown | Album | none | none | L |
| Shelley Hicks | none found | none | none | none | [TIDAL, unverified](https://tidal.com/browse/artist/27542727), [Discogs, unverified](https://www.discogs.com/artist/10211530-Shelley-Hicks) | L |

## Ready-to-enter credits

Only the following entries can go into content files now. Everything else is waiting on confirmation from Alan or Andy.

```yaml
ceoneo:
  - { title: "Father's Sun",         releaseDate: "2026-05-21", spotify: null }
  - { title: "Inspired by Brothers", releaseDate: "2026-05-27", spotify: null }
  - { title: "No Slack!",            releaseDate: "2026-06-09", spotify: null }
  - { title: "Tilbage i 70'erne",    releaseDate: "2023",       spotify: null }   # EP-length
benzen-binau:   # artist link verified: https://open.spotify.com/artist/2IffhwR5LideNJqA5ZfkOJ
  - { title: "Pigs on the Moon",         releaseDate: null, spotify: null }
  - { title: "The jellyfish says hello", releaseDate: null, spotify: null }
byorn-gold:     # Spotify URLs from review embeds, open to confirm before shipping
  - { title: "Styles",                         releaseDate: "2019", spotify: "https://open.spotify.com/album/249nLxK3Q3Q7pE1I25r9kO" }
  - { title: "Elody (For My Children, Part 1)", releaseDate: "2025", spotify: "https://open.spotify.com/album/3cd6nF8wdI8cs7OPmnQHy2" }
  - { title: "Borderlines",                    releaseDate: "2025", spotify: "https://open.spotify.com/album/0Szj3UCBS46ytgH5sYPK9p" }
  - { title: "Ambrosia",                       releaseDate: "2025", spotify: "https://open.spotify.com/album/7m29dXGYVz8LdXbzSoezEQ" }
```

## Needs confirmation from Alan/Andy

- [ ] **Zara**: band name, album titles, dates, and any streaming or social link.
- [ ] **Gravis Pars**: does it have released albums? Need a Spotify or Bandcamp link.
- [ ] **Farvel Danmark**: is it Alan's solo release (Apple Music [955496758](https://music.apple.com/us/album/farvel-danmark-ep/955496758))? Is it an EP or an album, what is the release date, and is there a Spotify link?
- [ ] **Kenny Broc**: correct spelling, and whether "British Invasion" has been released (date, link).
- [ ] **Infilennium (Marcos Rosset)**: released yet? Confirm that "Mrosset" on Spotify is him.
- [ ] **Shelley Hicks**: album titles and links; confirm whether the TIDAL/Discogs profile is her.
- [ ] **CEONEO**: original release years for Father's Sun and No Slack! (2016/2019 release parties?); confirm Spotify artist 43VkPRq6i7FB6gldbtcSkA and get album URLs; dates for the 2018 EPs.
- [ ] **Benzen & Binau**: release dates and Spotify album URLs for Pigs on the Moon and The jellyfish says hello.
- [ ] **Brad Fischetti / Leo Von**: confirm no solo albums (singles only); provide Spotify artist URLs. Is "The Only Country Bar in Town" a single?
- [ ] **Byorn Gold**: exact release dates, Spotify artist URL, and whether albums #2–#4 belong on the site.

## Conclusion

The data gap is mostly about access, not about missing releases. Spotify's discography section would not render from this environment, so a 10-minute pass in the Spotify app (or one Spotify Web API call per artist ID listed above) would likely fill most of the empty Spotify cells for CEONEO and Benzen & Binau. The bigger editorial question is scope. Five of the 11 Projects artists have no confirmed album at all, so the site needs to decide whether `credits` can hold singles and EPs, or whether those artists show no releases until Alan or Andy supply them. Ask them once with the checklist above rather than doing more web research: the remaining unknowns (Zara, Gravis Pars, Infilennium, British Invasion) are not indexed anywhere public.
