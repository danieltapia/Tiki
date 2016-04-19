import React from 'react';

export default class NewListingContainer extends React.Component {
  render() {
    return (
      <div>

        <div className="new-listing-page">
          <div className="photos">
            <div className="upload-box"></div>
            <div className="upload-box"></div>
            <div className="upload-box"></div>
          </div>

          <div className="box no-padding">
            <div className="flex-box">
              <i className="material-icons md-dark md-inactive">title</i>
              <div className="flex-item">
                <input type="text" className="form-control" placeholder="¿Qué esta vendiendo?"/>
              </div>
            </div>

            <div className="flex-box">
              <i className="material-icons md-dark md-inactive">info_outline</i>
              <div className="flex-item">
                <textarea rows="3" className="form-control" placeholder="Describe más sobre lo que está vendiendo..."></textarea>
              </div>
            </div>
          </div>

          <h6 className="background-heading text-uppercase subtle-text">Detalles</h6>
          <div className="box no-padding">
            <div className="flex-box">
              <i className="material-icons md-dark md-inactive">apps</i>
              <div className="flex-item">
                <select className="form-control">
                  <option disabled selected className="placeholder">Elige una categoría</option>
                  <option>Autos y Vehículos</option>
                  <option>Bienes Raíces</option>
                  <option>Celulares y Accesorios</option>
                </select>
              </div>
              <i className="material-icons md-dark md-inactive">arrow_drop_down</i>
            </div>

            <div className="flex-box">
              <i className="material-icons md-dark md-inactive">place</i>
              <div className="flex-item">
                <select className="form-control">
                  <option>Elige una ciudad</option>
                  <option>Santa Cruz</option>
                  <option>La Paz</option>
                  <option>Oruro</option>
                </select>
              </div>
              <i className="material-icons md-dark md-inactive">arrow_drop_down</i>
            </div>

            <div className="flex-box">
              <i className="material-icons md-dark md-inactive">phone</i>
              <div className="flex-item">
                <input type="number" className="form-control" placeholder="Telefono"/>
              </div>
            </div>

            <div className="flex-box">
              <i className="material-icons md-dark md-inactive">local_offer</i>
              <div className="flex-item">
                <input type="number" className="form-control" placeholder="Precio"/>
              </div>
            </div>
          </div>

          <a href="#" className="btn btn-block btn-primary">Publicar</a>
        </div>
        
      </div>
    )
  }
}