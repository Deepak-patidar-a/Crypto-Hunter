import React from 'react'
import {Container,Typography} from "@mui/material";
import Carousel from './Carousel';

function Banner() {
    return (
        <div style={{ backgroundImage: "url(./images/banner2.jpg)"}} className='banner'>
            <Container>
                <div className='tagline'>
                <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
                </div>
                <Carousel/>
            </Container>
        </div>   
    );
}

export default Banner
