import Link from "next/link";
import Image from "next/image";
import { Box, Badge, Flex, Text, Stack, Heading } from "@chakra-ui/layout";
import { FaStar } from "react-icons/fa";
import { GoVerified } from "react-icons/go";

// import DefaultImage from "../assets/images/house.jpeg";

const Products = ({
  products: {
    name,
    position,
    price,
    rating,
    thumbnail,
    numberOfOffers,
    url,
    refreshed_at,
  },
}) => {
  const date = new Date(refreshed_at);
  const formattedDate = date.toISOString().slice(0, 10);

  return (
    <Link href={`${url}/${position}`} passHref>
      <Flex
        flexWrap="wrap"
        w="420px"
        p="5"
        paddingTop="0px"
        justifyContent="flex-start"
        cursor="pointer"
      >
        <Box>
          <Image src={thumbnail} width={400} height={360} alt="Products" />
        </Box>
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                Stock: {numberOfOffers}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                USD {price}
              </Text>
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {[...Array(5)].map((rating, i) => {
              return (
                <FaStar
                  key={i}
                  color={i < rating ? "#ffc107" : "#F5DEB3"}
                  size={20}
                />
              );
            })}
            <Badge borderRadius="full" px="2" colorScheme="grey">
              {rating}
            </Badge>
          </Flex>
          <Box paddingRight="3" color="blue.400">
            Refreshed Date {formattedDate}
          </Box>
          <Text fontSize="lg">
            {name.length > 30 ? name.substring(0, 30) + "..." : name}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Products;
