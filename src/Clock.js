import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: {'days':0, 'hours':0, 'minutes':0, 'seconds':0},
      state: 'loading'
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  
  distance(time_date){
    var distance = time_date - new Date();
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);  
    return ({'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds});
  }
  tick() {
    var now = new Date();
    if (now< this.props.start_date){    
      this.setState({
        state: 'antes',
        distance: this.distance(this.props.start_date)
      });
      return;  
    }
    if (now< this.props.end_date){    
      this.setState({
        state: 'durante',
        distance: this.distance(this.props.end_date)
      });
      return;  
    }
    this.setState({
      state: 'finalizada'
    })
  }
  render() {
    let component = <span>{this.state.distance.days} días {this.state.distance.hours}:{this.state.distance.minutes}:{this.state.distance.seconds}</span>
    let tag;
     switch(this.state.state){
      case 'loading':
      tag = <div className="spinner-border text-secondary" role="status"></div>;
      component = <div className="spinner-border text-success" role="status"></div>;
      break;
      case 'antes':
      tag = <span>Empieza el {this.props.start_date.getDate()}/{this.props.start_date.getMonth()+1}/{this.props.start_date.getFullYear()} a las {this.props.start_date.getHours()} horas {this.props.start_date.getMinutes()} minutos.</span>;
      break;
      case 'durante': 
      tag = <span>Finaliza el {this.props.end_date.getDate()}/{this.props.end_date.getMonth()+1}/{this.props.end_date.getFullYear()} a las {this.props.end_date.getHours()} horas {this.props.end_date.getMinutes()} minutos.</span>;
      break;
      default:
      tag = <span>Finalizó el {this.props.end_date.getDate()}/{this.props.end_date.getMonth()+1}/{this.props.end_date.getFullYear()} a las {this.props.end_date.getHours()} horas {this.props.end_date.getMinutes()} minutos.</span>;
      component = <span>Finalizada!</span>
     }

    return (
      
      <React.Fragment>
        <div className="col-12 col-sm-4">
        <div className="row">
          <div className="col text-center">
               <span> {tag} </span>
          </div>
        </div>
          <div className="row">
            <div className="col">
              <div id="counter" className="alert alert-success lead text-center">{component}</div>
            </div>
          </div>
        </div>

      </React.Fragment>
        
    );
  }
}
export default Clock;