import React from 'react';
import ListingDetail from '/imports/ui/components/listings/ListingDetail.jsx';

export default class ListingContainer extends React.Component {
  render() {
    var listing = {
      name: 'Vendo Espetacular Porsche Cayenne 2012',
      price: '999,999,999.00',
      description: 'Absolutely like new black tan range rover supercharged long wheelbase model need to sell asap $115,989 over $10k under retail',
      created_at: new Date()
    };
    return (
      <div className="listing-page">
        <div className="container slim-container">

          <div className="row">
            <div className="col-md-8 col-xs-12">
              <div className="photo-slider">
                <div className="item">
                  <img src="http://www.tumomo.com/files/551079_1.jpg" alt=""/>
                </div>
              </div>

              <div className="box title">
                <div className="name">{listing.name}</div>
                <div className="price">$us. {listing.price}</div>
              </div>
              
              <h6 className="listing-heading text-uppercase subtle-text">Descripción</h6>
              <div className="box description">
                <p>{listing.description}</p>
              </div>
              
              <h6 className="listing-heading text-uppercase subtle-text">Detalles</h6>
              <div className="box details no-padding">
                <div className="row no-margin">
                  <div className="col-xs-4"><label className="no-margin subtle-text">Ciudad</label></div>
                  <div className="col-xs-8">Santa Cruz</div>
                </div>

                <div className="row no-margin">
                  <div className="col-xs-4"><label className="no-margin subtle-text">Categoria</label></div>
                  <div className="col-xs-8"><a href="#">Celulares y Accesorios</a></div>
                </div>

                <div className="row no-margin">
                  <div className="col-xs-4"><label className="no-margin subtle-text">Desde</label></div>
                  <div className="col-xs-8">12/05/2016</div>
                </div>
              </div>
            </div>


            <div className="col-md-4 col-xs-12">
              <h6 className="listing-heading text-uppercase subtle-text">Vendedor</h6>
              <div className="box flex-box seller-box">
                <div className="avatar">
                  <img src="http://lorempixel.com/40/40" alt="" className="img-circle"/>
                  <div className="status-orb"></div>
                </div>

                <div className="flex-item">
                  <a href="#" className="username">Daniel T.</a>
                  <div className="phone">
                    <i className="material-icons md-18 subtle-text active-star">star</i>
                    <i className="material-icons md-18 subtle-text active-star">star</i>
                    <i className="material-icons md-18 subtle-text active-star">star</i>
                    <i className="material-icons md-18 subtle-text active-star">star</i>
                    <i className="material-icons md-18 subtle-text">star_outline</i> (4)
                  </div>
                </div>
              </div>

              <h6 className="listing-heading text-uppercase subtle-text">Anuncios Destacados</h6>
              <div className="row no-margin">
                <div className="col-xs-6"><div className="box"></div></div>
                <div className="col-xs-6"><div className="box"></div></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}