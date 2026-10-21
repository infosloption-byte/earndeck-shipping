import type { NextConfig } from 'next';
const nextConfig: NextConfig = {reactStrictMode:true,output:'standalone',poweredByHeader:false,images:{qualities:[75,80],remotePatterns:[{protocol:'https',hostname:'images.unsplash.com',pathname:'/photo-**'}]},distDir:process.env.NODE_ENV==='development'?'.next-dev':'.next',async redirects(){return [
{source:'/services/draft',destination:'/services/draft-survey',permanent:true},
{source:'/services/bunker',destination:'/services/bunker-quantity-survey',permanent:true},
{source:'/services/cargo',destination:'/services/cargo-survey',permanent:true},
{source:'/services/container',destination:'/services/container-survey',permanent:true},
{source:'/services/ism',destination:'/services/ism-audit',permanent:true},
{source:'/services/mlc',destination:'/services/mlc-inspection',permanent:true},
{source:'/services/hire',destination:'/services/on-off-hire-survey',permanent:true},
{source:'/services/certification',destination:'/services/cargo-certification',permanent:true},
{source:'/services/harmonized',destination:'/services/harmonized-audit',permanent:true},
{source:'/services/hull',destination:'/services/hull-machinery-inspection',permanent:true},
{source:'/services/prepurchase',destination:'/services/pre-purchase-vetting',permanent:true},
{source:'/services/compass',destination:'/services/compass-adjustment',permanent:true},
{source:'/marine-careers',destination:'/careers',permanent:true},
{source:'/marine-certificates',destination:'/certifications',permanent:true}
];}};
export default nextConfig;