import React, { Component, createRef } from "react";

export default class ClassRef extends Component {
  constructor(props) {
    super(props);

    this.eleRef = createRef();
    this.inputRef = createRef();
  }
  focus() {
    console.log("this.eleRef", this.eleRef);
    console.log("this.inputRef", this.inputRef);
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <div id="this_is" ref={this.eleRef}>eleRef</div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.focus.bind(this)}>focus</button>
      </div>
    );
  }
}
