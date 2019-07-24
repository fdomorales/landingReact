import React, { Component } from 'react';
import Clock from './Clock';

class Access extends Component {

  

  render() {
    return (
      <div>
        <div className="row align-items-center">
          <Clock start_date={this.props.start_date} end_date={this.props.end_date} />
          <div className="col-12 col-sm-8 text-center">
            <a href={"https://vote.evoting.cl/election/"+this.props.election_id} id="vote_button" className="btn btn-primary btn-lg w-100 h-100"> 
              <h1 className="display-2">Votar</h1><small id="vote_label"></small>
            </a>
          </div>
        </div><hr/>
      </div>
      );
  }
}

export default Access;
