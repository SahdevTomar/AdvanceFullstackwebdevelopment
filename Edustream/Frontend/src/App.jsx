import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import MediaGallery from "./components/MediaGallery";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      {!loggedIn ? (
        <div className="flex justify-center gap-10 mt-8">
          <Login onLogin={() => setLoggedIn(true)} />
          <Register />
        </div>
      ) : (
        <>
          <Dashboard />
          <MediaGallery />
        </>
      )}
    </div>
  );
}

export default App;
