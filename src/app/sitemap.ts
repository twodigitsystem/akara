import type { MetadataRoute } from "next"
import { products } from "@/lib/products"

const BASE_URL = "https://akara.co.in"

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        "",
        "/shop",
        "/infrastructure",
        "/about",
        "/contact",
        "/faq",
        "/sustainability",
        "/privacy",
        "/terms",
    ].map((path) => ({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: path === "" ? 1 : 0.8,
    }))

    const productPages = products.map((product) => ({
        url: `${BASE_URL}/product/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }))

    return [...staticPages, ...productPages]
}
