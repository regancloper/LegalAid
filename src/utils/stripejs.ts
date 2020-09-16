/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe } from '@stripe/stripe-js';

let stripePromise: any;
const getStripe = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(
			String(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
		);
	}
	return stripePromise;
};

export default getStripe;
