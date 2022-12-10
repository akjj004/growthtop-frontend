import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg';
import Products from '../components/Products';

const Search = ({ properties, categories }) => {
  const router = useRouter();
  const [searchFilters, setSearchFilters] = useState(false);

  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(router.asPath);

    return () => {};
  }, [router.asPath]);

  //descructure
  const { rating, reviewCount, credibility } = { properties };
  const { category } = router.query;
  const { sort } = router.query; // get the sort parameter from the query string

  const maxCred = properties.reduce((acc, prop) => {
    if (prop.credibility > acc) acc = prop.credibility;

    return acc;
  }, 1);

  properties = properties.map((prop) => ({
    ...prop,
    credibility: parseFloat(((prop.credibility / maxCred) * 100).toFixed(2)),
  }));

  // sort the items array using the sortBy parameter
  properties.sort((a, b) => {
    return sort == 'price-des'
      ? b.price - a.price
      : sort == 'price-asc'
      ? a.price - b.price
      : b.credibility - a.credibility;
  });

  // Sort the categories by credibility percentage in descending order
  const sortedCategories = categories.sort((a, b) => b.credibility - a.credibility);

  // Get the top 5 categories
  const topCategories = sortedCategories.slice(0, 5);

  // Prepare the data for the pie chart
  const pieData = topCategories.map((category) => {
    const credibilityPercentage = category.credibility;
    const percentage = parseFloat(((credibilityPercentage / 100) * 100).toFixed(2)); // 47.295116234360016%

    return {
      name: category.category_name,
      value: percentage,
    };
  });

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
      {(searchFilters || currentPath == '/') && (
        <SearchFilters categories={categories} sortedCategories={sortedCategories} topCategories={topCategories} />
      )}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        {currentPath == '/' ? `Choose category: ` : `Category: ${router.query.category}`}
      </Text>

      {(searchFilters || currentPath == '/') && (
        <Flex p="4" justifyContent="center" flexDirection="column" alignItems="center">
          <Text fontSize="2xl">Most valuable categories right now</Text>
          <PieChart width={400} height={400}>
            <Pie dataKey="value" data={pieData} label fill="#63b3ed" />
            <Tooltip />
            <Legend />
          </PieChart>
        </Flex>
      )}
      <Flex flexWrap="wrap">
        {properties.map((product, index) => (
          <Products key={index} products={product} />
        ))}
      </Flex>
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const category = query.category || '1';
  const sort = query.sort || 'price';

  const searchProduct = await fetchApi(`${baseUrl}/api/products?category=${category}&sort=${sort}`);

  const topCategories = await fetchApi(`${baseUrl}/api/categories`);

  return {
    props: {
      properties: searchProduct,
      categories: topCategories,
    },
  };
}

export default Search;

