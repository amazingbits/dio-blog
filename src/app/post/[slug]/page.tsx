/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { supabase } from "@/lib/supabase";
import { UUID } from "crypto";
import styles from "./styles.module.css";

type ParamsProps = {
  params: {
    slug: string;
  };
};

type PostProps = {
  id: UUID;
  title: string;
  slug: string;
  image_url: string;
  body: string;
  created_at: string;
};

const page = ({ params: { slug } }: ParamsProps) => {
  const [post, setPost] = React.useState<PostProps | null>(null);

  async function getPost() {
    const response = (await supabase.from("posts").select("*").eq("slug", slug))
      .data as PostProps[];

    const dt = response ? response[0] : null;

    setPost(dt);
  }
  React.useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="container">
      {!post ? (
        <p>carregando...</p>
      ) : (
        <div>
          <div
            className={styles.header}
            style={{
              backgroundImage: `url(${post.image_url})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className={styles.title}>
            <a href="/">Voltar</a>
            <h1>{post.title}</h1>
          </div>
          <div className={styles.body}>
            <p>{post.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
