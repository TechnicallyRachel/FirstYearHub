/*
  Write JavaScript/React code here and press Ctrl+Enter to execute.

  Try: mountNode.innerHTML = 'Hello World!';
   Or: ReactDOM.render(<h2>Hello React!</h2>, mountNode);
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class MediumNotice extends React.Component {
    render() {
      return (

<div className="body d-flex flex-column overflow-hidden">
  <div className="body py-1">
    <div className="container sticky-top">
      {/* A JSX comment */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline">
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <button className="btn btn-primary btn-lg"><i className="fa fa-home"></i></button><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar11">
            <ul className="navbar-nav mr-auto" style="color:white">
              <li className="nav-item"> <a class="nav-link" href="https://www.wwu.edu/">WWU Main</a> </li>
              <li className="nav-item"> <a className="nav-link" href="https://mywestern.wwu.edu/mywestern">myWestern</a> </li>
              <li className="nav-item"> <a className="nav-link" href="https://www.bookstore.wwu.edu/" contenteditable="true">Bookstore</a></li>
              <li className="nav-item"> <a className="nav-link" href="https://www.wwu.edu/sites/d8prod.wwu.edu/files/2018-12/campusmap.pdf">Map</a></li>
              <li className="nav-item"> <a className="nav-link" href="https://atus.wwu.edu/services">Tech Support</a> </li>
              <li className="nav-item"> <a className="nav-link" href="https://calendar.wwu.edu/">Calender</a> </li>
            </ul>
          </div>
          </nav>
          </div>
      </div>
    </div>
    <div class="body py-0" style="text-shadow: black 2px 2px 4px;"></div>
</div>
);
}
}

ReactDOM.render(<MediumNotice source="react-demo" />, mountNode);