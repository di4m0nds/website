export enum DateFormat {
  ISO8601 = 'YYYY-MM-DDTHH:mm:ss.sssZ',
  ShortDate = 'MM/DD/YYYY',
  LongDate = 'MMMM DD, YYYY',
  ShortDateTime = 'MM/DD/YYYY HH:mm',
  LongDateTime = 'MMMM DD, YYYY HH:mm'
}

export enum URL {
  BASE_URL = 'https://javiersilvestri.vercel.app',
  POSTS = '/posts'
}

export const getPostsUrl = () => `${URL.BASE_URL}${URL.POSTS}`
