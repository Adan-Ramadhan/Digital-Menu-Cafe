import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://zonakamar.biz.id"

    return[
        {
            url: baseUrl, 
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1
        },
        {
            url: `${baseUrl}/cart`,
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 0.8
        },
        {
            url: `${baseUrl}/menu`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5
        },
    ]
}