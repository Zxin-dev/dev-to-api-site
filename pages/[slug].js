import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
export default function slug(article) {
  if (!article) return <div>Loading...</div>;
  return (
    <div style={{ background: "white" }}>
      <Head>
        <meta property="og:title" content={article.article.title} />
        <meta property="og:image" content={article.article.social_image} />
      </Head>
      <h1>{article.article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.article.body_html }} />
    </div>
  );
}
export async function getServerSideProps({ params }) {
  const { slug } = params;
  const response = await fetch(
    `https://dev.to/api/articles/whitep4nth3r/${slug}`
  );

  const data = await response.json();
  return {
    props: {
      article: data,
    },
  };
}
