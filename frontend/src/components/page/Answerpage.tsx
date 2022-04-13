import { memo, VFC, useEffect } from "react";
import { Box, Text, Center} from "@chakra-ui/react";
import { Header } from "../layout/Header";
import { useQuestionArray } from "../hooks/useQestionArray";
import { AnswerItems } from "../Answermap";
import { useHistory } from 'react-router-dom';

export const Answerpage : VFC = memo( function answerpage(){
 const history = useHistory();
 type Answer = 1 | 2 | 3

 const { 
  questiondata,
  total,
 } = useQuestionArray();
 
 useEffect(() => {
  if(total === 0){   
   history.push('/');
  } 
 },[]);

 return(
  <Box>
   <Header></Header>
   <Box bg="blue.300" color="white" pb={100}>
     <Center>
      <Text my={16} fontSize={{ base: '24px',  lg: '35px', xl: '40px' }}>{`あなたの点数は…${total}点です!`}</Text>     
     </Center> 
   {AnswerItems.map((Items) => { 
    return (
     <Box key={Items.id} mx={5} p={4} rounded={10} mb={16} border='4px' borderColor='white'>
          <Text>{`Q${Items.id}`}.{Items.Answer[questiondata[1]  as Answer ]}</Text> <br/>
          <Text pb={10}>{Items.Answercomment}</Text>
     </Box> 
      );
    })
   }
   </Box>   

  </Box>
  );

  
});


