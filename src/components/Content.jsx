"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      style={{
        filter: "drop-shadow(0 10px 10px rgba(0, 0, 0, 0.3))",
      }}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};
const Content = () => {
  return (
    <Box p={"4"} mb={"4"} mt={"16"}   


    
    
    >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
        Learn The Trending Technology
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
        Helping students and recent graduates start their career.
Enabling skills development in a live environment, making students industry ready.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"React"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
             "Used To build Single page Application"
            }
            href={"#"}
          />


          <Card
            heading={"Node"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Node Js is used for Building Backend and APIs"
            }
            href={"#"}
          />
          <Card
            heading={"JavaScript"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "95% Website run on JavaScript"
            }
            href={"#"}
          />
          <Card
            heading={"HTML"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Used To build Structure of a WebPage"
            }
            href={"#"}
          />
          <Card
            heading={"CSS"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Used to Add Styling In webPages"
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Content;
