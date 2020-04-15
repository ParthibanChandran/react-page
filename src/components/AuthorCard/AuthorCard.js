import React from "react";

import {
  AuthorWrapper,
  AuthorBox,
  AuthorLeftAlignment,
  AuthorRightAlignment,
  AuthorTitle,
  AuthorName,
  AuthorImg,
  AuthorMail,
  AuthorDescription,
} from "./style";

export default function AuthorCard(props) {
  let { author_list } = props;
  return (
    <AuthorWrapper>
      <AuthorBox>
        <AuthorLeftAlignment>
          <AuthorTitle>AUTHOR</AuthorTitle>
          <AuthorName>{author_list.name}</AuthorName>
        </AuthorLeftAlignment>
        <AuthorRightAlignment>
          <AuthorImg img={author_list.author_img} />
        </AuthorRightAlignment>
      </AuthorBox>
      <AuthorMail>{author_list.mail_id}</AuthorMail>
      <AuthorDescription>{author_list.description}</AuthorDescription>
    </AuthorWrapper>
  );
}
