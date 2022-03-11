import { useCookies } from "react-cookie";

export const useCookie = () => {  

  const [cookies, setCookie] = useCookies();
  
  const cookieExpiration = '2033-11-11 23:59:59'
  const cookieDate = new Date(cookieExpiration)
 
  const setCookieaction = () => {
    setCookie("name", number, {expires: cookieDate} );   
  };
  const setdffaultCookieaction = () => {
    setCookie("name", dffaultnumber);   
  };

  const number = 777

  const dffaultnumber = 111
  
  return{
    setCookieaction,
    cookies,
    setdffaultCookieaction
  }
}
  