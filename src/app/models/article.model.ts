export interface Article {
  title: string,
  author: string,
  date: string,
  img: string,
  imgAuthor?: string,
  blogCategory: string,
  article: string,
  tags: [string],
  id: number,
}

export interface Comment {
  articleId: number,
  text: string
  clicked: boolean
  id: number,
  author: string,
  parentId?: number
  email: string,
  date: Date,
}
