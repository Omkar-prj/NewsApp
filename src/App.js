
import './App.css';
import React, { Component } from 'react'


import Navbar from './componets/Navbar';
import News from './componets/News';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {
  pageSize = 5;
  
  render() {

    return (
      <div>
        <Router>
        <Navbar/>
       
        <Routes>
            <Route path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
        
        </Routes>
        </Router>
          
      </div>
    )
  }
}


