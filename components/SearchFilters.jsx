import { useEffect, useState } from "react";
import { Flex, Select, Checkbox, Box, Stack, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CheckIcon } from "@chakra-ui/icons";

import { filterData, getFilterValues } from "../utils/filterData";
import { baseUrl, fetchApi } from "../utils/fetchApi";
const SearchFilters = ({ categories }) => {
  const [filters] = useState(filterData);

  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  const pushTopCategories = (event) => {
    const { value } = event.target;
    router.push(`?category=${value}`);
  };

  // Sort the categories by credibility percentage in descending order
  const sortedCategories = categories.sort(
    (a, b) => b.credibility - a.credibility
  );

  // Get the top 5 categories
  const topCategories = sortedCategories.slice(0, 5);

  // Get the category with the maximum credibility percentage
  const maxCredibilityCategory = topCategories[0];

  return (
    <Flex bg="blue.300" p="4" justifyContent="center" flexWrap="wrap">
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
      <>
        <Flex alignItems="center">
          <Flex alignItems="center">
            {topCategories.map((category) => (
              <Box paddingRight="3">
                <Checkbox
                  onChange={pushTopCategories}
                  key={category.id}
                  value={category.category}
                >
                  {category.category_name}

                  {category.credibility === 100 && (
                    <Box
                      as={CheckIcon}
                      name="CheckIcon"
                      size="10px"
                      mx={3}
                      color="grey.200"
                    />
                  )}
                </Checkbox>
              </Box>
            ))}
          </Flex>
        </Flex>
      </>
    </Flex>
  );
};

export default SearchFilters;
