import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      id
      slug
      title
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INO = gql`
  query {
    authors {
      id
      slug
      name
      avatar {
        url
      }
    }
  }
`;
const GET_AUTHOR_INFO = gql`
  query getauthorinfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      field
      description {
        html
      }
      posts {
        slug
        title
        id
        coverPhoto {
          url
        }
      }
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INO, GET_AUTHOR_INFO };
