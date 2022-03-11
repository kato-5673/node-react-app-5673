import {Route,Switch} from "react-router-dom";
import { Toppage } from   "../components/page/Toppage";
import {Questionpage} from "../components/page/Questionpage";
import {QuestionGraphpage} from "../components/page/QuestionGraphpage"
import {Contactpage} from "../components/page/Contact"
import {Answerpage} from "../components/page/Answerpage"

export const Router = () => {
  return(
    <Switch>
      <Route exact path="/">
        < Toppage/>
      </Route>
      <Route exact path="/question">
         <Questionpage />
      </Route>
      <Route exact path="/questiongraph">
         <QuestionGraphpage />
      </Route>   
      <Route exact path="/contact">
         <Contactpage />
      </Route>
      <Route exact path="/answer">
         <Answerpage />
      </Route>    
    </Switch>   
  )
}


