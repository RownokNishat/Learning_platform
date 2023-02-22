import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Component/Main/Main";
import Login from "./Component/Login/Login";
import Registration from "./Component/Registration/Registration";
import DashBoard from "./Component/Home/Dashboard";
import Courses from "./Component/Courses/Courses";
import CourseDetails from "./Component/CourseDetails/CourseDetails";
import { PrivateRoute } from "./Component/PrivateRoute/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/registration",
          element: <Registration></Registration>,
        },
        {
          path: "/home",
          element: <DashBoard></DashBoard>,
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
        },
        {
          path: "/coursesDetails/:id",
          element: (
            <PrivateRoute>
              <CourseDetails></CourseDetails>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
