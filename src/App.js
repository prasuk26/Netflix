import './App.scss';
import React from 'react';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Login from './Login';
import Banner from './components/Banner';
import List from './components/List';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={
            <React.Fragment>
              <Header/>
              <HomeBanner />
            </React.Fragment>
          }/>

          <Route path='/Login' element={
          <React.Fragment >
              <Header />
              <Login page={true}/>
          </React.Fragment>
          }/>

          <Route path='/register' element={
          <React.Fragment >
              {/* <Header /> */}
              <Login page={false} />
          </React.Fragment>
          }/>

          <Route path='/dashboard' element={
            <React.Fragment>
              <Header/>
              <Banner />
              <List title="Netflix Originals" param="originals"/>
              <List title="Trending Now" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
              <List title="Upcoming" param="upcoming"/>
            </React.Fragment>
          }/>

        </Routes>
      </Router>
    </React.Fragment>


    //  <div className="App">
    //    <Login/> 
    //    <Header/>
    //   <Banner/>
    //   <List/> 
    //   <HomeBanner />
    // </div>
  );
}

export default App;
