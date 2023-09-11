import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!stripeSecretKey) {
  throw new Error('A chave secreta do Stripe não está definida.')
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-08-16',
  appInfo: {
    name: 'Ignite Shop',
  },
})
