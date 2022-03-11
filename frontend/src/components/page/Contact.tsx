import { memo, VFC } from "react";
import { Center, Box, Text } from "@chakra-ui/react";
import { Header } from "../layout/Header";


export const Contactpage : VFC = memo(() => {
  return(
    <Box>
     <Header></Header>
     <Center h={480} bg="blue.300" >
       <Box color='white' mx={5} p={4} rounded={10} border='4px' borderColor='white'>
         <Center><Text fontSize={{ base: '24px',  lg: '35px', xl: '40px' }}>お問い合わせページです</Text></Center>
        <Text fontSize={{ base: '15px', lg: '20px', xl: '25px' }}>当サイトについてご質問などございましたらこちらにお問い合わせください</Text>
        <Center><Text fontSize={{ base: '15px', lg: '20px', xl: '25px' }}>tamaya2255@gmail.com</Text></Center>
       </Box> 
     </Center>
     <Box/>
    </Box>
  )
});

