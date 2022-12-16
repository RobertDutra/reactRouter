import { Routes, Route} from "react-router-dom";
import { Config } from "./pages/Config";
import Index from "./pages/Index";
import { Itens } from "./pages/Itens";
import List from "./pages/List";
import { Perfil } from "./pages/Perfil";


export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/list"> 
                <Route index element={<List/>}/>
                <Route path="itens" element={<Itens/>}/>
            </Route>
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/config" element={<Config/>} />
        </Routes>
    )
}