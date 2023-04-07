import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import WatchVideo from './components/WatchVideo';
import MainContainer from './components/MainContainer';
import ErrorPage from './components/ErrorPage';
import SearchResults from './components/SearchResults';
import ChannelVideoList from './components/ChannelVideoList';
import ShowAllSubscriptions from './components/ShowAllSubscriptions';
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
      element: <><Header /><Body /></>,
      errorElement : <ErrorPage />,
      children:[
        {
          path: '/',
          element: < MainContainer />
        },
        {
          path: 'watch',
          element : < WatchVideo />
        },
        {
          path : 'results',
          element : <SearchResults />
        },
        {
          path: 'channel',
          element : <ChannelVideoList />
        },
        {
          path: 'subscriptions',
          element: <ShowAllSubscriptions />
        }
      ]
    }
  ])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
