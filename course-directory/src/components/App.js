import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
const App = () => (
  <HashRouter basename="/course-directory">
    <div className="container">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path ="/about" render={ () => <About title='About' /> } />
        <Route exact path ='/teachers' component={Teachers} />
        <Route path ='/courses' component={Courses} />
        <Route component = {NotFound} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;