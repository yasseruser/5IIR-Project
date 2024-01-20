import "bootstrap/dist/css/bootstrap.css";
import api from "./api/axiosConfig";
import { useEffect, useState } from "react";
import "./App.css";
// import CustomerComponent from "./components/CustomerComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import RoutesApplications from "./components/routes.application";
function App() {
 const [, setCustomers] = useState([]);
 /* manage side effects */
 useEffect(() => {
 (async () => await load())();
 }, []);
 async function load() {
 const result = await api.get("/all");
 setCustomers(result.data);
 }
 return (
 <div>
  <NavBar />
  <RoutesApplications />
 {/* <h1 className="text-center">List Of customers</h1>
 <CustomerComponent load={load} customers={customers} /> */}
 
 </div>
 );
}
export default App; 