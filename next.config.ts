import type { NextConfig } from 'next';
const nextConfig: NextConfig = {reactStrictMode:true,poweredByHeader:false,async redirects(){return [
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
{source:'/services/prepurchase',destination:'/services/pre-purchase-vetting',permanent:true}
];}};
export default nextConfig;