import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import showSidebarContext from './utils/ShowSidebarContext';
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

  const [showSidebar,setShowSidebar] = useState(true)
  return (
    <div>
      <showSidebarContext.Provider value={{showSidebar , setShowSidebar}} >
        <Header />
        <Body />
      </showSidebarContext.Provider>
    </div>
  );
}

export default App;
