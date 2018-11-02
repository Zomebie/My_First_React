import React, { Component } from 'react';
import Tem from './components/Tem';
import Form from './components/Form';

/* webpack을 쓰기에 가능한 작업*/


class App extends Component {

  render() {
    return (

      <Tem form={<Form/>}> {/*JSX 문법*/}

      </Tem>


    );
  }
}

export default App;
