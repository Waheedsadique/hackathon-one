import { loadStripe, Stripe } from '@stripe/stripe-js';


let stripePromise : Promise<Stripe | null>

const getStripePromise = () => {
    const key:any = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!stripePromise && process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
        stripePromise = loadStripe(key)
    }
    return stripePromise;
}

export default getStripePromise;