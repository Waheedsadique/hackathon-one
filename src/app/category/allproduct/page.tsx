import { getProducts } from "../../../../sanity/sanity-config"
import ProductList from "@/components/view/ProductsList"

const AllProducts = async () => {
    const product = await getProducts();
  return (
    <div>
      <ProductList pdata={product}/>
    </div>
  )
}

export default AllProducts