import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import FullView from "./components/collection/Fullview";
import Explore from "./components/explore/Explore";
import Searchplace from "./components/explore/Searchplace";
function Routedefine(){
return(
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path='/fullview'element={<FullView/>}/>
      <Route path='/explore'element={<Explore/>}/>
      <Route path='/searchedplace'element={<Searchplace/>}/>
    </Routes>
  </BrowserRouter>
)
}

export default Routedefine;