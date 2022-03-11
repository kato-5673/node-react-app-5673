import { useAtom } from "jotai"
import { AnimebooleanAtom} from "../jotai/Jotai";

export const useFramerAnimetion = () => {
    let [animeboolean, setanimesetboolen] = useAtom(AnimebooleanAtom);

    const animebooleantrue = () => {
        setanimesetboolen(animeboolean = true);   
    }

    const animebooleanfalse = () => {
        setanimesetboolen(animeboolean = false);
    }
   
    return{
        animeboolean,
        animebooleantrue,
        animebooleanfalse,
    }
}

