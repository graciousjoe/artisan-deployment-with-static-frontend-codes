// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',  // Next.js 13+
// }

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // ✅ Only export frontend pages (ignore API routes)
  exportPathMap: async function () {
    return {
      '/': { page: '/' },   // homepage
      // add more routes if you have them (e.g. '/about': { page: '/about' })
    }
  },
}

export default nextConfig;