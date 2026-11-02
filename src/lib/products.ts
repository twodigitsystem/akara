export type ProductCategory =
    | "mens-denim"
    | "womens-denim"
    | "kids-jeans"
    | "cotton-apparels"
    | "jackets"
    | "overshirts"

export interface Product {
    id: string
    slug: string
    category: ProductCategory
    title: string
    detail: string
    description: string
    image: string
    images?: string[]
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
        detail: "A reference style for discussing men's selvedge denim fits, fabrics, and finishing options.",
        description: "Use this reference style to share your requirements for men's selvedge denim. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "/products/mens-selvedge-denim-reference.jpg",
        images: [
            "/products/mens-selvedge-denim-reference.jpg",
            "/products/mens-denim-selvedge-detail.jpg",
            "/commercial_apparel_lookbook_photography_of_a_fashionable_indian_male_model_converted.webp",
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
        description: "Use this reference style to share your requirements for tapered denim. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "/commercial_fashion_catalog_photography_of_a_stylish_young_indian_male_model_converted.webp",
        images: [
            "/commercial_fashion_catalog_photography_of_a_stylish_young_indian_male_model_converted.webp",
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
        id: "AK-MD-1100",
        slug: "ak-md-1100",
        category: "mens-denim",
        title: "Men's Relaxed Denim",
        detail: "A reference style for discussing men's relaxed-fit denim silhouettes and fabric options.",
        description: "Use this reference style to share your requirements for relaxed-fit denim. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "/commercial_apparel_lookbook_photography_of_an_indian_male_model_wearing_relaxed_converted.webp",
        images: [
            "/commercial_apparel_lookbook_photography_of_an_indian_male_model_wearing_relaxed_converted.webp",
            "/commercial_apparel_lookbook_photography_of_a_fashionable_indian_male_model_converted.webp",
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
        description: "Use this reference style to share your requirements for women's denim. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "/modern_e_commerce_fashion_editorial_photography_of_an_indian_female_model_converted.webp",
        images: [
            "/modern_e_commerce_fashion_editorial_photography_of_an_indian_female_model_converted.webp",
            "/contemporary_commercial_studio_photography_of_an_indian_female_model_wearing_converted.webp",
            "/professional_studio_fashion_lookbook_editorial_photography_of_a_stylish_indian_converted.webp",
        ],
        specs: "Specifications confirmed per inquiry",
        weight: "Confirmed per inquiry",
        composition: "Confirmed per inquiry",
        wash: "Confirmed per inquiry",
        construction: "Confirmed per inquiry",
        moq: "Confirmed per inquiry",
    },
    {
        id: "AK-WD-1200",
        slug: "ak-wd-1200",
        category: "womens-denim",
        title: "Women's Fashion Denim",
        detail: "A reference style for discussing women's fashion denim silhouettes, washes, and design details.",
        description: "Use this reference style to share your requirements for women's fashion denim. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "/high_fashion_commercial_catalog_photography_of_an_indian_female_model_wearing_converted.webp",
        images: [
            "/high_fashion_commercial_catalog_photography_of_an_indian_female_model_wearing_converted.webp",
            "/cinematic_wide_fashion_catalog_editorial_banner_stylish_indian_models_converted.webp",
            "/cinematic_wide_fashion_catalog_lookbook_editorial_banner_fashionable_indian_converted.webp",
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
        description: "Use this reference style to share your requirements for children's denim. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "/commercial_e_commerce_lifestyle_catalog_photography_of_cute_indian_children_boy_converted.webp",
        images: [
            "/commercial_e_commerce_lifestyle_catalog_photography_of_cute_indian_children_boy_converted.webp",
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
        id: "AK-JK-1000",
        slug: "ak-jk-1000",
        category: "cotton-apparels",
        title: "Utility Apparel",
        detail: "A reference style for discussing utility apparel silhouettes, fabrics, and finishing options.",
        description: "Use this reference style to share your requirements for utility apparel. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "/commercial_fashion_catalog_photography_of_a_modern_indian_male_model_wearing_converted.webp",
        images: [
            "/commercial_fashion_catalog_photography_of_a_modern_indian_male_model_wearing_converted.webp",
            "/commercial_apparel_lookbook_photography_of_a_fashionable_indian_male_model_converted.webp",
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
        description: "Use this reference style to share your requirements for formal trousers or chinos. Fabric, construction, finish, and measurements are confirmed during inquiry.",
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
    {
        id: "AK-DJ-1400",
        slug: "ak-dj-1400",
        category: "jackets",
        title: "Denim Jacket",
        detail: "A reference style for discussing denim jacket silhouettes, washes, and construction details.",
        description: "Use this reference style to share your requirements for denim jackets. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "/cinematic_wide_commercial_banner_photography_for_akara_denim_and_apparel_converted.webp",
        images: [
            "/cinematic_wide_commercial_banner_photography_for_akara_denim_and_apparel_converted.webp",
            "/cinematic_wide_fashion_catalog_editorial_banner_stylish_indian_models_converted.webp",
        ],
        specs: "Specifications confirmed per inquiry",
        weight: "Confirmed per inquiry",
        composition: "Confirmed per inquiry",
        wash: "Confirmed per inquiry",
        construction: "Confirmed per inquiry",
        moq: "Confirmed per inquiry",
    },
    {
        id: "AK-OS-1500",
        slug: "ak-os-1500",
        category: "overshirts",
        title: "Overshirt",
        detail: "A reference style for discussing overshirt silhouettes, fabrics, and finishing options.",
        description: "Use this reference style to share your requirements for overshirts. Fabric, construction, finish, and measurements are confirmed during inquiry.",
        image: "/cinematic_wide_fashion_catalog_lookbook_editorial_banner_fashionable_indian_converted.webp",
        images: [
            "/cinematic_wide_fashion_catalog_lookbook_editorial_banner_fashionable_indian_converted.webp",
            "/cinematic_wide_commercial_banner_photography_for_global_apparel_export_converted.webp",
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
    { value: "jackets", label: "Jackets" },
    { value: "overshirts", label: "Overshirts" },
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
