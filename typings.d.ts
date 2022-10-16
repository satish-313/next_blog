export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  coverImage: {
    url: string;
  };
  author: Author;
  categories: Category[];
  content: {
    raw: any;
  };
}

export interface rawChildrens {
  children: rawChildren[];
}

export interface rawChildren {
  type: string;
  children: [
    {
      text: string;
    }
  ];
}

export interface Author {
  name: string;
  picture: {
    url: string;
  };
}

export interface Category {
  categoryName: string;
  slug: string;
  id: string;
  description: string;
  coverImage: {
    url: string;
  };
}
