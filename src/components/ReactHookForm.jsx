// let renderCount = 0;
import { useForm } from "react-hook-form";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
} from "@chakra-ui/react";

const ReactHookForm = () => {
  const { register } = useForm(); //註冊是react hook form 核心，綁定 input 到該 hooks 內
  return (
    <Box
      as="section"
      color="gray.50"
      bg="purple.400"
      pt={["60px", "60px", "90px"]}
      pb="198px"
      textAlign={["left", "left", "center"]}
      px="8"
    >
      <Flex direction={"column"} align={"center"}>
        <FormControl w="3xl" p="2">
          <FormLabel>First Name</FormLabel>
          <Input
            {...register("firstName")}
            bg="gray.500"
            placeholder="First Name"
          />
        </FormControl>
        <FormControl w="3xl" p="2">
          <FormLabel>Last Name</FormLabel>
          <Input
            {...register("LastName")}
            bg="gray.500"
            placeholder="Last Name"
          />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default ReactHookForm;
