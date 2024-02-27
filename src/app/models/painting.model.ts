export interface Painting {
  img: string,
  name: string,
  author: string,
  year: number,
  price: number,
  bestsellerRate?: number,
  topRanking?: number,
  mostPopular?: number,
  category?: string,
  inCart: boolean,
  id: number,
  quantity: number
}
