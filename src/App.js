import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing"; 
import AccordionPage from "./pages/AccordionPage";
import TopicLayout from "./components/TopicLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "topic-1",
      element: (
        <TopicLayout
          bgImage={{
            backgroundImage: `url(${require("./assets/topic-bg-1.jpg")})`,
          }}
        />
      ),
    },
    {
      path: "topic-2",
      element: (
        <TopicLayout
          bgImage={{
            backgroundImage: `url(${require("./assets/topic-bg-2.jpg")})`,
          }}
        />
      ),
    },
    {
      path: "topic-3",
      element: (
        <TopicLayout
          bgImage={{
            backgroundImage: `url(${require("./assets/topic-bg-3.jpg")})`,
          }}
        />
      ),
    },
    {
      path: "topic-4",
      element: (
        <TopicLayout
          bgImage={{
            backgroundImage: `url(${require("./assets/topic-bg-4.jpg")})`,
          }}
        />
      ),
    },
    {
      path: "topic-5",
      element: (
        <TopicLayout
          bgImage={{
            backgroundImage: `url(${require("./assets/topic-bg-5.jpg")})`,
          }}
        />
      ),
    },
    {
      path: "topic-5",
      element: (
        <TopicLayout
          bgImage={{
            backgroundImage: `url(${require("./assets/topic-bg-6.jpg")})`,
          }}
        />
      ),
    },
    {
      path: "accordion",
      element: <AccordionPage />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
