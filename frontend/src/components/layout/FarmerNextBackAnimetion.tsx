import { memo, VFC, ReactNode} from "react";
import { motion } from "framer-motion";
import { useFramerAnimetion } from "../hooks/useFremerAnimetion";

type Props = {
    children: ReactNode;
    count: number
}

export const FramerNextBackAnimetion : VFC<Props> = memo(function ESframerNextbackanimetion(props){  
 const {
      children,
      count
   } = props;

 const { 
     animeboolean, 
   } = useFramerAnimetion();  
 
 const variants = {
   enter: () => {
     return {
      x: animeboolean === false ? -1000: 1000,
      opacity: 1
     };
    },
    center: {
       x: 0,
       opacity: 1
      }
    };
 return(
  <motion.div 
    key={count}
    dragElastic={1} 
    variants={variants}
    initial="enter"
    animate="center"
    transition={{
     x: { type: "spring", stiffness: 300, damping: 30 },
     opacity: { duration: 0.2 }
    }} 
    > 
    {children}
   </motion.div>       
 );
});