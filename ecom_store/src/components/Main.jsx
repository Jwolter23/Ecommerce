import Home from "../components/Home"
import Men from "../components/Men"
import Women from "../components/Women"
import Account from "../components/Account"
import { Route, Routes } from "react-router-dom"

export default function Main() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/men' element={<Men />}/>
                <Route path='/women' element={<Women />}/>
                <Route path='/account' element={<Account />}/>
            </Routes>
        </div>
    )
}