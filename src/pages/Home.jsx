import Title from "../components/home/Title"
import Label from "../components/home/Label"
import Table from "../components/home/Table"
const Home = () => {
  const handleLogout =()=> {
    localStorage.removeItem("token");
    window.location="/";
  }
  return (
    <div>
      <Title title="Territories"/>
      <Label label="Here are the list of territories"/>
      <Table/>
    <div className="flex justify-center p-4">
    <button onClick={handleLogout} className="bg-slate-300 py-2 px-4 text-center mx-0">Logout</button>  
    </div>    
  </div>
  )
}

export default Home