import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.css';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      List:[]
    }
  }
// focusFunction() {
//   // Focus = Changes the background color of input to yellow
//   document.getElementById("textTodo").style.background = "yellow";
// }
updateInput(key, value){

this.setState({
  [key]:value
});
}
addItem(){
const newItem={
id:1+Math.random(),
value:this.state.newItem.slice()
};

const List=[...this.state.List];
List.push(newItem);

this.setState({
  List,
  newItem:""
})
//  var htmlContents = document.documentElement.innerHTML;
// localStorage.setItem('myBook', JSON.stringify(htmlContents ));  
// localStorage.getItem("myBook");
if((document.getElementById("textTodo").value)<=0){
  alert("Please enter something");
  value:List.pop(newItem)


}
}

deleteItem(id){
const List=[...this.state.List];
const updatedList=List.filter(item=>item.id!==id);
this.setState({List:updatedList});

}

  render() {
    return (
      
      <div className="App">

      <div>
         <div className="addIt"> Add an Item</div>
          <br/>
          <div id="centerEle">
          <input required type='text' id="textTodo" placeholder="type anything....."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem",e.target.value)}/>
          <button id='btnAdd'
          onClick={()=>this.addItem() }
          >
          Click Here
          </button>
          <br/>
          <ul>
          
          {this.state.List.map(item=>{
              return(
                <li key={item.id}>
                {item.value}
                <button id="cancelBtn" onClick={()=>this.deleteItem(item.id)}
                >X</button>
                </li>
              )
          })}
          </ul>
        </div>        
        
      </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
