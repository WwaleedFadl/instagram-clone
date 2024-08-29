import { useEffect, useState } from "react";
import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
export default function ProfilePosts() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, []);
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(3,1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading && [
        Array.from({ length: 12 }, (_, idx) => {
          return (
            <VStack key={idx} alignItems={"flex-start"} gap={4}>
              <Skeleton w={"full"}>
                <Box h={"300px"}>Contents wrapped</Box>
              </Skeleton>
            </VStack>
          );
        }),
      ]}

      {!isLoading && (
        <>
          <ProfilePost img="/images/1.jpg" />
          <ProfilePost img="/images/2.jpg" />
          <ProfilePost img="/images/3.jpg" />
          <ProfilePost img="/images/4.jpg" />
        </>
      )}
    </Grid>
  );
}
