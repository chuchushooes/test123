import { useForm } from "react-hook-form";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";

const ReactHookForm = () => {
  let i = 0;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //register 是react hook form 核心，綁定 input 到該 hooks 內
  //formState取出表單內的error，但要記得填寫error狀態

  console.log(errors);
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
      <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]} pb="4">
        React Hook Form
      </Heading>
      <Flex direction={"column"} align={"center"}>
        {/* chakra的form無submit接收的功用，還是要用原生表單 */}
        <form
          onSubmit={handleSubmit((data) => {
            console.log(i);
            console.log(data);
            i++;
          })}
        >
          <FormControl w="3xl" p="2">
            <FormLabel>First Name</FormLabel>
            <Input
              {...register("firstName", { required: "必填" })} //required可選，當沒輸入值時不送出表單
              bg="gray.500"
              placeholder="First Name"
            />
            <FormLabel>Last Name</FormLabel>
            <Input
              {...register("LastName", { required: "必填" })}
              bg="gray.500"
              placeholder="Last Name"
            />
            <Button
              colorScheme="blue"
              type="submit"
              size="lg"
              w={["auto", "282px", "282px"]}
              mt="24px"
              color="white"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Flex>
    </Box>
  );
};

export default ReactHookForm;
