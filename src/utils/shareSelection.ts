/** Represents the shared selection payload — an array of menu item IDs. */
export type SharedSelection = string[]

/**
 * Encodes an array of item IDs into a URL-safe Base64 string.
 */
export function encodeSelection(ids: string[]): string {
  const json = JSON.stringify(ids)
  return btoa(encodeURIComponent(json))
}

/**
 * Decodes a URL-safe Base64 string back to an array of item IDs.
 * Returns null if the input is invalid or malformed.
 */
export function decodeSelection(encoded: string): SharedSelection | null {
  try {
    const json = decodeURIComponent(atob(encoded))
    const parsed: unknown = JSON.parse(json)
    if (!Array.isArray(parsed)) return null
    if (!parsed.every((id): id is string => typeof id === 'string')) return null
    return parsed
  } catch {
    return null
  }
}

/**
 * Generates a full shareable URL for the given selection IDs.
 */
export function generateShareUrl(ids: string[]): string {
  const url = new URL(window.location.origin + '/menu')
  url.searchParams.set('selection', encodeSelection(ids))
  return url.toString()
}
