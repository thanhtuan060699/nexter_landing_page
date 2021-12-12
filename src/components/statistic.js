import React from 'react';
import { Image as Img } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';

const data = [
  {
    id: 1,
    title: 'Satisfaction',
    value: '100%'
  },
  {
    id: 2,
    title: 'Happy Users',
    value: '120K',
  },
  {
    id: 3,
    title: 'Downloads',
    value: '125k+',
  },
];

export default function Statistic() {
  return (
    <section className="statistic-section">
     <Container >
        <div className="statistic-title">
          Trusted by English learners from 80 countries
        </div>
        <div className="statistic-text">
          With English, the door to the world is a lot wider
        </div>
        <div className="statistic">
          {
            data.map((item)=>(
              <div style={{ marginBottom : "20px"}} key={item.id}>
                <h3 style={{ fontSize: "28px", fontWeight: "800", margin:"0"}}><span>{item.value}</span></h3>
                <p style={{ fontSize: "15px", fontWeight: "500", margin:"0"}}>{item.title}</p>
              </div>
            ))
          }
        </div>
     </Container>
    </section>
   );
}

