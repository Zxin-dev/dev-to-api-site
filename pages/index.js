import Image from "next/image";
import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import { AspectRatio } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";
import Head from "next/head";
export default function Home() {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=whitep4nth3r")
      .then((response) => response.json())
      .then((data) => {
        setArticle(data);
      });
  }, []);
  console.log(article);

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Head>
        <meta property="og:title" content="my awesome site" />
        <meta
          property="og:image"
          content="https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png"
        />
      </Head>
      {article.map((article) => {
        return (
          // <div
          //   style={{
          //     display: "flex",
          //     flexDirection: "column",
          //     backgroundColor: "white",
          //     border: "1px solid black",
          //   }}
          // >
          //   <div style={{ display: "Flex", alignItems: "center" }}>
          //     <Avatar alt="White P4nth3r" src="/static/images/avatar/1.jpg" />
          //     <div>{article.user.name}</div>
          //   </div>
          //   <a href={`/${article.slug}`}>{article.slug}</a>
          // </div>
          <Card
            variant="outlined"
            sx={{
              width: 500,
              overflow: "auto",
              resize: "horizontal",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
              }}
            >
              <Avatar src={article.user.profile_image} size="lg" />
              <Typography
                style={{ marginLeft: "10px" }}
                level="h5"
                fontWeight="lg"
              >
                {article.user.name}
              </Typography>
            </Box>
            <CardContent>
              <Typography level="h5" fontWeight="lg">
                {article.title}
              </Typography>

              <Typography level="body2">{article.description}</Typography>
              <AspectRatio
                style={{ marginTop: 10 }}
                minHeight="120px"
                maxHeight="220px"
              >
                <img
                  src={article.cover_image}
                  srcSet={article.cover_image}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardContent>
            <CardActions buttonFlex="0 1 500px">
              <a href={`/${article.slug}`}>
                {" "}
                <Button variant="solid" color="primary">
                  View
                </Button>
              </a>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
