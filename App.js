import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home1 from './pages/Home1';
import Account from './pages/Account';
import Product from './pages/Product';
import Login from './pages/Login';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = 'https://www.reddit.com/r/Angular2.json';
        const response = await fetch(url);
        // if (!response.ok) {
        //   throw new Error('Failed to fetch data');
        // }
        const jsonData = await response.json();
        const second = jsonData.data.children;
        const final=
        setArticles(second);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Account">Account</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
      <div className="container">
        <div className="card" id="crd" style={{ color: 'red', padding: '10px' }}>
          {articles.map((element, index) => (
            <div key={index}>{element.data.title}</div>
          ))}
        </div>
      </div>
    </Router>
  );
};

export default App;
