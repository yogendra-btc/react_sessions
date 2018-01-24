import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Table, Label, Form, FormControl, Button} from 'react-bootstrap';

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value1:0,value2:0,result:0};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCalc = this.handleCalc.bind(this)
  }

  handleSubmit(){
    this.setState({result:parseInt(this.state.value1)+parseInt(this.state.value2)})
  }

  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
    // this.setState({result:e.target.value})
  }

  handleCalc(e){
    if(e.target.name == '+'){
      this.setState({result:parseFloat(this.state.result)+parseFloat(this.state.value1),value1:0})
    }
    else if(e.target.name == '-'){
      this.setState({result:parseFloat(this.state.result)-parseFloat(this.state.value1),value1:0})
    }
    else if(e.target.name == '*'){
      this.setState({result:parseFloat(this.state.result)*parseFloat(this.state.value1),value1:0})
    }
    else if(e.target.name == '/'){
      this.setState({result:parseFloat(this.state.result)/parseFloat(this.state.value1),value1:0})
    }
  }

  render() {
    return (
      <div>
        <Form  inline>
                <FormControl
                    type="text"
                    placeholder="Enter Number"
                    onChange={this.handleChange}
                    name="value1"
                    value={this.state.value1}
              />{" "}<br/><br/>
                <Button onClick={this.handleCalc} name="+" bsStyle="primary">+</Button>
                <Button onClick={this.handleCalc} name="-" bsStyle="primary">-</Button>
                <Button onClick={this.handleCalc} name="*" bsStyle="primary">*</Button>
                <Button onClick={this.handleCalc} name="/" bsStyle="primary">/</Button><br />
                Result is: <Label>{this.state.result}</Label>
          </Form>
      </div>
    )
  }
}


// ========================================
const root = document.querySelector('#root')
ReactDOM.render(<App />, root)
