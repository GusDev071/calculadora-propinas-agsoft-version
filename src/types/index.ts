export type MenuItem = {
  id: number
  name: string
  price: number
  imageUrl?: string
}

export type OrderItem = MenuItem & {
  quantity: number
}
