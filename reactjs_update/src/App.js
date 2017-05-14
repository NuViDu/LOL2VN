import React, {Component} from 'react';
import ScreenTest from './Containers/ScreenTest';
import ScreenListTest from './Containers/ScreenListTest';
import ScreenDisplayResult from './Containers/ScreenDisplayResult';
import ScreenListOnTap from './Containers/ScreenListOnTap';
import ScreenSahinh from './Containers/ScreenSahinh';
import ScreenThucHanh from './Containers/ScreenThucHanh';
import ScreenLyThuyet from './Containers/ScreenLyThuyet';
import ScreenBienBao from './Containers/ScreenBienBao';
import ScreenSuccess from './Containers/ScreenSuccess';
import ScreenHoso from './Containers/ScreenHoso';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ScreenListTest}/>
          <Route path='/test' component={ScreenTest}/>
          <Route path='/result/:id' component={ScreenDisplayResult} />
          <Route path='/ontap' component={ScreenListOnTap} />
          <Route path='/sahinh' component={ScreenSahinh}/>
		  <Route path='/thuchanh' component={ScreenThucHanh}/>
		  <Route path='/bienbao' component={ScreenBienBao}/>
		  <Route path='/lythuyet' component={ScreenLyThuyet}/>
          <Route path='/hoso' component={ScreenHoso} />
          <Route path='/success' component={ScreenSuccess}/>
        </div>
      </Router>
    );
  }
}

export default App;
