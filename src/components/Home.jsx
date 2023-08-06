import {
    Heading,
    Stack,
    VStack,
    Text,
    Button,
    HStack,
    Image,
    Box,
  } from "@chakra-ui/react";
  import React from "react";
  import "./home.css";

  import { CgGoogle, CgInstagram, CgYoutube } from "react-icons/cg";
  
  import { SiCoursera, SiUdemy } from "react-icons/si";
  
  import { DiAws } from "react-icons/di";
  import img1 from "../assets/images/study.png";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from "./Content";
import Content2 from "./Content2";
import Pricing from "./Price";

  
  const Home = () => {
    return (
      <section className="Home"

      >
          <Navbar/>
      

        <div className="container">
          <Stack
            direction={["column", "row"]}
            height={"100%"}
            justifyContent={["center", "space-between"]}
            alignItems={"center"}
            spacing={["16", "56"]}
          >
            <VStack
              width={"full"}
              alignItems={["center", "flex-end"]}
              spacing={"8"}
            >
              <Heading
                textAlign={["center", "left"]}
                children={"Enhance Your Own SkillSet"}
                size={"2xl"}
              />
              <Text
                fontSize={"xl"}
                textAlign={["center", "left"]}
                children={"Helping Students and Graduates to Kick Start their Career ..."}
              />
             
                <Button size={"lg"} 
                
  color={'blue.400'}              
                >
                <marquee>  Explore Now </marquee>
                </Button>
          
            </VStack>
  
            <Image
              className="vectorImage"
              boxSize={"md"}
              src={img1}
              objectFit={"contain"}
            />
          </Stack>
        </div>
  <Content/>
  <Content2/>
  <Pricing/>
        <Box padding={"8"} backgroundColor={"black"}>
          <Heading textAlign={"center"} color={"blue.400"}>
            OUR BRANDS
          </Heading>
  
          <HStack
            className="brandsBanner"
            justify={"space-evenly"}
            marginTop={"10"}
            alignItems={"center"}
            color={"blue.400"}
          >
            <CgGoogle />
            <CgYoutube />
            <CgInstagram />
            <SiCoursera />
            <SiUdemy />
            <DiAws />
          </HStack>
        </Box>

        <Footer/>
       
      </section>
    );
  };
  
  export default Home;
  