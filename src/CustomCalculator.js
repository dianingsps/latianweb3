import React, { Component } from 'react';

class CustomCalculator extends Component {
  constructor(props){
    super(props);
    this.state = {
        color : 'Merah',
        img: 'Merah.jpg',
        nilai1 : null,
        nilai2: null,
        operator: null,
        hasil: null,
        name: 'Calculator',
      };
  }
  handleSubmit(e){
    e.preventDefault();
    
    const nilai1 = parseInt(this.refs.nilai1.value);
    const nilai2 = parseInt(this.refs.nilai2.value);
    const operator = this.refs.operator.value;
    
    var hasil;
    switch(operator){
        case '+': 
          hasil = nilai1 + nilai2;
          break;
        case '-':
          hasil = nilai1 - nilai2;
          break;
        case '*':
          hasil = nilai1 * nilai2;
          break;
        case '/':
        hasil = nilai1 / nilai2;
          break;
    }
    this.setState({nilai1, nilai2, operator, hasil});
    
    this.refs.nilai1.value = null;
    this.refs.nilai2.value = null;
}

renderHasil(){
    const {nilai1, nilai2, operator, hasil} = this.state;
    if(this.state.hasil){
        return (
          <div>
              <br />
              <p className="alert alert-success">
              {"Hasilnya adalah "+hasil}
              </p>
          </div>	
    );
    }
  }

  render() {
    return (
        <div>
        <span className={"selected "+this.state.color}>{this.state.name}</span>
         <br></br>
         <br></br>
       <form onSubmit={this.handleSubmit.bind(this)}>
       <input type="number" ref="nilai1"></input>
             <select ref="operator" className="form-control">
               <option value="+">+</option>
               <option value="-">-</option>
               <option value="*">*</option>
               <option value="/">/</option>
             </select>
       <input type="number" ref="nilai2"></input> =...
       <br></br>
       <br></br>
       <button className="btn btn-primary">Count Me</button>
       </form>
       {this.renderHasil()}
     </div>
    );
  }
}

export default CustomCalculator;