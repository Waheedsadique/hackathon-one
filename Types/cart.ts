export type cartProduct={
    _id: string;
    createdAt?: Date;
    name: string;
    slug: string;
    category:string;
    currency:string;
    quantity:number;
    price:number;
    images:string[];

}
export type cart={
    cartItems:cartProduct[],
    totalQuantity:number,
    totalAmount:number,
}