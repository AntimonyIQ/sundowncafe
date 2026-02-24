const nairaFormatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
})

/**
 * Converts a Kobo integer amount to a formatted Naira string.
 * Example: formatNairaFromKobo(100000) => "₦1,000"
 */
export function formatNairaFromKobo(kobo: number): string {
    return nairaFormatter.format(Math.round(kobo) / 100)
}
