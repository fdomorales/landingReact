import React, { Component } from 'react';

class Header extends Component {

    render() {
      return (
        <div>
        <div align="center" className="row justify-content-center">
          <div className="col-sm-8 col-md-7 col-lg-4 col-xl-4">
            <img src={this.props.logo} alt="" className="img-fluid"/>
          </div> 
        </div>
        <div className="row top-buffer justify-content-center">
          <div className="col">
            <h1 className="text-center">{this.props.titulo}</h1>
          <h4 className="text-center">{this.props.organizacion}</h4>
          </div>
        </div>
      </div>
        );
    }
}

export default Header;