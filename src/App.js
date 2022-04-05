//import logo from './logo.svg';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Layout from './layouts/Layout';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">



      {/* <button onClick={() => setLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log out" : "Log in"}</button> */}



      <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        <Routes>
          <Route path="/" element={<AuthPage/>}></Route>
          <Route path="/feed" element={<HomePage/>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
