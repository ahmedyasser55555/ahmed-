import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
       <div>
  <div>
    <div>
      <div className="card text-center py-4 rounded-2 ">
        <form className="m-auto">
          <h1>welcome</h1>
          <input type="text" className="d-flex  mb-2 " placeholder="user name" />
          <input type="number" className="d-flex mb-2 " placeholder="phone" />
          <input type="gmail" className="d-flex mb-2 " placeholder="Gmail" />
              
         

               
          <div>
          <Link className=" btn btn-black  ms-auto bg-black text-white text-center rounded-5 " to="Login">login</Link>
          </div>
         
        </form>
      </div>
    </div>{/* f */}
  </div>
  </div>
  );
}



export default Home;
