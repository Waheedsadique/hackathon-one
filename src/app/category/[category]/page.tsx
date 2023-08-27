import ProductList from "@/components/view/ProductsList";
import { getCategories } from "../../../../sanity/sanity-config";

type Prop1 = {
    params: { category: string };
};

const ProductCategory = async ({ params }: Prop1) => {
    const category = params.category;
    const singleCategory = await getCategories(category);
  return (
    <div>
        <ProductList pdata={singleCategory}/>
    </div>
  )
}

export default ProductCategory