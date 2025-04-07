import React from "react";
import { redirect, RedirectType } from "next/navigation";

const PostPage = async () => {
  redirect("/", RedirectType.replace);

  return <></>;
};

export default PostPage;
