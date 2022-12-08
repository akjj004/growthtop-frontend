import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { PieChart, Pie, Tooltip, Legend } from "recharts";
import SearchFilters from "../components/SearchFilters";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import noresult from "../assets/images/noresult.svg";
import Products from "../components/Products";

const Search = ({ properties, categories }) => {
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

  // Sort the categories by credibility percentage in descending order
  const sortedCategories = categories.sort(
    (a, b) => b.credibility - a.credibility
  );

  // Get the top 5 categories
  const topCategories = sortedCategories.slice(0, 5);

  // Prepare the data for the pie chart
  const pieData = topCategories.map((category) => {
    const credibilityPercentage = category.credibility;
    const percentage = (credibilityPercentage / 100) * 100; // 47.295116234360016%

    return {
      name: category.category_name,
      value: percentage,
    };
  });

  console.log(pieData);

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
      {searchFilters && (
        <SearchFilters
          categories={categories}
          sortedCategories={sortedCategories}
          topCategories={topCategories}
        />
      )}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Category: {router.query.category}
      </Text>
      <Flex p="4" justifyContent="center">
        {searchFilters && (
          <PieChart width={400} height={400}>
            <Pie dataKey="value" data={pieData} fill="#63b3ed" />
            <Tooltip />
            <Legend />
          </PieChart>
        )}
      </Flex>
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

  const topCategories = await fetchApi(`${baseUrl}/api/categories`);

  return {
    props: {
      properties: searchProduct,
      categories: topCategories,
    },
  };
}

export default Search;
