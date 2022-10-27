import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Topic1 from "./pages/Topic1";
import Topic2 from "./pages/Topic2";
import Topic3 from "./pages/Topic3";
import Topic4 from "./pages/Topic4";
import Topic5 from "./pages/Topic5";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "topic-1",
      element: (
        <Topic1 />
      ),
    },
    {
      path: "topic-2",
      element: (
        <Topic2 />
      ),
    },
    {
      path: "topic-3",
      element: (
        <Topic3 />
      ),
    },
    {
      path: "topic-4",
      element: (
        <Topic4 />
      ),
    },
    {
      path: "topic-5",
      element: (
        <Topic5 />
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
