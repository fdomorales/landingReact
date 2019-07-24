import React, { Component } from 'react';

class StepsQuestions extends Component {

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
            <div className="col-8"><img src="imgs/Normal/paso1.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"> <br/>
              <h6>Marca tus preferencias y cierra el voto</h6>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/2.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/Normal/paso2.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"> <br/>
              <h6>Confirma tus respuestas</h6>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/3.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/Preguntas/runserial.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"> <br/>
              <h6>Ingrese su rut y número de serie o número de documento para obtener desafío</h6>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-2 p-1 m-1 border">
          <div className="row justify-content-center">
            <div className="col-3 col-sm-5 col-lg-3"><img src="imgs/4.png" className="img-fluid"/></div>
          </div><br/>
          <div className="row justify-content-center">
            <div className="col-8"><img src="imgs/Preguntas/AUTENTICAR.png" className="img-fluid"/></div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-center"> <br/>
              <h6>Deposite el voto respondiendo correctamente las 4 preguntas personales	</h6>
            </div>
          </div>
        </div>
      </div>
        <hr />
      </div>
      );
  }
}

export default StepsQuestions;
