"use client";
import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const options1 = [
  { id: 1, desc: "Access To Source Code" },
  { id: 2, desc: "Recorded Sessions" },
  { id: 3, desc: "Monthly Doubt Class" },
];
const options2 = [
  { id: 1, desc: "Access To Source Code" },
  { id: 2, desc: "Live Sessions" },
  { id: 3, desc: "Weekly Doubt Class" },
  { id: 4, desc: "Career Guidance with Expert" },
];
const options3 = [
  { id: 1, desc: "Access To Source Code" },
  { id: 2, desc: "Live Sessions" },
  { id: 3, desc: "Daily Doubt Class" },
  { id: 4, desc: "Career Guidance with Expert" },
  { id: 5, desc: "Industrial Internship " },
];
const PackageTier = ({ title, options, typePlan, checked = false }) => {
  const colorTextLight = checked ? "white" : "blue.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";

  const colorTextDark = checked ? "white" : "blue.500";
  const bgColorDark = checked ? "blue.400" : "gray.300";

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <Heading size={"md"}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={"xl"}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        >
          Enroll Now!
        </Button>
      </Stack>
    </Stack>
  );
};
const Pricing = () => {
  return (
    <Box py={6} px={5} mb={"100"} width="full">
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around",
          }}
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Stack
            width={{
              base: "100%",
              md: "40%",
            }}
            textAlign={"center"}
          >
            <Heading size={"lg"}>
              The Right Plan for <Text color="blue.400">Your Future</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text textAlign={"center"}>
              Enabling Skills Development in a Live Environment, Making Students
              Industry Ready. Providing Industrial Internship Opportunities with
              Expert Guidance at Every Step.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={"Beginner"} typePlan="Free" options={options1} />
        <Divider />
        <PackageTier
          title={"Intermediate"}
          checked={true}
          typePlan="₹999"
          options={options2}
        />
        <Divider />
        <PackageTier
          title={"Professional"}
          typePlan="₹1499"
          options={options3}
        />
      </Stack>
    </Box>
  );
};

export default Pricing;
