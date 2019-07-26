import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Access from './Access';
import Steps from './Steps';
import Help from './Help';
import Info from './Info';
import Footer from './Footer';
import List from './List';
import StepsSMSregistered from './StepsSMSR';
import StepsSMSunregistered from './StepsSMSU';
import StepsSMSQuestions from './StepsSMSQ';
import StepsQuestions from './StepsQuestions';
import StepsDistricts from './StepsDistrict';
import StepsDistSMSregistered from './StepsDistSMSR';
import StepsDistSMSunregistered from './StepsDistSMSU';
import StepsDistSMSQuestions from './StepsDistSMSQ';
import StepsDistQuestions from './StepsDistQuestions';
import StepsDistRut from './StepsDistRut';
import StepsDistRutSMSreg from './StepsDistRutSMSR';
import StepsDistRutSMSunreg from './StepsDistRutSMSU';
import StepsDistRutSMSQuestion from './StepsDistRutSMSQ';
import StepsDistRutQuestions from './StepsDistRutQuestions';
import Documents from './Documents';

class App extends Component {

    state = {
      currentElection: 'vxbpsGwV',
      pastElections: ['0npdJZZk','1d2v5qUX','aIOVUYry'],
      start_date: new Date("2019-07-25T12:00:00Z"),
      end_date: new Date("2019-07-06T22:31:00Z"),
      autentication: 3,
      documents: false,
      logo: "",
      resultados: false,
      datos:  {config:[]}
     }
  
  componentDidMount() {
    this.intervalID = setInterval(this.fetchData, 1000);
    this.fetchData();
  }

  fetchData = async () => {
    try{
      const response = await fetch(`https://public-api.evoting.cl/api/election/${this.state.currentElection}`);
      const data = await response.json();
      this.setState({datos: data, logo:data.configuration.logo_url});
      if (data.state === "finished"){
        this.setState({
          resultados: true
        });
      }
    }catch(error){

    }
    
  }


  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

 


  render() {
    let steps;
    switch(this.state.autentication){
      case 1 : 
      steps = <Steps/>;
      break;
      case 2 : 
      steps = <StepsSMSregistered/>;
      break;
      case 3 : 
      steps = <StepsSMSunregistered/>;
      break;
      case 4 : 
      steps = <StepsSMSQuestions/>;
      break;
      case 5 : 
      steps = <StepsQuestions/>;
      break;
      case 6 : 
      steps = <StepsDistricts/>;
      break;
      case 7 : 
      steps = <StepsDistSMSregistered/>;
      break;
      case 8 : 
      steps = <StepsDistSMSunregistered/>;
      break;
      case 9 : 
      steps = <StepsDistSMSQuestions/>;
      break;
      case 10 : 
      steps = <StepsDistQuestions/>;
      break;
      case 11 : 
      steps = <StepsDistRut/>;
      break;
      case 12 : 
      steps = <StepsDistRutSMSreg/>;
      break;
      case 13 : 
      steps = <StepsDistRutSMSunreg/>;
      break;
      case 14 : 
      steps = <StepsDistRutSMSQuestion/>;
      break;
      case 15 : 
      steps = <StepsDistRutQuestions/>;
      break;
      default: return null;
    }
    let doc = null;
    if (this.state.documents){
      doc = <Documents/>
    }

    
    if (this.state.currentElection){
      return (
      <div className="container">
        <Header organizacion={this.state.datos.organization_name}
        titulo={this.state.datos.name} 
        logo={this.state.logo} />
        <Access election_id={this.state.currentElection} start_date={this.state.start_date} end_date={this.state.end_date} />
        {doc}
        {steps}
        <Info condition={this.state.resultados}/>
        <Footer/>
        <List elections={this.state.pastElections}  />
        
      </div>
    );
    }
    return (

      <div className="container">
        <Header organizacion="Sintec"
        logo="https://s3.amazonaws.com/evoting/SINTEC/Logo.png"/>
        <List elections={this.state.pastElections} show="true" />
        <Help />
        <Footer/>
      </div>
    );
  }
}

export default App;