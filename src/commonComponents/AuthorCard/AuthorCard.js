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
  let { author_obj } = props;
  return (
    <AuthorWrapper>
      <AuthorBox>
        <AuthorLeftAlignment>
          <AuthorTitle>AUTHOR</AuthorTitle>
          <AuthorName>{author_obj.name}</AuthorName>
        </AuthorLeftAlignment>
        <AuthorRightAlignment>
          <AuthorImg img={author_obj.author_img} />
        </AuthorRightAlignment>
      </AuthorBox>
      <AuthorMail>{author_obj.mail_id}</AuthorMail>
      <AuthorDescription>{author_obj.description}</AuthorDescription>
    </AuthorWrapper>
  );
}
