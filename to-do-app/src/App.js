import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
  }
  handleChange = e => { }
  handleAdd = e => { }
  markAsCompleted = id => { }
  deleteCompleted = id => { }
  
  render() {
    return (

      <div className="container">
        <div className="col-md-12 offset-2">

          <h3 className="apptitle">MY TO DO LIST</h3>
          <form className="row">
            <div className="col-md-3">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <button className="btn btn-primary">{"Add #" + (this.state.items.length + 1)}</button>
            </div>
          </form>
          <br />

          <div className="row">
            <div className="col-md-3">
              <ul className="todolist">
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

