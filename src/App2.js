import React, { Component } from 'react';
import Rank from './components/Rank.js';
import RankForm from'./components/RankForm';

class App2 extends Component {

  render() {
    return (

      <Rank rankForm={<RankForm/>}>

      </Rank>


    );
  }
}

export default App2;
