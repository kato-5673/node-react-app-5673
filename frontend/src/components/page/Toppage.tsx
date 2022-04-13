import { memo, VFC, useCallback } from "react";
import { Center, Box, Text,Button } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';
import { Header } from "../layout/Header";


export const Toppage : VFC = memo(function EStoppage() {
  const history = useHistory();
  const onClickQuestionpage = useCallback(() => history.push('/question'), []);
  
  return(
    <Box>
     <Header></Header>
     <Center h={{ base:'700', sm:'600', '2xl':'700'}} bg="blue.300">
       <Box mx={5} color='white'>
        <Text fontSize={{ base: '24px',  lg: '40px', xl: '48px' }}>あなたの健康、測定します</Text>
        <Box fontSize={{ base: '15px', lg: '20px', xl: '25px' }}>
          <Text>あなたの健康をザックリ推測します!</Text>
          <Text>以下の注意点にお気を付けください。</Text>
          <Box p={4} rounded={10} mt={3} border='4px' borderColor='white'>
            <Text>1.あくまで可能性の話であり、あなたの健康が決定されるものではありません</Text>
            <Text>2.あなたの結果はみんなの統計に集計されることがあります</Text>
            <Text>3.じっくりお考え下さい</Text>
          </Box> 
        </Box>
        <Box mt={4}>
          <Button ml="40%" bg="blue.400" onClick={onClickQuestionpage}>Start!!</Button>
        </Box>  
       </Box> 
     </Center>
     <Box/>
    </Box>
  );
});

