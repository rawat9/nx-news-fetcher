import { News } from '../types/news';

export const fakeNewsData: News[] = [
  {
    id: 1,
    date: '2021-01-01',
    link: 'Test Link',
    title: {
      rendered: 'Test Title',
    },
    excerpt: {
      rendered: 'Test Excerpt',
    },
    jetpack_featured_media_url: 'Test Image',
    creator: 'Test Creator',
    content: {
      rendered: 'Test Content',
    },
  },
];
