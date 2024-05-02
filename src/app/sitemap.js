import { BaseURL } from "@/constants/constants"

export const revalidate = 60

export default function sitemap() {
    return [
      {
        url: `${BaseURL}`,
        lastModified: new Date(),
        changeFrequency: 'always',
        priority: 1,
      },
      {
        url: `${BaseURL}/login`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${BaseURL}/signup`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${BaseURL}/projects`,
        lastModified: new Date(),
        changeFrequency: 'hourly',
        priority: 0.7,
      },
    ]
  }