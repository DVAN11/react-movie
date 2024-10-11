import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Global/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Page/Home/Home';
import Movie from './Component/Page/Movie/Movie';
import Detail from './Component/Page/DetailMovie/Detail';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie' element={<Movie/>}></Route>
        <Route path='/search/:slug' element={<Movie/>}></Route>
        <Route path='/detail/:slug' element={<Detail/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
