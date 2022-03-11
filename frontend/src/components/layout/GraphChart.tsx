import {VFC, memo} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {Center, WrapItem, Box} from "@chakra-ui/react"

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  Graphdata: number[];
  Graphtitle: string;
  GraphcommentOne: String;
  GraphcommentTwo: String;
  GraphcommentThree: String;
  GraphPercent:number[]
}

export const GraphChart : VFC<Props> = memo((PropsGraphdata) => {
  let Persent:number[] = []
  if(PropsGraphdata.GraphPercent === undefined){
    Persent = [0,0,0] 
  }else{
    Persent = PropsGraphdata.GraphPercent
  }

  const data ={   
  labels: [
    `${PropsGraphdata.GraphcommentOne} ${Math.round(Persent[0])}%`, 
    `${PropsGraphdata.GraphcommentTwo} ${Math.round(Persent[1])}%`, 
    `${PropsGraphdata.GraphcommentThree} ${Math.round(Persent[2])}%`,
   ],
   datasets: [
    {
      label: '# of Votes',
      data: PropsGraphdata.Graphdata,
      backgroundColor: [
        'rgb(255, 60, 60)',
        'rgb(26, 216, 1)',
        'rgb(240, 237, 49)',
      ],
      borderColor: [
        '#ff2a2a',
        '#4eb90f',
        '#f1ff2f',
      ],
      borderWidth: 0.1,
    },
  ],
}

const options = { 
plugins: { 
  legend: { 
    labels: {
      color:'#fff',
      font: {
        weight: 'bold',
        size: 14,
     },
    }
   } 
  },
  maintainAspectRatio: false, 
  responsive: false
}
 const Graphtitle =  PropsGraphdata.Graphtitle

 return (
   
 <WrapItem>
  <Box color={'white'}> 
   <Center>
     <h1>{Graphtitle}</h1>
   </Center>
   <Doughnut 
     data={data} 
     width={300}
     height={300}
     options={options}
    /> 
  </Box>
 </WrapItem>
     );
});
