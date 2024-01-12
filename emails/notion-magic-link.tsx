import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export const Email = ({name}) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white my-12 mx-auto font-sans">
        <Container className="p-8 rounded-lg shadow-xl text-center">
          <Img className="mx-auto w-12 rounded-full"
          src={
            "https://res.cloudinary.com/dxib0srtu/image/upload/v1704976763/my_image_bqpolj.jpg"
          }
          >
          </Img>
          <Heading className="text-xl pt-4">Hello there {name} 👋</Heading>
          <Text className="text-lg font-medium text-gray ">
            Thanks for joining me on this journey, check to see my portfolio
          </Text>
          <Button className="bg-purple-700 text-white font-bold px-4 py-6 rounded-md" href="#">Check me out</Button>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default Email;
