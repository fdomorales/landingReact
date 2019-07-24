import React, { Component } from 'react';
import BoxList from './BoxList';

class List extends Component {

  constructor(props){
    super(props);
    this.state={
      show: this.props.show
    }

  }

  operacion(){
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    let label = null;
    if (this.props.show){
      label = null;
    }else{
      label = <button className='btn btn-link' onClick={()=>this.operacion()}>Votaciones anteriores</button>;
    }
    return (

      <div><hr/><div className="row justify-content-center">
        {label}</div>
        <br />
        {this.state.show ?
          <div className="row justify-content-center">
          {this.props.elections.map(e =>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <BoxList election_id={e} />
          </div>
         )}
        </div>        
        : null }
        
      </div>
      );
  }
}

export default List;
