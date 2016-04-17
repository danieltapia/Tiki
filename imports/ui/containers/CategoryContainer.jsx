import React from 'react';
import Navigation from '/imports/ui/layouts/Navigation.jsx';
import ListingFeed from '/imports/ui/components/listings/ListingFeed.jsx';

export default class CategoryContainer extends React.Component {
  render() {
    return (
      <div>

        <div className="category-page">
          <div className="sub-header flex-box navbar-fixed-top">
            <div className="flex-item listing-count subtle-text truncate-text">3172 anuncios encontrados</div>
            <a href="#" className="filters"><i className="material-icons">tune</i><strong>Filtros</strong></a>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-3 visible-lg">
                <div className="box">hi</div>
              </div>

              <div className="col-lg-9 content-column">
                <div className="row card-row listing-feed">
                  <ListingFeed category="all" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Navigation />
      </div>
    )
  }
}