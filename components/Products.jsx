import Link from "next/link";
import Image from "next/image";
import { Box, Badge, Flex, Text, Stack, Heading } from "@chakra-ui/layout";
import { FaStar } from "react-icons/fa";
import { GoVerified } from "react-icons/go";

// import DefaultImage from "../assets/images/house.jpeg";

const Products = ({
  products: { name, image, position, price, is_best_seller, stars },
}) => (
  <Link href={`/results/${position}`} passHref>
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} width={400} height={360} alt="Products" />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {is_best_seller && <GoVerified />}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {name}
        </Box>

        <Box>
          {price}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>
      </Box>

      <Box p="6" display="flex" mt="2" alignItems="center">
        {[...Array(5)].map((star, i) => {
          return (
            <FaStar
              color={i < Math.round(stars) ? "#ffc107" : "#F5DEB3"}
              size={20}
            />
          );
        })}
        <Badge borderRadius="full" px="2" colorScheme="grey">
          {stars}
        </Badge>
        {/* {Array(5)
          .fill("")
          .map((_, i) => (
            <AiFillStar
              key={i.id}
              color={i.id < stars ? "yellow.500" : "yellow.300"}
            />
          ))} */}
      </Box>
    </Box>
  </Link>
);

export default Products;
