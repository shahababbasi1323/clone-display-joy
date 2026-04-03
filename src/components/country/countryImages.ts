import middleEastImg from "@/assets/countries/middle-east.jpg";
import southAsiaImg from "@/assets/countries/south-asia.jpg";
import europeImg from "@/assets/countries/europe.jpg";
import northAmericaImg from "@/assets/countries/north-america.jpg";
import eastAsiaImg from "@/assets/countries/east-asia.jpg";
import southeastAsiaImg from "@/assets/countries/southeast-asia.jpg";
import latinAmericaImg from "@/assets/countries/latin-america.jpg";
import africaImg from "@/assets/countries/africa.jpg";

const regionMap: Record<string, string> = {
  // Middle East & North Africa
  uae: middleEastImg,
  "saudi-arabia": middleEastImg,
  qatar: middleEastImg,
  kuwait: middleEastImg,
  bahrain: middleEastImg,
  oman: middleEastImg,
  jordan: middleEastImg,
  israel: middleEastImg,
  turkey: middleEastImg,
  egypt: middleEastImg,

  // South Asia
  pakistan: southAsiaImg,
  india: southAsiaImg,
  bangladesh: southAsiaImg,
  "sri-lanka": southAsiaImg,
  nepal: southAsiaImg,

  // Europe
  uk: europeImg,
  germany: europeImg,
  france: europeImg,
  italy: europeImg,
  spain: europeImg,
  netherlands: europeImg,
  portugal: europeImg,
  ireland: europeImg,
  poland: europeImg,
  "czech-republic": europeImg,
  hungary: europeImg,
  romania: europeImg,
  greece: europeImg,
  austria: europeImg,
  switzerland: europeImg,
  belgium: europeImg,
  denmark: europeImg,
  sweden: europeImg,
  norway: europeImg,
  finland: europeImg,

  // North America & Oceania
  usa: northAmericaImg,
  canada: northAmericaImg,
  australia: northAmericaImg,
  "new-zealand": northAmericaImg,

  // East Asia
  japan: eastAsiaImg,
  "south-korea": eastAsiaImg,

  // Southeast Asia
  singapore: southeastAsiaImg,
  malaysia: southeastAsiaImg,
  thailand: southeastAsiaImg,
  philippines: southeastAsiaImg,

  // Latin America
  brazil: latinAmericaImg,
  mexico: latinAmericaImg,
  colombia: latinAmericaImg,
  argentina: latinAmericaImg,
  chile: latinAmericaImg,
  peru: latinAmericaImg,

  // Africa
  "south-africa": africaImg,
  nigeria: africaImg,
  kenya: africaImg,
};

export function getCountryHeroImage(slug: string): string {
  return regionMap[slug] || europeImg;
}
