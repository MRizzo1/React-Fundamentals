import React, { Component } from "react";
import moment from "moment";

import { ButtonGenerator } from "./ButtonGenerator"
import { Toggle } from "./ThemeToggler"

import "./css/Home.css"

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme,
      setTheme: this.props.setTheme,
      message: "",
      textConsole: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handleButtonGeneration = this.handleButtonGeneration.bind(this);
    this.handleGeneratedButton = this.handleGeneratedButton.bind(this);
    this.handleSwitchTheme = this.handleSwitchTheme.bind(this);
  }

  static displayName = Home.name;

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSend(event) {
    this.setState({
      textConsole: moment().format("MM/D/YY h:mm:ss").toString() + " Message Sent: " + this.state.message + " \n\n" + this.state.textConsole,
      message: ""
    });
    event.preventDefault();
  }

  handleButtonGeneration(value) {
    this.setState({
      textConsole: moment().format("MM/D/YY h:mm:ss").toString() + " Button " + value + " added \n\n" + this.state.textConsole,
    });
  }

  handleGeneratedButton(value) {
    this.setState({
      textConsole: moment().format("MM/D/YY h:mm:ss").toString() + " Button " + value + " clicked \n\n" + this.state.textConsole,
    });
  }

  handleSwitchTheme() {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light",
    });
    this.state.theme === "light" ? this.state.setTheme("dark") : this.state.setTheme("light");
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <Toggle theme={this.state.theme} toggleTheme={() => {
            this.handleSwitchTheme();
            this.setState({
              textConsole: moment().format("MM/D/YY h:mm:ss").toString() + " Theme was set to " + (this.state.theme === "light" ? "Dark" : "Light") + " \n\n" + this.state.textConsole,
            });
          }} />
          <form onSubmit={this.handleSend}>
            <textarea className="messageArea" value={this.state.message} onChange={this.handleChange} />
            <input disabled={this.state.message === ""} className="submitButton" type="submit" value="Send Message" />
          </form>
          <ButtonGenerator onClickGenerateButton={this.handleButtonGeneration} onClickGeneratedButton={this.handleGeneratedButton} />
        </div>
        <div className="right"><span>{this.state.textConsole}</span></div>
      </div>
    );
  }
}
