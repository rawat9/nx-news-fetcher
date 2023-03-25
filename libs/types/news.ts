export interface News {
  id: number;
  date: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  jetpack_featured_media_url: string;
  creator: string;
  content: {
    rendered: string;
  };
}
