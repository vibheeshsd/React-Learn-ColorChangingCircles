import React from "react";
import './styles.css';
class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {first : "red",second : "blue",third : "green", fourth:"yellow", five:"orange"}
      
    }
    clickChanger=(e)=>{
      var vik = Object.values(this.state)
      console.log(e);
      console.log(vik)
      var curr = e?.target?.className
      var temp = vik[0]
      var temp2 = 0
      var target_index = vik.indexOf(curr)
      vik[0] = curr
      for (var i = 1;i<target_index+1;i++){
          temp2 = vik[i]
          vik[i] = temp
          temp = temp2  
      }
      this.setState({first : vik[0],second : vik[1],third : vik[2],fourth:vik[3],five:vik[4]})
    }
    render(){
        return(
          
          <div className= "boxeh">
            <span className={this.state.first} onClick={this.clickChanger}></span>
            <span className={this.state.second}onClick={this.clickChanger}></span>
            <span className={this.state.third}onClick={this.clickChanger}></span>
            <span className={this.state.fourth}onClick={this.clickChanger}></span>
            <span className={this.state.five}onClick={this.clickChanger}></span>
          </div>
          
        )
    }
    
    

}
export default App ;



// arr = [1,2,3,4,5] 3
//curr = 3
//temp = 1
//arr[0] = 3
//arr = [3,2,3,4,5] 1
//temp2 = arr[1] = 2
//arr[1] = temp = 1
//temp = temp2 = 2
//arr = [3,1,3,4,5] 2
