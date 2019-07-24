import React, { Component } from 'react';

class StepsDistSMSregistered extends Component {

  render() {
    return (
      <div>
        <div className="row">
        <div className="col text-center">
          <h2>¿Cómo se vota?</h2>
        </div>
      </div><br/>
      <div className="row justify-content-center">
        <div className="col-5 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/1.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/Distrito/elegir.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"> <br/>
              <h6>Seleccione su distrito</h6>
            </div>
          </div>
        </div>
        <div className="col-5 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/2.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/SMSRegistrados/paso1.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"> <br/>
              <h6>Marca tus preferencias y cierra el voto</h6>
            </div>
          </div>
        </div>
        <div className="col-5 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/3.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/SMSRegistrados/paso2.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"> <br/>
              <h6>Confirma tus respuestas</h6>
            </div>
          </div>
        </div>
        <div className="col-5 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/4.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/SMSRegistrados/paso3.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"> <br/>
              <h6>Ingresa los datos de tu cédula de identidad (tenla a mano)</h6>
            </div>
          </div>
        </div>
        <div className="col-5 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/5.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/SMSRegistrados/paso4.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"> <br/>
              <h6>Deposita el voto ingresando el código que te enviaremos por SMS a tu celular</h6>
            </div>
          </div>
        </div>
      </div>
        <hr />
      </div>
      );
  }
}

export default StepsDistSMSregistered;
