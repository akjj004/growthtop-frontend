import Link from 'next/link';
import { Box, Badge, Flex, Text, Stack, Heading } from '@chakra-ui/layout';
import { FaStar } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import { Card, CardBody, Image, useColorMode } from '@chakra-ui/react';
import { useRef } from 'react';

// import DefaultImage from "../assets/images/house.jpeg";

const Products = ({
  index: index,
  products: { name, position, price, rating, thumbnail, numberOfOffers, url, refreshed_at, credibility, reviewCount },
}) => {
  const { colorMode } = useColorMode();

  return (
    <Card
      maxW="sm"
      variant={colorMode == 'dark' ? 'elevated' : 'filled'}
      sx={{
        transition: 'transform 150ms ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Link href={`${url}/${position}`} passHref target="_blank">
        <CardBody>
          <Image src={thumbnail} alt="Products" minHeight="250" borderRadius="lg" />

          <Stack mt="6" spacing="3">
            <Heading size="md" noOfLines={3}>
              {name}
            </Heading>
            <Box paddingRight="3" color="green.400">
              Stock: {numberOfOffers}
              <Text fontWeight="bold" fontSize="lg">
                USD {price}
              </Text>
            </Box>

            <Flex alignItems="center" my="2" justifyContent="space-between" w="250px" color="blue.400">
              {[...Array(5)].map((rating, i) => {
                return <FaStar key={i} color={i < rating ? '#ffc107' : '#F5DEB3'} size={20} />;
              })}
              <Badge borderRadius="full" px="4" colorScheme="purple">
                {rating}
              </Badge>
            </Flex>

            <Text mt="3">
              <b>Credibility</b>: {credibility} &bull; <b>Reviews</b>: {reviewCount}
            </Text>
            {/* 
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text> */}
          </Stack>
          {/* 
        <Link href={`${url}/${position}`} passHref>
          <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0px" justifyContent="flex-start" cursor="pointer">
            <Box w="full">
              <Text fontSize="lg" my={2}>
                <Text color="blue.400" fontWeight="bold">
                  #{index}
                </Text>
                {name.length > 60 ? name.substring(0, 60) + '...' : name}
              </Text>
              <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center"></Flex>
              </Flex>
            </Box>
          </Flex>
        </Link> */}
        </CardBody>
      </Link>
    </Card>
  );
};

export default Products;

