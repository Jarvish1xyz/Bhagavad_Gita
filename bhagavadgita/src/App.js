// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import Chapter from './component/Chapter';
import Quotes from './component/Quotes';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/chapter/:id" element={<Chapter />} />
          <Route path="/quotes" element={<Quotes />} />
          {/* <Route path="/chapter/:id/verse/:idv" element={<Vlist />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
