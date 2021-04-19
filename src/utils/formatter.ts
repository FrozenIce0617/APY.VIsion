export function formatNumber(number: number): string {
  return new Intl.NumberFormat().format(number);
}

export function formatCurrency(
  priceInUSD: number,
  config: Intl.NumberFormatOptions = { style: "currency", currency: "USD" }
): string {
  return new Intl.NumberFormat("en-IN", config).format(priceInUSD);
}
