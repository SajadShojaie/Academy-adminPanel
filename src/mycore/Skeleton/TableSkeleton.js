import React from "react";
import ContentLoader from "react-content-loader";

const HelpLinksLoader = (props) => (
  <ContentLoader
    width={700}
    height={350}
    viewBox='0 0 700 350'
    backgroundColor='#f5f5f5'
    foregroundColor='#dbdbdb'
    {...props}
  >
    <rect x='4' y='8' rx='3' ry='3' width='8' height='317' />
    <rect x='7' y='317' rx='3' ry='3' width='669' height='8' />
    <rect x='669' y='9' rx='3' ry='3' width='7' height='313' />
    <rect x='5' y='8' rx='3' ry='3' width='669' height='7' />
    <rect x='90' y='52' rx='6' ry='6' width='483' height='15' />
    <circle cx='600' cy='60' r='15' />
    <rect x='150' y='105' rx='6' ry='6' width='420' height='15' />
    <circle cx='600' cy='113' r='15' />
    <rect x='90' y='158' rx='6' ry='6' width='483' height='15' />
    <circle cx='600' cy='166' r='15' />
    <rect x='150' y='211' rx='6' ry='6' width='420' height='15' />
    <circle cx='600' cy='219' r='15' />
    <rect x='90' y='263' rx='6' ry='6' width='483' height='15' />
    <circle cx='600' cy='271' r='15' />
  </ContentLoader>
);

export default HelpLinksLoader;
