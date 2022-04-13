import { useState,} from "react";
import { Items } from "../Questionmap";
import { useAtom } from 'jotai';
import { ArrayAtom, TotalPoint} from "../jotai/Jotai";


export const useQuestionArray = () => {  
    let [count, setCount] = useState(0);
    let [value, setValue] = useState('1');
    let [questiondata, setquestiondata] = useAtom(ArrayAtom);
    let [total, settotal] = useAtom(TotalPoint);
   
    const ItemsQustion = Items.filter((item) => {      
        return (item.id === count);
       });
    const onClickCountPlus = () => {
          setCount(count + 1);
          questiondata[count] = Number(value);
          setquestiondata([...questiondata]);
          setValue(String(questiondata[count+1]));
          };   
    const onClickCountMinus = () => {
          questiondata[count] = Number(value);
          setquestiondata([...questiondata]);   
          setCount(count - 1);
          setValue(String(questiondata[count-1]));
        };
    const Answer = () => {   
        settotal(total);
        for(let i=0; i < questiondata.length; i++){
            switch (questiondata[i]){
                case 1:
                  settotal(total += 1);
                  break;
                case 2:
                  settotal(total += 8);
                  break;
                default:
                  settotal(total += 15);
              } 
          } 
      };
    return { 
      onClickCountMinus,
      onClickCountPlus, 
      ItemsQustion,        
      count, 
      value,       
      setValue, 
      questiondata, 
      setCount, 
      total,
      Answer,
      settotal,
      setquestiondata
      };       
    };