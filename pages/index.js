import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

// import Property from "../components/Property";

import SearchFilters from "../components/SearchFilters";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import noresult from "../assets/images/noresult.svg";
import Products from "../components/Products";

const Search = ({ properties }) => {
  console.log(properties, "ok");
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Search Products by filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Products {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((properties, index) => (
          <Products key={index} products={properties} />
        ))}
      </Flex>
      {/* {searchProduct.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image src={noresult} />
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )} */}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const category = query.category || "1";

  const searchProduct = await fetchApi(
    `${baseUrl}/api/products?category=${category}`
  );

  return {
    props: {
      properties: searchProduct,
    },
  };
}

export default Search;
