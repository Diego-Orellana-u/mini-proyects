import { selectPostById } from "./postsSlice";
import { useSelector } from "@reduxjs/toolkit";

export default function SinglePostPage() {
  const post = useSelector((state) => selectPostById(state, postId));

  return <></>;
}
