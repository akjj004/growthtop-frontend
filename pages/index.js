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
  console.log(properties, "OK");
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  //descructure
  const { rating, reviewCount, credibility } = { properties };
  const { category } = router.query;
  const { sort } = router.query; // get the sort parameter from the query string

  // sort the items array using the sortBy parameter
  properties.sort((a, b) => {
    // console.log(sort, "??");
    if (sort === "price-des") {
      // sort by price in descending order
      return b.price - a.price;
    } else if (sort === "price-asc") {
      // sort by price in ascending order
      return a.price - b.price;
    } else {
      return 0;
    }
  });

  // function calculateCredibilityPoints(rating, reviewCount, credibility) {
  //   // calculate the credibility points
  //   var decimalReviewCount = reviewCount / 100;
  //   var decimalCredibility = credibility / 100;

  //   let credibilityPoints =
  //     (rating * decimalReviewCount * decimalCredibility) / 100;
  //   credibilityPoints += "%";
  //   return credibilityPoints;
  // }

  // for (let { rating, reviewCount, credibility } of properties) {
  //   // calculate the credibility points
  //   let credibilityPoints = calculateCredibilityPoints(
  //     rating,
  //     reviewCount,
  //     credibility
  //   );

  //   properties.forEach(function (properties) {
  //     properties.credibilityPoints = credibilityPoints;
  //   });
  // }

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="blue.400"
        borderBottom="1px"
        borderColor="blue.400"
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
        Category: {router.query.category}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((properties, index) => (
          <Products key={index} products={properties} />
        ))}
      </Flex>
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const category = query.category || "1";
  const sort = query.sort || "price";

  const searchProduct = await fetchApi(
    `${baseUrl}/api/products?category=${category}&sort=${sort}`
  );

  return {
    props: {
      properties: searchProduct,
    },
  };
}

export default Search;
