import { Grid, CardContent, Box, Typography, Card, Container } from '@mui/joy';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Rating from '@mui/material/Rating';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// import { Grid } from '@mui/joy';
// import { Grid } from '@mui/joy';
// import Grid from '@mui/material/Grid';
function CardCom({ data, addToCart,removeToCart }) {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid lg={12} md={12}>
            <Carousel style={{ width: "100%", height: "50px", position: "relative", top: "12px" }}>
              <div>
                <img style={{ width: "100%" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/revised/skincare-PC_3000_1200w._CB561095734_.jpg" alt="Slide 1" />
              </div>
              <div>
                <img style={{ width: "100%" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/hsbcunrec/WA_WW_2x._CB580708889_.jpg" alt="Slide 2" />
              </div>
              <div>
                <img style={{ width: "100%" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/March/unrec/All/HSBC/3000pc._CB580474950_.jpg" alt="Slide 3" />
              </div>
              <div>
                <img style={{ width: "100%" }} src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg'></img>
              </div>
              <div>
                <img style={{ width: "100%" }} src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/SiddMiniTV/3000x1200_V12._CB561296450_.jpg'></img>
              </div>
            </Carousel>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">

        <Grid container spacing={4}>
          {data.map((item) => (
            <>
              {/* <Card> */}
              <Grid lg={3} sm={6} md={4} xs={12}>
                <Card>
                  <img src={item.image} style={{ width: "100%", height: "150px" }}></img>
                  <Rating name="customized-10" defaultValue={2} max={item.rating} />
                  <Rating name="size-small" defaultValue={item.rating} precision={item.rating} size="small" />
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >

                      {/* <Rating name="size-small" defaultValue={item.rating} precision={item.rating}  size="small" /> */}
                      <span style={{ FontSize: "10px" }}><span style={{ fontWeight: "bold" }}>Title: </span>{item.title}</span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{ FontSize: "10px" }}>
                        {item.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <button onClick={() => addToCart(item)} style={{ fontWeight: "bold" }}>add to cart</button>
                  {/* <button onClick={()=>removeToCart(item)} style={{fontWeight:"bold"}}>Remove to Cart</button> */}
                </Card>
              </Grid>
              {/* </Card> */}


            </>
          ))}

        </Grid >
      </Container>

    </>
  )
}
export default CardCom;




