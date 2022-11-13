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
  console.log(searchProducts);
  return (
    <Box>
      <Banner
        name="Product preview"
        image="https://m.media-amazon.com/images/I/61vpfTemIbL.jpg"
      />
      <Flex
        flexWrap="wrap"
        w="420px"
        p="5"
        paddingTop="0px"
        justifyContent="flex-start"
        cursor="pointer"
      >
        <Grid
          w="full"
          gridGap="5"
          gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
        >
          {searchProducts.map((el) => (
            <Products products={el} key={el.id} />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const searchProduct = await fetchApi(`${baseUrl}/search/keyboards`);

  return {
    props: {
      searchProducts: searchProduct?.results,
    },
  };
}
