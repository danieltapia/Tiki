import React from 'react';

export default class AppLayout extends React.Component {
  render() {
    return (
      <div>

        <div className="mobile-nav navbar-fixed-top">
          <div className="nav-inner">
            <div className="nav-left">
              <a href="#" className="nav-brand">Tiki</a>
            </div>
          </div>
        </div>


        <div className="listing-feed">
          <div className="card">
            <div className="card-seller">
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object img-circle" src="http://placehold.it/32x32" alt="..." />
                  </a>
                </div>
                <div className="media-body">
                  <div className="row">
                    <div className="col-xs-6">
                      <a href="#" className="username">Daniel T.</a>
                    </div>

                    <div className="col-xs-6 text-right">
                      <div className="timestamp small-text subtle-text">28m</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-thumbnail">
              <img src="http://placehold.it/680x460" alt="" className="img-responsive"/>
              <div className="price">$us. 17,300</div>
            </div>

            <div className="card-content">
              <a href="#" className="title">Toyota Sequoia Platinum Dorado 2010</a>
              <div className="city">En Santa Cruz</div>
            </div>
          </div>

          <div className="card">
            <div className="card-seller">
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object img-circle" src="http://placehold.it/32x32" alt="..." />
                  </a>
                </div>
                <div className="media-body">
                  <div className="username">Daniel T.</div>
                </div>
              </div>
            </div>

            <div className="card-thumbnail">
              <img src="http://placehold.it/680x460" alt="" className="img-responsive"/>
              <div className="price">$us. 17,300</div>
            </div>

            <div className="card-content">
              <div className="title">Toyota Sequoia Platinum Dorado 2010</div>
              <div className="city">En Santa Cruz</div>
              <div className="timestamp small-text subtle-text">Hace 28m</div>
            </div>
          </div>

          <div className="card">
            <div className="card-seller">
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object img-circle" src="http://placehold.it/32x32" alt="..." />
                  </a>
                </div>
                <div className="media-body">
                  <div className="username">Daniel T.</div>
                </div>
              </div>
            </div>

            <div className="card-thumbnail">
              <img src="http://placehold.it/680x460" alt="" className="img-responsive"/>
              <div className="price">$us. 17,300</div>
            </div>

            <div className="card-content">
              <div className="title">Toyota Sequoia Platinum Dorado 2010</div>
              <div className="city">En Santa Cruz</div>
              <div className="timestamp small-text subtle-text">Hace 28m</div>
            </div>
          </div>

          <div className="card">
            <div className="card-seller">
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object img-circle" src="http://placehold.it/32x32" alt="..." />
                  </a>
                </div>
                <div className="media-body">
                  <div className="username">Daniel T.</div>
                </div>
              </div>
            </div>

            <div className="card-thumbnail">
              <img src="http://placehold.it/680x460" alt="" className="img-responsive"/>
              <div className="price">$us. 17,300</div>
            </div>

            <div className="card-content">
              <div className="title">Toyota Sequoia Platinum Dorado 2010</div>
              <div className="city">En Santa Cruz</div>
              <div className="timestamp small-text subtle-text">Hace 28m</div>
            </div>
          </div>

          <div className="card">
            <div className="card-seller">
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object img-circle" src="http://placehold.it/32x32" alt="..." />
                  </a>
                </div>
                <div className="media-body">
                  <div className="username">Daniel T.</div>
                </div>
              </div>
            </div>

            <div className="card-thumbnail">
              <img src="http://placehold.it/680x460" alt="" className="img-responsive"/>
              <div className="price">$us. 17,300</div>
            </div>

            <div className="card-content">
              <div className="title">Toyota Sequoia Platinum Dorado 2010</div>
              <div className="city">En Santa Cruz</div>
              <div className="timestamp small-text subtle-text">Hace 28m</div>
            </div>
          </div>
        </div>


        <div className="bottom-nav navbar-fixed-bottom text-center">
          <a href="#" className="bottom-nav-item current"><i className="material-icons">home</i></a>
          <a href="#" className="bottom-nav-item"><i className="material-icons">dashboard</i></a>
          <a href="#" className="bottom-nav-item create-listing"><i className="material-icons md-light">camera_alt</i></a>
          <a href="#" className="bottom-nav-item"><i className="material-icons">notifications</i></a>
          <a href="#" className="bottom-nav-item"><i className="material-icons">person</i></a>
        </div>

      </div>
    )
  }
}