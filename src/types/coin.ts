export interface Coin {
    currency: string
    chain: string
    price: number | null
    decimals: number | null
    createdAt: Date
    updatedAt: Date
  }