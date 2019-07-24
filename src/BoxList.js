import React, { Component } from 'react';
import './BoxList.css';
import axios from "axios";

var dateFormat = require("dateformat");

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      election: null,
      loading: false
    };
  }

  componentDidMount() {
    this.loadElection(this.props.election_id);
  }

  loadElection = election_id => {
    this.setState({ loading: true }, () =>
      axios({
        method: "get",
        url: process.env.REACT_APP_BACKUP_URL +
                  "/" +
                  election_id +
                  "/header.json"
      })
        .then(response => {
          this.setState({ election: response.data, loading: false });
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
              axios({
                method: "get",
                url: process.env.REACT_APP_API_URL + "/election/" + election_id
                  
              })
                .then(response => {
                  this.setState({ election: response.data, loading: false });
                })
                .catch(error => {
                  this.setState({ loading: false });
                });

            } else {
              this.setState({ loading: false });
            }
          })
    );
  };

  render() {
    
    return (
          <div>
          {this.state.loading && <div class="spinner-border text-secondary" role="status"></div>}
          {this.state.election === null ? (
          <div className="row text-center">
            {!this.state.loading && (
              <div className="col">
                No pudimos encontrar la elección {this.props.election_id}
              </div>
            )}
          </div>
        ) : (
          <div className="BoxList">
            <div className="row text-center">
              <div className="col-11">
                <h5>{this.state.election.name}</h5>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-11">
                <p>Inicio: {dateFormat(this.state.election.configuration.start_date.$date, "dd '/' mm '/' yyyy")}<br/>
                Término: {dateFormat(this.state.election.configuration.end_date.$date, "dd '/' mm '/' yyyy")}</p>
              </div>
              <div></div>
            </div>
            <div className="row text-center">
              <div className="col-11"><a href={this.state.election.configuration.bulletin_url.replace("%s",this.props.election_id)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver Resultados</a></div>
            </div>
          </div>)}
          </div>
      );
  }
}

export default BoxList;
