import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe src="https://www.youtube.com/embed//BlnYU7QGLoo?rel=0&amp;showinfo=0" className="embed-responsive-item" title="pasos para votar"/>
            </div>
          </div>
        </div><br />
        <div className="row justify-content-center text-center">
        <div className="col-12">
          <div  className="alert-info">Votaciones realizadas con tecnología de <a href="https://evoting.cl" >EVoting Chile</a></div>
        </div>
      </div><br />
      </div>
      );
  }
}

export default Footer;
