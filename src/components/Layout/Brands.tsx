import { getBrands } from "../../../sanity/sanity-config"
import BrandSection from "../view/BrandSection"

const Brands = async () => {
    const brand = await getBrands();
  return (
    <div>
        <BrandSection data={brand}/>
    </div>
  )
}

export default Brands