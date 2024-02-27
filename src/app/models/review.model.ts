export interface Review {
  name: string,
  email: string
  img?: string,
  score: string,
  comment?: string
  paintingId: number
}

export interface Customer {
  name: string,
  img?: string,
  comment?: string
}
