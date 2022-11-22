export const filterData = [
  {
    items: [
      {
        name: "Amazon-Devices-Accessories",
        value: "Amazon-Devices-Accessories",
      },
      {
        name: "Amazon-Launchpad",
        value: "Amazon-Launchpad",
      },
      {
        name: "Amazon-Renewed",
        value: "Amazon-Renewed",
      },
      {
        name: "Appliances",
        value: "Appliances",
      },
      {
        name: "Apps-Games",
        value: "Apps-Games",
      },
      {
        name: "Arts-Crafts-Sewing",
        value: "Arts-Crafts-Sewing",
      },
      {
        name: "Audible-Books-Originals",
        value: "Audible-Books-Originals",
      },
      {
        name: "Automotive",
        value: "Automotive",
      },
      {
        name: "Baby",
        value: "Baby",
      },
      {
        name: "Beauty-Personal-Care",
        value: "Beauty-Personal-Care",
      },
      {
        name: "Books",
        value: "Books",
      },
      {
        name: "Camera-Photo-Products",
        value: "Camera-Photo-Products",
      },
      {
        name: "Cell-Phones-Accessories",
        value: "Cell-Phones-Accessories",
      },
      {
        name: "Computers-Accessories",
        value: "Computers-Accessories",
      },
      {
        name: "Clothing-Shoes-Jewelry",
        value: "Clothing-Shoes-Jewelry",
      },
      {
        name: "Digital-Educational-Resources",
        value: "Digital-Educational-Resources",
      },
      {
        name: "Electronics",
        value: "Electronics",
      },
      {
        name: "Gift-Cards",
        value: "Gift-Cards",
      },
      {
        name: "Grocery-Gourmet-Food",
        value: "Grocery-Gourmet-Food",
      },
      {
        name: "Handmade-Products",
        value: "Handmade-Products",
      },
      {
        name: "Health-Household",
        value: "Health-Household",
      },
      {
        name: "Kindle-Store",
        value: "Kindle-Store",
      },
      {
        name: "Kitchen-Dining",
        value: "Kitchen-Dining",
      },
      {
        name: "Magazine-Subscriptions",
        value: "Magazine-Subscriptions",
      },
      {
        name: "Movies-TV",
        value: "Movies-TV",
      },
      {
        name: "Musical-Instruments",
        value: "Musical-Instruments",
      },
      {
        name: "Office-Products",
        value: "Office-Products",
      },
      {
        name: "Patio-Lawn-Garden",
        value: "Patio-Lawn-Garden",
      },
      {
        name: "Pet-Supplies",
        value: "Pet-Supplies",
      },
      {
        name: "Software",
        value: "Software",
      },
      {
        name: "Sports-Outdoors",
        value: "Sports-Outdoors",
      },
      {
        name: "Sports-Collectibles",
        value: "Sports-Collectibles",
      },
      {
        name: "Toys-Games",
        value: "Toys-Games",
      },
      {
        name: "Video-Games",
        value: "Video-Games",
      },
    ],
    placeholder: "Categories",
    queryName: "category",
  },
];

export const getFilterValues = (filterValues) => {
  const { category } = filterValues;
  const values = [
    {
      name: "category",
      value: category,
    },
  ];
  return values;
};
