import { gql, request } from "graphql-request";

const api_endpoint = process.env.NEXT_PUBLIC_HYGRAPH_API as string;

export const getRecentPost = async () => {
  const query = gql`
    query getRecentPost {
      posts {
        id
        title
        excerpt
        slug
        createdAt
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
        categories {
          categoryName
          slug
          id
        }
      }
    }
  `;
  const { posts } = await request(api_endpoint, query);
  return posts;
};

export const allSlug = async () => {
  const query = gql`
    query getPostsSlug {
      posts {
        id
        slug
      }
    }
  `;

  const { posts } = await request(api_endpoint, query);
  return posts;
};

export const PostDetail = async (slug: string) => {
  const query = gql`
    query getPostDetail($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        excerpt
        slug
        createdAt
        content {
          raw
        }
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
        categories {
          categoryName
          slug
          id
        }
      }
    }
  `;

  const { post } = await request(api_endpoint, query, { slug });
  return post;
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        categoryName
        slug
        id
        description
        coverImage {
          url
        }
      }
    }
  `;
  const { categories } = await request(api_endpoint, query);
  return categories;
};

export const getPostsBasedOnCategory = async (slug: string) => {
  const query = gql`
    query getPostBasedOnCategory($slug: String!) {
      posts(where: { categories_some: { slug: $slug } }) {
        id
        title
        excerpt
        slug
        createdAt
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
        categories {
          categoryName
          slug
          id
        }
      }
    }
  `;

  const { posts } = await request(api_endpoint, query, { slug });
  return posts;
};
