import React from 'react';
import { Link } from 'react-router-dom';
    

const Login = () => {
    return (
        <div className='container'>
        <div  className='text-center  py-5 ' >
            <div> 
                <h1 className='mt-3' >Hello , university students</h1> 

            <Link to="https://convertio.co/csv-xlsx/" className='text-center m-auto btn btn-dark mt-3 '  >   اضغط هنا   </Link>
        </div>
        </div>
        </div>
    );
}

export default Login;
