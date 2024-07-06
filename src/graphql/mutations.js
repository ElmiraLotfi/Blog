import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation sendcomment($name: String!, $email: String!, $text: String!) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        post: { connect: { slug: $slug } }
      }
    )
  }
`;
export { SEND_COMMENT };
