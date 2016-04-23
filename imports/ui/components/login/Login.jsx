import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        
        <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Launch demo modal</button>

        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="vertical-alignment-helper">
            <div className="modal-dialog vertical-align-center">
              <div className="modal-content">

                <div className="modal-body text-center">
                  <h4>Inicia sesión</h4>
                  
                  <p className="subtle-text">Oops! Necesitas iniciar sesión para <br/> poder utilizar todos los servicios que brinda Tiki.</p>
                  
                  <a href="#" className="btn btn-block btn-facebook">Conéctate con Facebook</a>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}