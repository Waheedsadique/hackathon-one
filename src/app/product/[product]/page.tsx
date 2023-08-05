import { getProduct } from "../../../../sanity/sanity-config"
import SingleProduct from "@/components/Layout/SingleProducts"


type Prop = {
    params: { product: string };
};
const Product = async ({params}: Prop) => {
    const slug = params.product;
    const single = await getProduct(slug);
  return (
    <div>
        <SingleProduct data={single}/>
    </div>
  )
}

export default Product