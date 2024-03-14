/** @type {import('next').NextConfig} */
const nextConfig = {
    export: "output",
    basePath: process.env.GITHUB_ACTIONS && "/my-home-page",
    trailingSlash: true,
};

export default nextConfig;
