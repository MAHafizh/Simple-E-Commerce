/* eslint-disable react/jsx-key */
import React from "react";
import CardList from "../components/post/CardList";
import ViewUserButton from "../components/post/ViewUserButton";
const base_url = "https://jsonplaceholder.typicode.com/posts";
interface Ipost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = async () => {
  const response = await fetch(base_url, {
    cache: 'no-store'
  });
  const posts: Ipost[] = await response.json();
  return (
    <>
      <div className="bg-blue-300">Page Post</div>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
};

export default Post;
