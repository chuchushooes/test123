import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="section"
      color="gray.50"
      bg="purple.500"
      pt={["60px", "60px", "90px"]}
      pb="198px"
      textAlign={["left", "left", "center"]}
      px="8"
    >
      <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]}>
        I am Heading
      </Heading>
      <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} pt="16px">
        Helloooooooooooooooooooooooooooooooooooooo
      </Text>
    </Box>
  );
};

export default Header;
