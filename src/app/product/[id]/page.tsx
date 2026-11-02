import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProductBySlug, products } from "@/lib/products"
import { ProductGallery } from "../_components/product-gallery"

export const dynamicParams = false

export function generateStaticParams() {
    return products.map(({ slug }) => ({ id: slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const { id } = await params
    const product = getProductBySlug(id)
    if (!product) return { title: "Product Not Found" }
    return {
        title: `${product.title} | Akara Denim & Apparel`,
        description: `${product.description} ${product.detail}`,
        openGraph: {
            title: product.title,
            description: product.detail,
            images: [
                {
                    url: `https://akara.co.in${product.image}`,
                    alt: product.title,
                    width: 1200,
                    height: 630,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: product.title,
            description: product.detail,
            images: [`https://akara.co.in${product.image}`],
        },
    }
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const product = getProductBySlug(id)
    if (!product) notFound()
    const jsonLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: `https://akara.co.in${product.image}`,
        category: product.category,
    }).replace(/</g, "\\u003c")

    return (
        <>
            <script
                type="application/ld+json"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is JSON-serialized and escapes `<` to prevent script termination.
                dangerouslySetInnerHTML={{
                    __html: jsonLd,
                }}
            />
            <ProductGallery product={product} />
        </>
    )
}
