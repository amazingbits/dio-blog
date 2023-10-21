"use client";
import React from "react";
import { supabase } from "@/lib/supabase";
import Card from "@/components/Card";
import { UUID } from "crypto";

type PostProps = {
  id: UUID;
  title: string;
  slug: string;
  image_url: string;
  body: string;
  created_at: string;
};

const Home = () => {
  const [posts, setPosts] = React.useState<PostProps[] | null>(null);
  async function getPosts() {
    const response = await supabase.from("posts").select("*");
    setPosts(response.data);
  }
  React.useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="container">
      <h1>DIO Blog</h1>
      <div className="postList">
        {!posts ? (
          <p>Carregando...</p>
        ) : (
          posts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              image_url={post.image_url}
              created_at={post.created_at}
              slug={post.slug}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
