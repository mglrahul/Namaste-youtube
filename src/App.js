import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import Demo from "./components/Demo";
import ConsoleTime from "./components/ConsoleTime";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
      {
        path: "console",
        element: <ConsoleTime />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

/* 
  Header
  Body
    Sidebar
      MenuItems
    MainContainer
      ButtonList
      VideoContainer
        VideoCard

*/
