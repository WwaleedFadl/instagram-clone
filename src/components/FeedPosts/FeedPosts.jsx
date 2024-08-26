import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

export default function FeedPosts() {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <FeedPost
        username="Mahmoud fadl"
        img="/images/2.jpg"
        avatar="/images/8.jpg"
      />
      <FeedPost
        username="Mohamed fadl"
        img="/images/4.jpg"
        avatar="/images/9.jpg"
      />
      <FeedPost
        username="Mahmoud fadl"
        img="/images/2.jpg"
        avatar="/images/8.jpg"
      />
      <FeedPost
        username="Mohamed fadl"
        img="/images/7.jpg"
        avatar="/images/9.jpg"
      />
      <FeedPost
        username="Mohamed fadl"
        img="/images/5.jpg"
        avatar="/images/9.jpg"
      />
    </Container>
  );
}
