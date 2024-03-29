module.exports = {
    reactStrictMode: true,
    images: {
        loader: "default",
        domains: [`${process.env.NEXT_PUBLIC_STRAPI_API_URL} || "http://localhost:1337`],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                // pathname: 'image/upload/**',
            },
        ],
    },
}