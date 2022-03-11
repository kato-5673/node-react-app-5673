/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Box, Center, Text, Radio,RadioGroup, Stack} from "@chakra-ui/react";
import { memo, VFC, useEffect} from "react";
import { Header } from "../layout/Header";
import { useQuestionArray } from "../hooks/useQestionArray";
import { useQuestionAxios } from "../hooks/useQuestionAxios";
import { NextIconButton } from "../layout/NextIconButton";
import { BackIconButton } from "../layout/BackIconButton";
import { useHistory } from 'react-router-dom';
import { useCookie } from "../hooks/useCookie";
import {useFramerAnimetion} from "../hooks/useFremerAnimetion";
import {FramerNextBackAnimetion} from "../layout/FarmerNextBackAnimetion";


export const Questionpage : VFC = memo(() => {
   const history = useHistory();

    const {
      animebooleantrue,
      animebooleanfalse,
    } = useFramerAnimetion()

    const {
      cookies,
      setCookieaction,    
      setdffaultCookieaction  
    } = useCookie() 
   
    const {
      QuestionArraypost,
    } = useQuestionAxios();

    const { 
      onClickCountMinus,
      onClickCountPlus, 
      ItemsQustion, 
      count, 
      value,      
      setValue, 
      questiondata, 
      total,
      Answer,
      settotal,
      setquestiondata
    } = useQuestionArray();
    
    
    useEffect (() => {  
      if(777 === Number(cookies.name)){
      } else{
        setdffaultCookieaction();
      }

      if(total !== 0){
        settotal(0);
        setquestiondata([1,1,1,1,1,1,1,1])
      } 
    },[])

    const PulsOrCookieOrNextpageAndAnimetionClick = () => {
       switch (count){
        case 7:
          history.push('/answer');
          console.log("配列のデータ "+ questiondata);
          console.log("トータル計算" + total);
          console.log("カウント" + count)
          onClickCountPlus()
          animebooleantrue()
          Answer()
          if(111 === Number(cookies.name)){
           console.log("111 send!!");
           QuestionArraypost(questiondata);
           setCookieaction();
          } else{
          console.log("777 not send!!");    
         }
        break
        default:
          onClickCountPlus()
          animebooleantrue()
          console.log("配列のデータ "+ questiondata);
          console.log("トータル計算" + total);
      }
    }

    const MinsAndAnimetiononClick = () => {
      onClickCountMinus()
      animebooleanfalse()
    }

  return(
   <Box >
     <Header/>
     <Center  h={{ base:'700', sm:'500', '2xl':'700'}} bg="blue.300">
     <FramerNextBackAnimetion count= {count}>  
     { ItemsQustion.map((item) => {
      return (    
       <Box key={item.id}  color="white">
        <Flex>
         <Flex my={10} py={20} px={3} > 
           {
            count === 0 ? 
            <BackIconButton/>
            :<BackIconButton onClick={MinsAndAnimetiononClick}/>
           }
         </Flex>
         <Box fontSize={{ base: '18px', lg: '30px' }} py={10} >  
          <Text>{ item.title }</Text>
          <RadioGroup pt="15px" onChange={setValue} value={value}>
           <Stack >
            <Radio  value='1'><Text fontSize={{ base: '16px', lg: '30px' }}>{ item.questuinOne }</Text></Radio>
            <Radio value='2'><Text fontSize={{ base: '16px', lg: '30px' }}>{ item.questionTwo }</Text></Radio>
            <Radio value='3'><Text fontSize={{ base: '16px', lg: '30px' }}>{ item.questionThree }</Text></Radio>
           </Stack>
          </RadioGroup>
         </Box>
          <Flex my={10}  py={[20]} px={3}>
             <NextIconButton onClick={PulsOrCookieOrNextpageAndAnimetionClick} />
          </Flex>  
         </Flex> 
        </Box>         
        )
      })}
      </FramerNextBackAnimetion>
     </Center>
   </Box>
  )
});

