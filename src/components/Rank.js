import React from 'react';
import './Rank.css'
import logo from './rankLogo.svg'

const rank=({rankForm}) =>{
  return (

    <div className="rankMain">

      <div className="title"> {/*두개 이상의 element는 무조건!!하나의 element로 감싸야 한다. */}
      Ranking
      </div>

      <div className="rankLogo-wrapper">
      <img src={logo} className="rankLogo" alt="logo" />
      </div>

      <section className="rankForm-wrapper">
      {rankForm}
      </section>

    </div>
  );
};
rank.defaultProps={

  name:'zomebie'
};
export default rank;
