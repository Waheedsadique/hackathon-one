import { getHeroSection } from "../../../sanity/sanity-config"

import HeroSection from "../view/HeroSection"

const Hero = async () => {
    const hero = await getHeroSection();
  return (
    <div>
        <HeroSection data={hero}/>
    </div>
  )
}

export default Hero