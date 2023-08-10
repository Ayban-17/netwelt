import Home from "./pages/Home";
import Login from "./pages/Login";
import { useUserStore } from "./store/userStore";

const RootRoute = () => {
  const { userInfo } = useUserStore((state) => state);

  if (userInfo) {
    return <Home />;
  } else {
    return <Login />;
  }
};

export default RootRoute;
