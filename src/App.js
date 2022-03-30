//import logo from './logo.svg';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Layout from './layouts/Layout';

function App() {
  return (
    <div className="App">
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
