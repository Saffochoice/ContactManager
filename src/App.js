import React, { Component } from 'react';
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding='Contact manager'/>
        <div className="container">
          <Contact name='John ko' email='wefkn@kne.ru' phone='8 909 33 1212'/>
          <Contact />
        </div>
        
      </div>
    );
  }
}

export default App;
