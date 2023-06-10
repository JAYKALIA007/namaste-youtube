import './App.css';
import Body from './components/page_layout/Body';
import Header from './components/page_layout/Header';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import WatchVideo from './components/watch/WatchVideo';
import MainContainer from './components/page_layout/home_page/MainContainer';
import ErrorPage from './components/ErrorPage';
import SearchResults from './components/search/SearchResults';
import ChannelVideoList from './components/channel/ChannelVideoList';
import ShowAllSubscriptions from './components/subscriptions/ShowAllSubscriptions';
import LiveVideosList from './components/live_videos/LiveVideosList';
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
        },
        {
          path: 'live',
          element: <LiveVideosList />
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
