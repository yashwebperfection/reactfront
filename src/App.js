// import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Users from './Users';
import About from './pages/About';
import Services from './pages/Services';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import EditPostForm from './pages/EditPostForm';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/auth/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
//import PublicRoute from './pages/auth/PublicRoute';

class App extends Component{
  render(){ 
    return (
      <Router>
        <div className="App">
            <Header />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about-us' element={<About />}></Route>
              <Route path='/users' element={<Users />}></Route>
              <Route path='/services' element={<Services />}></Route>
              <Route path='/blog' element={<Posts />}></Route>
              <Route path='/addpost' element={<CreatePost />}></Route>
              <Route path="/posts/:id" render={(props) => <EditPostForm postId={props.match.params.id} onPostUpdated={() => props.history.push('/')} />} />
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path="/dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute> } />
                    <Route path="/" element={<h2>Welcome</h2>} />
            </Routes>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
