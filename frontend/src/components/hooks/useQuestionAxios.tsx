import {useState, useCallback} from "react";
import axios from 'axios';


export const useQuestionAxios  = () => {
 const [getQuestionJson, setQuestionJson] = useState<number[][]>([]);
 const [StateQuestionArrayPersent, setStateQuestionArrayPersent] = useState<number[][]>([])
   
 const AxiosQuestionArrayget = useCallback(() => {  
    axios.get('http://localhost:8080/api')
    .then(res => {
      let n = -1;
      let One = [1,1,1];
      let Two = [1,1,1];
      let Three = [1,1,1];
      let Four = [1,1,1];
      let Five = [1,1,1];
      let Six = [1,1,1];
      let Seven = [1,1,1];
      let Eight = [1,1,1];
      for(let i=0; i<17; i+=8){ 
       n++;
         One[n] = res.data[`${0+i}`];
         Two[n] = res.data[`${1+i}`];
         Three[n] = res.data[`${2+i}`]; 
         Four[n] = res.data[`${3+i}`]; 
         Five[n] = res.data[`${4+i}`]; 
         Six[n] =  res.data[`${5+i}`]; 
         Seven[n] = res.data[`${6+i}`]; 
         Eight[n] = res.data[`${7+i}`];
      }
      const numbers:number[][] = [One, Two, Three, Four, Five, Six, Seven, Eight]
      setQuestionJson(numbers)

      let PersentArray:number[][] = []; 
      for(let i=0; i<numbers.length; i++){
        const TottalPaersent = numbers[i][0] + numbers[i][1] + numbers[i][2];
        const ArrayOnePersent = numbers[i][0] / TottalPaersent * 100;
        const ArrayTwoPersent = numbers[i][1] / TottalPaersent * 100;
        const ArrayThreePersent = numbers[i][2] / TottalPaersent * 100;
        PersentArray.push([ArrayOnePersent, ArrayTwoPersent, ArrayThreePersent]);
      }
     const Persents:number[][] = PersentArray
      setStateQuestionArrayPersent(Persents)
     }).catch(err => { console.log('err:', err); });;
   },[])
  type Props = number[]
 
 const QuestionArraypost = (questiondata:Props) => {  
  let QuestionJson:any ={
     "one":0, "two":0, "three":0, "four":0, "five":0, "six":0, "seven":0, "eight":0
  }
  const Jsonname =["one", "two", "three", "four", "five", "six", "seven", "eight"]
  for(let i=0; i < questiondata.length; i++){
      QuestionJson[Jsonname[i]] = questiondata[i];
    }
  console.log(QuestionJson)
  axios.post('http://localhost:8080/api',{QuestionJson})
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
   }

   return{
     QuestionArraypost,
     AxiosQuestionArrayget,
     getQuestionJson,
     StateQuestionArrayPersent
   }
  };