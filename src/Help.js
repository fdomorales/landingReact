import React, { Component } from 'react';

class Help extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col text-center">
            <h2>¿Tienes Dudas o Necesitas Ayuda?</h2>
            <h6>Contacta a nuestro equipo de Soporte entre <b>9:00 y 18:00 hrs.</b></h6>
          </div>
        </div><br />
        <div className="row justify-content-center">
          <div className="col-6 col-sm-4">
            <div className="row justify-content-center h-50">
              <div className="col-8 col-sm-4 text-center"><img src="imgs/telefono2.png" height="50" width="50" className="img-fluid"/></div>
            </div>
            <div className="row align-items-end h-50">
              <div className="col text-center">
                <p className="text-info">+56 2 2666 5904</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4">
            <div className="row justify-content-center h-50">
              <div className="col-8 col-sm-4 text-center"><img src="imgs/email3.png" height="100" width="100" className="img-fluid"/></div>
            </div>
            <div className="row align-items-end h-50">
              <div className="col text-center"> 
                <p className="text-info">soporte@evoting.cl</p>
              </div>
            </div>
          </div>
        </div><hr />
      </div>
      );
  }
}

export default Help;
