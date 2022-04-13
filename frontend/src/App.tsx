import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom"; 
import { Router } from "./router/Router";
import { extendTheme } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
});

const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: 'Verdana',
    body: "メイリオ", 
  },
  styles: {
    global: {
      body: {
        color: "gray.600",   
        fontWeight: "bold"          
      }
    }
  }
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>   
        <BrowserRouter>
          <CookiesProvider>
            <Router />  
          </CookiesProvider>      
        </BrowserRouter>
    </ChakraProvider>
  );
}
