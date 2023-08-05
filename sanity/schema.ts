import { type SchemaTypeDefinition } from 'sanity';
import hero from './Schema/hero';
import products from './Schema/products';
import category from './Schema/category';
import images from './Schema/images';
import gallery from './Schema/gallery';
import brand from './Schema/brand';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, products, category, images, gallery, brand],
}
