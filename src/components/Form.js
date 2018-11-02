import React from 'react';
import './Form.css';


class Form extends React.Component{

state = {


  hour:new Date().getHours(),
  minute:new Date().getMinutes(),
  position:[],
  result:''


}

getResult=()=>{

  if(this.state.hour>=9 && this.state.minute>=1){

    this.setState({

        result:((1000+(100*this.state.minute))*4)+"원"
    })

  }



}
  render(){

  return (

    <div className="total">

      <form>

       <div className="radio">
         <label>
           <input type="checkbox" value="option1" />
            &nbsp;반장
         </label>
       </div>
       <div className="radio">
         <label>
           <input type="checkbox" value="option2" />
            &nbsp;팀장
         </label>
       </div>
       <div className="radio">
         <label>
           <input type="checkbox" value="option3" />
           &nbsp;부팀
         </label>
       </div>
       <div className="radio">
         <label>
           <input type="checkbox" value="option3" />
           &nbsp;팀원
         </label>
       </div>
     </form>


      <div className="create-button" onClick={this.getResult}>
        How Much?
      </div>


<input type="text" className="result" value={this.state.result}/>



    </div>
  );
}

} // 함수형 컴포넌트의 끝


export default Form;
