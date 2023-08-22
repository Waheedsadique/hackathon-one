export type Product = {
    _id: string;
    createdAt?: Date;
    name: string;
    slug: string;
    category:string;
    currency:string;
    price:number;
    images:string[];
    user_id:string
  };