import {useState, useCallback} from "react";
import axios from 'axios';


export const useQuestionAxios  = () => {
 const [getQuestionJson, setQuestionJson] = useState<number[][]>([]);
 const [StateQuestionArrayPersent, setStateQuestionArrayPersent] = useState<number[][]>([]);
   
 const AxiosQuestionArrayget = useCallback(() => {  
    axios.get('http://localhost:8080/api')
    .then(res => {
      let n = -1;
      let OneVegetable = [1,1,1];
      let TwoProcessedFood = [1,1,1];
      let ThreeMotion = [1,1,1];
      let FourSleep = [1,1,1];
      let FiveObesity = [1,1,1];
      let SixAlcohol = [1,1,1];
      let SevenTobacco = [1,1,1];
      let EightCondition = [1,1,1];
      for(let i=0; i<17; i+=8){ 
       n++;
         OneVegetable[n] = res.data[`${0+i}`];
         TwoProcessedFood[n] = res.data[`${1+i}`];
         ThreeMotion[n] = res.data[`${2+i}`]; 
         FourSleep[n] = res.data[`${3+i}`]; 
         FiveObesity[n] = res.data[`${4+i}`]; 
         SixAlcohol[n] =  res.data[`${5+i}`]; 
         SevenTobacco[n] = res.data[`${6+i}`]; 
         EightCondition[n] = res.data[`${7+i}`];
      }
      const numbers:number[][] = [
          OneVegetable, 
          TwoProcessedFood, 
          ThreeMotion,
          FourSleep, 
          FiveObesity,
          SixAlcohol,
          SevenTobacco, 
          EightCondition
        ];
      setQuestionJson(numbers);

      let PersentArray:number[][] = []; 
      for(let i=0; i<numbers.length; i++){
        const TottalPaersent = numbers[i][0] + numbers[i][1] + numbers[i][2];
        const ArrayOnePersent = numbers[i][0] / TottalPaersent * 100;
        const ArrayTwoPersent = numbers[i][1] / TottalPaersent * 100;
        const ArrayThreePersent = numbers[i][2] / TottalPaersent * 100;
        PersentArray.push([ArrayOnePersent, ArrayTwoPersent, ArrayThreePersent]);
      }
     const Persents:number[][] = PersentArray;
      setStateQuestionArrayPersent(Persents);
     }).catch(err => { console.log('err:', err); });
   },[]);
  type Props = number[]
 
 const QuestionArraypost = (questiondata:Props) => {  
  let QuestionJson:any ={
     "OneVegetable":0, 
     "TwoProcessedFood":0, 
     "ThreeMotion":0,
     "FourSleep":0, 
     "FiveObesity ":0, 
     "SixAlcohol":0, 
     "SevenTobacco":0,
     "EightCondition":0
  };
  const Jsonname =[
     "OneVegetable", 
     "TwoProcessedFood", 
     "ThreeMotion", 
     "FourSleep", 
     "FiveObesity ", 
     "SixAlcohol", 
     "SevenTobacco",
     "EightCondition"
    ];
  for(let i=0; i < questiondata.length; i++){
      QuestionJson[Jsonname[i]] = questiondata[i];
    }
  console.log(QuestionJson);
  axios.post('http://localhost:8080/api',{QuestionJson})
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
   };

   return{
     QuestionArraypost,
     AxiosQuestionArrayget,
     getQuestionJson,
     StateQuestionArrayPersent
   };
  };