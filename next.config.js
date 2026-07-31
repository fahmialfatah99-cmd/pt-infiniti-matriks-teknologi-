/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true, // Partial Prerendering - Masa depan
    viewTransition: true // Transisi antar halaman native
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  }
}
