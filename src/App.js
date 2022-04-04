//import logo from './logo.svg';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Layout from './layouts/Layout';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <div>AM I LOGGED IN? {isLoggedIn ? "TRUE" : "FALSE"}</div>
      <button onClick={() => setLoggedIn(!isLoggedIn)}>LOGIN</button>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
