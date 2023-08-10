import { Routes, Route } from "react-router-dom";
import { useUserStore } from "./store/userStore";
import RootRoute from "./RootRoute";
import Home from "./pages/Home"
import Login from "./pages/Login"
import { useEffect } from "react";

const App = () => {
  const { userInfo, setUserInfo } = useUserStore((state) => state);
  useEffect(()=>{
    const auth = async ()=> {
      const isLogin = localStorage.getItem("token");
      setUserInfo(JSON.parse(isLogin));
    }
    auth();
  },[])

  return (
    <Routes>
      <Route path="/" element={<RootRoute />} />
      <Route path="/login" element={!userInfo ? <Login /> : <Home />} />
      <Route path="/home/index" element={!userInfo ? <Login /> : <Home />} />
    </Routes>
  )
}

export default App