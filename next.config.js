/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['files.stripe.com'], // Domínio deve estar em um array
  },
}

module.exports = nextConfig
