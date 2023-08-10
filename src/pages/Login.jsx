import Input from "../components/login/Input";
import Button from "../components/login/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUserInfo } = useUserStore((s) => s);
  const navigateTo = useNavigate();
  const [input, setInput] = useState({});

  const handleOnchange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const setLocalStorage = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `/Account/SignIn`;
    try {
      const response = await axios.post(url, input);
      const data = await response.data;
      console.log(data);
      setUserInfo(data);
      setLocalStorage(data.username)
      navigateTo("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form
        className="border-2 border-slate-900 w-96 h-fit px-8 py-4 flex flex-col gap-10 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold">Login</h1>
        <Input name="username" type="text" onChange={handleOnchange} />
        <Input name="password" type="password" onChange={handleOnchange} />
        <Button name="Login" />
      </form>
    </div>
  );
};

export default Login;
