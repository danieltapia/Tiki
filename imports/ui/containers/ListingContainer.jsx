import React from 'react';
import ListingDetail from '/imports/ui/components/listings/ListingDetail.jsx';

export default class ListingContainer extends React.Component {
  render() {
    var listing = {
      name: 'Vendo Espetacular Porsche Cayenne 2012',
      price: '34,200',
      description: 'VENDO HERMOSA BMW "X6" 2014 sacada de andar Motors, color gris, motor 3500cc, BITURBO, caja secuencial, interior blanco, asientos de cuero, asientos eléctricos, radio con pantalla, gps, mp3, AUX, USB, aros 20" originales llantas nuevas, garantía vigente, 30000 kilómetros, papeles al día, excelente estado, precio 77000$ charlable, ref: 70000000',
      created_at: new Date()
    };
    return (
      <div className="listing-page">
        <div className="container slim-container">

          <div className="row">
            <div className="col-md-8 col-xs-12">
              <div className="photo-slider">
                <div className="item">
                  <img src="http://placehold.it/800x600" alt=""/>
                </div>
              </div>

              <div className="price text-center">$us. {listing.price}</div>

              <div className="box title">
                <div className="name text-center">{listing.name}</div>
              </div>

              <h6 className="listing-heading text-uppercase subtle-text">Descripción</h6>
              <div className="box">
                <p>{listing.description}</p>
              </div>

              <h6 className="listing-heading text-uppercase subtle-text">Detalles</h6>
              <div className="box details no-padding">
                <div className="flex-box">
                  <div className="flex-item subtle-text"><i className="material-icons md-18">monetization_on</i> Ofertas hechas</div>
                  <div>3</div>
                </div>

                <div className="flex-box">
                  <div className="flex-item subtle-text"><i className="material-icons md-18">access_time</i> Actualizado</div>
                  <div>Hace 28 minutos</div>
                </div>

                <div className="flex-box">
                  <div className="flex-item subtle-text"><i className="material-icons md-18">place</i> Ciudad</div>
                  <div>Santa Cruz</div>
                </div>

                <div className="flex-box">
                  <div className="flex-item subtle-text"><i className="material-icons md-18">dashboard</i> Categoria</div>
                  <div>Autos y Vehículos</div>
                </div>
              </div>
            </div>


            <div className="col-md-4 col-xs-12">
              <h6 className="listing-heading text-uppercase subtle-text">Vendedor</h6>
              <div className="box flex-box seller-box">
                <img src="http://placehold.it/40x40" alt="" className="img-circle"/>

                <div className="flex-item">
                  <a href="#">Daniel T</a>
                  <div className="subtle-text">Online</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}