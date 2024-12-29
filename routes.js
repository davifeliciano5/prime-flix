import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/header";
import Erro from './pages/erro'
import Favoritos from "./pages/favoritos";

import Home from './pages/Home'
import	Filme from './pages/filme'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/filme/:id" element={<Filme/>}></Route>
                <Route path="/favoritos" element={<Favoritos/>}></Route>


                <Route path="*" element={<Erro/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;