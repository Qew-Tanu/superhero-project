import './App.css'
import { BrowserRouter, Routes, Route, Link, HashRouter, } from "react-router-dom";
import Homepage from './page/home';
import EventsListpage from './page/event';
import ComicsListpage from './page/comic/comic';
import CharacterListpage from './page/character/character';
import Detail from './page/Detail/Detail';
import { NavbarWeb } from './Components/NavBar/navbar';
import { ParameterSearch } from './Components/usecontext/parametersearch';
import Search from './page/search/Search';



function App() {

  return (
    <BrowserRouter>
      <ParameterSearch >
        <NavbarWeb />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/events" element={<EventsListpage />} />
          <Route path="/comics" element={<ComicsListpage />} />
          <Route path="/characters" element={<CharacterListpage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </ParameterSearch>
    </BrowserRouter>
  )
}

export default App
