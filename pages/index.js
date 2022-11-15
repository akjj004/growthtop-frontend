import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button, Grid } from "@chakra-ui/react";

import { baseUrl, fetchApi } from "../utils/fetchApi";
import Products from "../components/Products";

// create dynamic component

const Banner = ({ name, image }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={image} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {name}
      </Text>
    </Box>
  </Flex>
);

export default function Home({ searchProducts }) {
  // console.log(searchProducts);
  return (
    <Box>
      <Banner
        name="Product preview"
        image="https://m.media-amazon.com/images/I/61vpfTemIbL.jpg"
      />
      <Flex flexWrap="wrap">
        {/*Fetch the properties and map over them...*/}
        {searchProducts.map((products, index) => (
          <Products key={index} products={products} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const searchProduct = await fetchApi(`${baseUrl}/search`);

  return {
    props: {
      searchProducts: searchProduct,
    },
  };
}
