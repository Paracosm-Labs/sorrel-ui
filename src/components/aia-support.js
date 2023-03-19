import React from 'react';
import JesAIA from '../img/jes-aia.jpg';
import { Card, Button, Badge } from 'react-bootstrap';

const AIASupport = () => {
  const [showChat, setShowChat] = React.useState(false);

  const handleShowChat = () => {
    setShowChat(true);
  };

  const handleHideChat = () => {
    setShowChat(false);
  };

  return (
    <>
      {!showChat && (
        <div className="position-fixed" style={{ bottom: '15px', right: '15px' }}>
          <Button variant="outline-secondary" size="sm" onClick={handleShowChat}>
            <img src={JesAIA}
              height="50"
              className="rounded-circle"
              alt="Jes AIA Concierge"
            />&nbsp;Help
          </Button>
        </div>
      )}
      {showChat && (
        <Card className="position-fixed" style={{ bottom: '15px', right: '15px', width: '250px' }}>
          <Card.Body>
            <Card.Title>Sorrel Concierge</Card.Title>
            <Card.Text>
              <img src={JesAIA}
                height="80"
                className="rounded-circle d-flex m-auto"
                alt="Jes AIA Concierge"
              /> <br/>
              Hi I'm Jes. Thank you for using Sorrel! How may I help you today?
            </Card.Text>
            <Button variant="secondary" onClick={handleHideChat}>Close</Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default AIASupport;