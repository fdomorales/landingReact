import React, { Component } from 'react';

class Info extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    let tag = <div className="col text-center">REVISAR LA PARTICIPACIÓN</div>;
    if (this.props.condition === true){
      tag = <div className="col text-center h1">RESULTADOS</div>;
    }
    return (
      <div>
        <div className="row">
          <div className="col text-center">
            <h4>¿Quieres saber más sobre esta votación o dejar registro en libro de observaciones?</h4><br />
          </div>
        </div>
        <div className="row justify-content-center">
          
          <div className="col-6 text-center"><a href="https://bulletin.evoting.cl?id="><img src="imgs/revisa-la-participacion.png" height="100" width="100" className="img-fluid"/><br />
              {tag}</a></div>
          <div className="col-6 text-center"> <a href="https://ballot-box.evoting.cl/election_comments//new"><img src="imgs/registra-una-observacion.png" height="70" width="70" className="img-fluid"/><br />
              <div className="col text-center">REGISTRAR UNA OBSERVACIÓN EN EL LIBRO</div></a></div>
        </div><hr />
      </div>
      );
  }
}

export default Info;
