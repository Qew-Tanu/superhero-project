import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './page/home';
import EventsListpage from './page/Event';
import ComicsListpage from './page/comic/comic';
import CharacterListpage from './page/character/character';
import Detail from './page/Detail/Detail';



function App() {

  //Set router for page
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/events",
      element: <EventsListpage />,
    },
    {
      path: "/comics",
      element: <ComicsListpage />,
    },
    {
      path: "/characters",
      element: <CharacterListpage />,
    },
    {
      path: "/:typeid",
      element: <Detail />,
    },
  ]);

  return <RouterProvider router={router} />
}


export default App
