import React, { Component } from "react";

class Row extends Component {
  // state = {
  //   title: "This is a row component",
  // }; //to store data

  // constructor() {
  //   super();
  //   console.log("Constructor");
  //   this.state = {
  //     title: "This is a row component",
  //   }; //to store data
  // }

  // componentDidMount() {
  //   console.log("Did Mount");
  // }

  // componentDidUpdate(){

  // }
  render() {
    // console.log("Mounting..");
    // console.log(this.props.children);
    return (
      <div className={`flex ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
export default Row;
