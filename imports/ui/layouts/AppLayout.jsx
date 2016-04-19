import React from 'react';
import Header from '/imports/ui/layouts/Header.jsx'
import Navigation from '/imports/ui/layouts/Navigation.jsx'


export default class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <Header categorySlug={this.props.children ? this.props.children.props.routeParams.categorySlug : null} 
                listingSlug={this.props.children ? this.props.children.props.routeParams.listingSlug : null}
                chatSlug={this.props.children ? this.props.children.props.routeParams.chatSlug : null}
                newListing="Crear anuncio" />

        {this.props.children}

        
      </div>
    )
  }
}