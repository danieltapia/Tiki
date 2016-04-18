import React from 'react';

export default class ChatContainer extends React.Component {
  render() {
    return (
      <div>

        <div className="chat-page">
          <a className="sub-header flex-box navbar-fixed-top sub-header-chat">
            <img src="http://placehold.it/40x40" alt=""/>
            <div className="flex-item truncate-text">
              <div className="title">Listing title</div>
              <div className="price">$999,999,999.00</div>
            </div>

            <i className="material-icons md-36 md-dark md-inactive">chevron_right</i>
          </a>
          
          <div className="conversation-panel">
            
            <div className="message">
              <div className="bubble">Cras sit</div>
              <div className="bubble">Nulla vel metus scelerisque ante sollicitudin.</div>
            </div>

            <div className="message message-out">
              <div className="bubble">Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</div>
              <div className="bubble">Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</div>
              <div className="bubble">a cuanto lo deja su xbox ultimo?</div>
            </div>

            <div className="message">
              <div className="bubble">$350. nada menos</div>
            </div>



            <div className="block-compose navbar-fixed-bottom flex-box">
              <div className="flex-item">
                <input type="text" className="form-control" placeholder="Escriba su mensaje..."/>
              </div>

              <a href="#" className="send"><i className="material-icons">send</i></a>
            </div>
          </div>

        </div>

      </div>
    )
  }
}