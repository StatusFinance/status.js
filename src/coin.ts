export interface Coin {
    currency: string
    chain: string
    name?: string
    symbol?: string
    price?: number | null
    decimals?: number | null
    createdAt: Date
    updatedAt: Date
  }