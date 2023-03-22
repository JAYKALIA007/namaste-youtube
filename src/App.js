import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import WatchVideo from './components/WatchVideo';
import MainContainer from './components/MainContainer';
import ErrorPage from './components/ErrorPage';
function App() {
  /*
    APP LAYOUT

    Header
    Body
      SideBar
        Menu Items
      Main Container
        Filter Buttons List
        Video Container
          Video Card

  */
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      errorElement : <ErrorPage />,
      children:[
        {
          path: '/',
          element: < MainContainer />
        },
        {
          path: 'watch',
          element : < WatchVideo />
        }
      ]
    }
  ])

  return (
    <div>
        <Header />
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
