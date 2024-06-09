import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  componentDidMount() {
    this.setState({ count: 10 });
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className="flex items-center justify-center">
        <p className="text-3xl mr-4"> {this.state.count}</p>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
