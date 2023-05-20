
import Home from "./componant/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./componant/Login";


function App() {

 
  return (
  


    <div>
    


      <Routes>
        <Route path="Login"    element={<Login/>}     />
        <Route path="/"    element={  <Home/>}     />
      </Routes>
    </div>
  );
}

export default App;
