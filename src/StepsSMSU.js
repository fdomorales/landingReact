import React, { Component } from 'react';

class StepsSMSunregistered extends Component {

  render() {
    return (
      <div>
        <div className="row">
        <div className="col text-center">
          <h2>¿Cómo se vota?</h2>
        </div>
      </div><br/>
      <div className="row justify-content-center">
        <div className="col-4 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/1.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/SMSNoRegistrados/paso1.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"> <br/>
              <h6>Marque sus preferencias y cierre el voto</h6>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/2.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/SMSNoRegistrados/paso2.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"> <br/>
              <h6>Confirme sus respuestas</h6>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/3.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/SMSNoRegistrados/paso3.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"><br/>
              <h6>Ingrese su RUN, Nº de Serie o Nº de Documento y Teléfono Celular</h6>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/4.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/SMSNoRegistrados/paso4.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"><br/>
              <h6>Deposite el voto ingresando el código que llegó como SMS a su celular</h6>
            </div>
          </div>
        </div>
      </div>
        <hr />
      </div>
      );
  }
}

export default StepsSMSunregistered;
