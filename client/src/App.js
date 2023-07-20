import {Routes as Switch,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/forget";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";
import CreateContact from "./pages/CreateContact";
import AllContact from "./pages/AllContact";
import EditContact from "./pages/EditContact";
const App=()=>{
  return(
    <ToastContextProvider>
  <AuthContextProvider>

  <Layout>
    <Switch>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/create" element={<CreateContact/>}/>
      <Route path="/mycontacts" element={<AllContact/>}/>
      <Route path="/edit/:id" element={<EditContact/>}/>
      <Route path="/forget" element={<ForgotPassword/>}/>
    </Switch>
  </Layout>
 
  </AuthContextProvider>
  </ToastContextProvider>
  );
};
export default App;
