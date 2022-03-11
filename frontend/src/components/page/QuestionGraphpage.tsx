import { memo, VFC, useEffect} from "react";
import { GraphChart, } from "../layout/GraphChart"
import { Box, Wrap} from "@chakra-ui/react"
import { Header } from "../layout/Header";
import { useQuestionAxios } from "../hooks/useQuestionAxios";

export const QuestionGraphpage : VFC = memo(() => {
  const {
    AxiosQuestionArrayget,
    getQuestionJson,
    StateQuestionArrayPersent
  } = useQuestionAxios();

  
  useEffect (() => {  
    AxiosQuestionArrayget()
  },[])
  
return(
 <Box>
  <Header/>
  <Box bg='blue.300'>
    <Wrap spacing='7%' pt={8} justify='center'>  
      <GraphChart 
         GraphPercent = {StateQuestionArrayPersent[0]}
         Graphdata = {getQuestionJson[0]} 
         Graphtitle="食物繊維の摂取量" 
         GraphcommentOne="ほとんど食べていない" 
         GraphcommentTwo="そこそこ食べている"
         GraphcommentThree="多く食べるよう心掛けている"
         /> 
      <GraphChart 
         GraphPercent = {StateQuestionArrayPersent[1]}
         Graphdata = {getQuestionJson[1]} 
         Graphtitle="加工食品の摂取量"
         GraphcommentOne="普段から多く食べている"
         GraphcommentTwo="たまに食べている"
         GraphcommentThree="ほとんど食べない"
         />
      <GraphChart 
         GraphPercent = {StateQuestionArrayPersent[2]}
         Graphdata = {getQuestionJson[2]}
         Graphtitle="運動量について"
         GraphcommentOne="ほとんど運動しない" 
         GraphcommentTwo="そこそこ運動している"
         GraphcommentThree="運動するように心がけている"
         />
      <GraphChart 
         GraphPercent = {StateQuestionArrayPersent[3]}
         Graphdata = {getQuestionJson[3]} 
         Graphtitle="睡眠"
         GraphcommentOne="ほとんど寝ない"
         GraphcommentTwo="そこそこ寝ている"
         GraphcommentThree="満足するまで寝ている"
         />
      <GraphChart 
         GraphPercent = {StateQuestionArrayPersent[4]}
         Graphdata = {getQuestionJson[4]} 
         Graphtitle="肥満"
         GraphcommentOne="肥満です"
         GraphcommentTwo="少しぽっちゃり"
         GraphcommentThree="普通、もしくは痩せています"
         />
      <GraphChart 
         GraphPercent = {StateQuestionArrayPersent[5]}
         Graphdata = {getQuestionJson[5]} 
         Graphtitle="アルコール摂取量"
         GraphcommentOne="大量に摂取する"
         GraphcommentTwo="それなりに摂取する"
         GraphcommentThree="ほとんど摂取しない"
         />
      <GraphChart 
         GraphPercent = {StateQuestionArrayPersent[6]}
         Graphdata = {getQuestionJson[6]} 
         Graphtitle="タバコを吸っているか"
         GraphcommentOne="普段から吸っている"
         GraphcommentTwo="たまに吸っている"
         GraphcommentThree="吸わない"
         />
      <GraphChart 
        GraphPercent = {StateQuestionArrayPersent[7]}
        Graphdata = {getQuestionJson[7]} 
        Graphtitle="体調"
        GraphcommentOne="体調は良い              "
        GraphcommentTwo="体調はふつう   "
        GraphcommentThree="体調は悪い"/>
  </Wrap>
  </Box>
 </Box>
)  
});
