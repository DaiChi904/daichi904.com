/** @type {import('next').NextConfig} */

/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = "/my-home-page";

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    basePath: isProd ? SUB_DIRECTORY : "",
    assetPrefix: isProd ? SUB_DIRECTORY : "",
    output: isProd ? "export" : "standalone",
    images: { unoptimized: true } ,
};

module.exports = nextConfig