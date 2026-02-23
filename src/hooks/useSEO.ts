import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical?: string
}

export function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    document.title = title

    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (metaDesc) metaDesc.content = description

    const metaTitle = document.querySelector<HTMLMetaElement>('meta[name="title"]')
    if (metaTitle) metaTitle.content = title

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    if (ogTitle) ogTitle.content = title

    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    if (ogDesc) ogDesc.content = description

    const twitterTitle = document.querySelector<HTMLMetaElement>('meta[property="twitter:title"]')
    if (twitterTitle) twitterTitle.content = title

    const twitterDesc = document.querySelector<HTMLMetaElement>(
      'meta[property="twitter:description"]',
    )
    if (twitterDesc) twitterDesc.content = description

    if (canonical) {
      const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (canonicalLink) canonicalLink.href = canonical
    }
  }, [title, description, canonical])
}
