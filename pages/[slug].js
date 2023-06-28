import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
export default function slug() {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState();
  console.log(article);
  useEffect(() => {
    fetch(`https://dev.to/api/articles/whitep4nth3r/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data);
      });
  }, [slug]);
  if (!article) return <div>Loading...</div>;
  return (
    <div>
      <Head>
        <meta property="og:title" content={article.title} />
        <meta property="og:image" content={article.cover_image} />
      </Head>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
    </div>
  );
}
