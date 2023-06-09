import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import './style.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthenticationContext } from './context/authenticationContext';

function App() {

  const { loggedUser } = useContext(AuthenticationContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!loggedUser) {
      return <Navigate to={'/login'} />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/", element:
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
      children: [
        { path: '/', element: <Home /> },
        { path: '/profile/:id', element: <Profile /> }
      ]
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
