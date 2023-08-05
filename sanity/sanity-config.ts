import { createClient, groq } from "next-sanity";
import { client } from "../sanity/lib/client";
import { Category } from "../Types/Category";
import { Product } from "../Types/Product";
import { Hero } from "../Types/Hero";
import { Gallery } from "../Types/Gallery";
import { Brand } from "../Types/brand";

export async function getProducts(): Promise<Product[]> {
  const res = await client.fetch(groq`*[_type=="products"]{
          _id,
          _createAt,
          name,
          price,
          "slug": slug.current,
          "category": category->categoryName,
          currency, 
          "images": images->productImages[].asset->url
                 
    }`);
  return res;
}

export async function getCategory(): Promise<Category[]> {
  const res = await client.fetch(groq`*[_type=="category"]{
          _id,
          _createAt,
          categoryName,
          link,
          "categoryImages": categoryImages.asset->url
          
    }`);
  return res;
}
export async function getCategories(category: string): Promise<Product[]> {
  const res = await client.fetch(
    groq`*[_type=="products" && category->categoryName== $category]
    {
          _id,
          _createAt,
          name,
          price,
          "slug": slug.current,
          "category": category->categoryName,
          currency,
          "images": images->productImages[].asset->url
    }`,
    { category }
  );
  return res;
}
export async function getProduct(slug: string): Promise<Product> {
  const res = await client.fetch(
    groq`*[_type=="products" && slug.current == $slug][0]{
            _id,
            _createAt,
            name,
            price,
            "slug": slug.current,
            "category": category->categoryName,
            currency,
            "images": images->productImages[].asset->url
      }`,
    { slug }
  );
  return res;
}
export async function getHeroSection(): Promise<Hero[]> {
  const res = await client.fetch(groq`*[_type=="heroSection"]{
            _id,
            _createAt,
            heroText,
            "heroImages":heroImages[].asset->url,
            details
            
      }`);
  return res;
}
export async function getGallery1(): Promise<Gallery[]> {
  const res =
    await client.fetch(groq`*[_type=="gallery"] {
                              _id,
                              _createAt,
                              galleryText,
                              "galleryImages":galleryImages[].asset->url,
          }`);
  return res;
};

export async function getBrands(): Promise<Brand[]> {
  const res = await client.fetch(groq`*[_type=="brand"] {
                              _id,
                              _createAt,
                              brandText,
                              "brandImages":brandImages[].asset->url,
          }`);
  return res;
}
