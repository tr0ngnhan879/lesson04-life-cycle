import React, { Component } from 'react';
import Content from './Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "Components Init",
      fullname:"Nhân"
    }
  }

  UNSAFE_componentWillMount() {
	console.log("ComponentWillMount");
  }


  componentDidMount() {
	console.log("ComponentDidMount");
  }

  updateState = ()=>{
	  this.setState({
		  component:"New State",
      fullname:"Trọng Nhân"
	  });
  }
  shouldComponentUpdate(nextProps, nextState) {
	  	console.log("shouldComponentUpdate : " + nextState.component);
		  return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
	  console.log("componentWillUpdate : " + nextState.component);
  }

  componentDidUpdate(prevProps, prevState) {
	  console.log("componentDidUpdate : " + prevState.component);
  }

  render() {
	  console.log("Render");
	  console.log(this.state.component);
    return (
      <div className="App">
        <Content name={this.state.fullname}></Content>
		<button onClick={()=> this.updateState()}>Click me</button>
      </div>
    );
  }
}

export default App;