/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === "production";

const nextConfig = {
    basePath: prod ? "/my-home-page" : "",
    output: "export",
    images: { unoptimized: true } ,
};

export default nextConfig;
