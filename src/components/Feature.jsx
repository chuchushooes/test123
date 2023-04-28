import { Box, Stack, HStack, Icon, Text } from "@chakra-ui/react";
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "../Icons/Icon";
import PropTypes from "prop-types";

function Feature(props) {
  const { icon, children } = props;
  Feature.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.node.isRequired,
  };
  return (
    //水平
    <HStack spacing="6" align="start">
      <Icon as={icon} boxSize={["8", "8", "12"]} />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

/* 使用 Feature 產生復數 帶入icon對應 */
export function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="8" as="section">
      <Stack
        px="12"
        spacing={["6", "6", "5"]}
        direction={["column", "column", "row"]}
      >
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}
