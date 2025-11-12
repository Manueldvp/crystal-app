// ⚠️ WARNING: This file uses cors-anywhere which has CRITICAL security vulnerabilities
// ⚠️ DO NOT USE IN PRODUCTION
// 
// This file has been disabled. If you need CORS proxy functionality:
// 1. For development: Configure Next.js rewrites in next.config.js
// 2. For production: Set up proper CORS headers on your backend API
//
// Example Next.js rewrite configuration:
// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'https://your-api-url.com/:path*',
//       },
//     ]
//   },
// }

console.error('⚠️ CORS proxy server has been disabled due to security vulnerabilities.');
console.error('Please configure Next.js rewrites or backend CORS headers instead.');
process.exit(1);