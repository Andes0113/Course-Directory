import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';
import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/core`}>Core</NavLink></li>
        <li><NavLink to={`${match.url}/elective`}>Elective</NavLink></li>
        <li><NavLink to={`${match.url}/accelerated`}>Accelerated</NavLink></li>
      </ul>
    </div>
    
    {}
    <Route exact path={match.path} render={() => <Redirect to={`${match.path}/core`} />} />
    <Route path={`${match.path}/core`} render={()=> <CourseContainer data = {HTMLCourses} />} />
    <Route path={`${match.path}/elective`} render={()=> <CourseContainer data = {CSSCourses} />} />
    <Route path={`${match.path}/accelerated`} render={()=> <CourseContainer data = {JSCourses} />} />
  </div>
);

export default Courses;