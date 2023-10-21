import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  image_url: string;
  created_at: string;
  slug: string;
};

function getDate(date: string): string {
  const dt = new Date(date);
  const day = dt.getDate().toString().padStart(2, "0");
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const year = dt.getFullYear();
  return `${day}/${month}/${year}`;
}

const Card = ({ title, image_url, created_at, slug }: CardProps) => {
  return (
    <Link href={`/post/${slug}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image
            src={image_url}
            alt={title}
            width={0}
            height={0}
            priority
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.cardBody}>
          <p>{title}</p>
          <span>{getDate(created_at)}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
