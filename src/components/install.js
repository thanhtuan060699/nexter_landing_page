import React from 'react';
import { Image as Img } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faApple, faGooglePlay} from '@fortawesome/free-brands-svg-icons'

export default function Install() {
  return (
    <section className="install-section" id="install">
     <Container >
        <h2 style={{lineHeight: "50px",fontSize: "38px",fontWeight: "700"}}>
          Install Nexter and Start Using
        </h2>
        <p>
        It's free, easy and fun, what more are you waiting for.
        </p>
        <div>
          <a className="install-button-app" style={{marginRight : "10px"}}>
            <FontAwesomeIcon icon={faApple}/> App Store
          </a>
          <a className="install-button-google">
            <FontAwesomeIcon icon={faGooglePlay}/> Google Play
          </a>
        </div>
     </Container>
    </section>
   );
}

