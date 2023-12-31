import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/Signup.js";
import LoginPage from "./Pages/Login";
import { useContext, useEffect } from "react";
import { AuthContext, FirebaseContext } from "./store/Context";
import CreatePage from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";
import Post from "./store/PostContext";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <Post>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/view" element={<ViewPost />} />
          </Routes>
        </BrowserRouter>
      </Post>
    </div>
  );
}

export default App;
