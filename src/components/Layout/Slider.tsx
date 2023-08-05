import { getProducts } from "../../../sanity/sanity-config"
import ProductSlider from "../view/Sliderproduct"

const Slider = async () => {
    const data = await getProducts();
  return (
    <div>
        <ProductSlider Sdata={data}/>
    </div>
  )
}

export default Slider