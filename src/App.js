import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import About from "./pages/About";
import Users from "./pages/Users";
import Error from "./pages/Error";
import SingleUser from "./pages/SingleUser";
import Paginate from "./components/Pagination";

const url = "https://randomuser.me/api/?results=60";

export const UserContext = React.createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  // FETCH FUNCTION
  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;

    setUsers(Paginate(results)); // Array of array
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
    if (loading) return;
    setFollowers(users[page]);
  }, [loading, page]);

  // HELPER FUNCTION
  const pageHandler = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > users.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = users.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        nextPage,
        prevPage,
        pageHandler,
        followers,
        page,
      }}
    >
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/learn" element={<About />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:Id" element={<SingleUser />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
