import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { CheckIcon } from "../Icons/Icon";

export const ListItem = (props) => {
  ListItem.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const { children } = props;
  return (
    <HStack as="li" spacing="20px">
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box
      maxW="994px"
      margin="auto"
      mt="-160px"
      borderRadius="12px"
      overflow="hidden" /*溢出設定隱藏*/
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      textAlign="center
      "
    >
      <Flex direction={["column", "column", "row"]}>
        <Box bg="#F0EAFB" p={["28px", "6opx", "60px"]}>
          <Text
            color="#171923"
            fontSize={["5xl", "5xl", "6xl"]}
            fontWeight="800"
          >
            PRO
          </Text>
          <Heading
            color="#171923"
            as="h3"
            fontSize={["5xl", "5xl", "6xl"]}
            m="16px"
          >
            $3900
          </Heading>
          <Text color="gray.900" fontSize="18px" fontWeight="500">
            billed just once
          </Text>
          <Button
            colorScheme="purple"
            size="lg"
            w={["auto", "282px", "282px"]}
            mt="24px"
            color="white"
          >
            Get Start
          </Button>
        </Box>
        <Box
          fontSize="18px"
          bg="white"
          color="black"
          p={["32px", "32px", "60px"]}
        >
          <Text textAlign="left">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing="20px" pt="24px">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
