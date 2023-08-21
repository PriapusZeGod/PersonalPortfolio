import React, { useState, useEffect } from "react";
import { Flex, Box, Text, Stack, Image, Icon } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import placeholder from "../assets/placeholder-icon.jpg";
import "../styles/WelcomePage.css";

function WelcomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Use setTimeout to add a delay if needed
    setTimeout(() => setLoaded(true), 1000); // here 100ms delay is added, you can adjust this value
  }, []);

  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      className={loaded ? "fade-in" : ""}
    >
      <Box width={"70vw"} height={"60vh"}>
        <Stack spacing={3}>
          <Text fontSize={"8xl"} color={"#f5f5f5"} textAlign={"center"}>
            Welcome
          </Text>
          <Image
            src={placeholder}
            boxSize="400px"
            borderRadius={"full"}
            alignSelf={"center"}
          ></Image>
          <Text fontSize={"2xl"} color={"#f5f5f5"} textAlign={"center"}>
            Scroll down for content
          </Text>
          <ArrowRightIcon
            alignSelf={"center"}
            boxSize={9}
            color={"white"}
            transform={"rotate(90deg)"}
          />
        </Stack>
      </Box>
    </Flex>
  );
}

export default WelcomePage;
