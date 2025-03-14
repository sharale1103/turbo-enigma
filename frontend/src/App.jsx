import Navbar from "./components/Navbar"

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import {Loader} from "lucide-react";
import { Routes , Route } from "react-router-dom";

const App = ()=>{
    const {authUser,checkAuth,isCheckingAuth}=useAuthStore();
    useEffect(()=>{
        checkAuth()
    },[checkAuth]);
    console.log({authUser})
    if (true)
        return (
          <div className="flex items-center justify-center h-screen">
            <Loader className="size-10 animate-spin" />
          </div>
        );
return(<div>
    <Navbar/>

    <Routes>
    <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      

    


    </Routes>


</div>
)



}
export default App;