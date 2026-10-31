export type ProductCategory =
    | "mens-denim"
    | "womens-denim"
    | "kids-jeans"
    | "cotton-apparels"

export interface Product {
    id: string
    slug: string
    category: ProductCategory
    title: string
    detail: string
    description: string
    image: string
    images?: string[] // alternate product views (gallery)
    specs: string
    weight: string
    composition: string
    wash: string
    construction: string
    moq: string
}

export const products: Product[] = [
    {
        id: "AK-MD-1350",
        slug: "ak-md-1350",
        category: "mens-denim",
        title: "Men's Selvedge Denim",
        detail: "A reference style for discussing men's denim fits, fabrics, and finishing options.",
        description:
            "Use this reference style to share your requirements for men's denim. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "/products/mens-selvedge-denim-reference.jpg",
        images: [
            "/products/mens-selvedge-denim-reference.jpg",
            "/products/mens-denim-selvedge-detail.jpg",
        ],
        specs: "Specifications confirmed per inquiry",
        weight: "Confirmed per inquiry",
        composition: "Confirmed per inquiry",
        wash: "Confirmed per inquiry",
        construction: "Confirmed per inquiry",
        moq: "Confirmed per inquiry",
    },
    {
        id: "AK-WD-1100",
        slug: "ak-wd-1100",
        category: "womens-denim",
        title: "Women's Denim",
        detail: "A reference style for discussing women's denim fits, fabrics, and finishing options.",
        description:
            "Use this reference style to share your requirements for women's denim. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1594635313788-57e9f4e13a33?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80",
        ],
        specs: "Specifications confirmed per inquiry",
        weight: "Confirmed per inquiry",
        composition: "Confirmed per inquiry",
        wash: "Confirmed per inquiry",
        construction: "Confirmed per inquiry",
        moq: "Confirmed per inquiry",
    },
    {
        id: "AK-KD-0950",
        slug: "ak-kd-0950",
        category: "kids-jeans",
        title: "Kids' Denim",
        detail: "A reference style for discussing children's denim fits, fabrics, and construction options.",
        description:
            "Use this reference style to share your requirements for children's denim. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1512533189217-2ffb8b7d4dc2?auto=format&fit=crop&w=1000&q=80",
        ],
        specs: "Specifications confirmed per inquiry",
        weight: "Confirmed per inquiry",
        composition: "Confirmed per inquiry",
        wash: "Confirmed per inquiry",
        construction: "Confirmed per inquiry",
        moq: "Confirmed per inquiry",
    },
    {
        id: "AK-JK-1000",
        slug: "ak-jk-1000",
        category: "cotton-apparels",
        title: "Utility Apparel",
        detail: "A reference style for discussing utility apparel silhouettes, fabrics, and finishing options.",
        description:
            "Use this reference style to share your requirements for utility apparel. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1535714778830-b367c4784a9d?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1576871337642-b9aac4423f77?auto=format&fit=crop&w=1000&q=80",
        ],
        specs: "Specifications confirmed per inquiry",
        weight: "Confirmed per inquiry",
        composition: "Confirmed per inquiry",
        wash: "Confirmed per inquiry",
        construction: "Confirmed per inquiry",
        moq: "Confirmed per inquiry",
    },
    {
        id: "AK-MD-1200",
        slug: "ak-md-1200",
        category: "mens-denim",
        title: "Men's Tapered Denim",
        detail: "A reference style for discussing men's tapered denim fits and finishing options.",
        description:
            "Use this reference style to share your requirements for tapered denim. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1594635313788-57e9f4e13a33?auto=format&fit=crop&w=1000&q=80",
        ],
        specs: "Specifications confirmed per inquiry",
        weight: "Confirmed per inquiry",
        composition: "Confirmed per inquiry",
        wash: "Confirmed per inquiry",
        construction: "Confirmed per inquiry",
        moq: "Confirmed per inquiry",
    },
    {
        id: "2FOR-TR-2800",
        slug: "2for-tr-2800",
        category: "cotton-apparels",
        title: "Formal Trousers & Chinos",
        detail: "A reference style for discussing formal trousers, chinos, and fit options.",
        description:
            "Use this reference style to share your requirements for formal trousers or chinos. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "/products/cotton-formal-trouser-reference.jpg",
        images: [
            "/products/cotton-formal-trouser-reference.jpg",
            "/products/cotton-trouser-construction-detail.jpg",
        ],
        specs: "Specifications confirmed per inquiry",
        weight: "Confirmed per inquiry",
        composition: "Confirmed per inquiry",
        wash: "Confirmed per inquiry",
        construction: "Confirmed per inquiry",
        moq: "Confirmed per inquiry",
    },
]

export const catalogFilters: {
    value: "all" | ProductCategory
    label: string
}[] = [
    { value: "all", label: "All Products" },
    { value: "mens-denim", label: "Men's Denim" },
    { value: "womens-denim", label: "Women's Denim" },
    { value: "kids-jeans", label: "Kids Jeans" },
    { value: "cotton-apparels", label: "Cotton Apparels" },
]

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug)
}

export function getProductByIdentifier(
    identifier: string,
): Product | undefined {
    return products.find(
        (product) => product.slug === identifier || product.id === identifier,
    )
}

export function getMinimumOrderQuantity(product: Product): number {
    const quantity = Number.parseInt(product.moq.replace(/\D/g, ""), 10)
    return Number.isFinite(quantity) && quantity > 0 ? quantity : 1
}
