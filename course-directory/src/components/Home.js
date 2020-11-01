import React, { Component } from 'react';
class Home extends Component {    
  handleSubmit = (e) => {
    e.preventDefault();
      let teacherName = this.name.value;
      let teacherTopic = this.topic.value;
      let path = `teachers/${teacherTopic}/${teacherName}`
      this.props.history.push(path);
  }
  render() {
    return (
      <div className="main-content home">
        <h2>Front End Course Directory</h2>
        <p>This directory is a practice project for a staff page for <a href="https://www.communityschoolnaples.org/">Community School of Naples</a>, specifically for the Science Department</p>
        <p>This page uses <a href = "https://reactjs.org/">Facebook's React.js Javascript Library</a> to create a sample course directory for CSN's science department, including teachers and courses offered.</p>
        <p>Images used are either sourced from the internet or the school website. Quality of images may suffer due to school website's image compression</p>
        <hr />
      </div>
    );
  }
}

export default Home;