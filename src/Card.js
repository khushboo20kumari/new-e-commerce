import { Grid, Typography, Card, Container, Button } from '@mui/joy';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Pagination, Box } from '@mui/material';
const itemsPerPage = 8;
function CardCom({ data, addToCart, removeToCart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={4} style={{ marginTop: "20px" }}>
          <Grid lg={12} sm={12} md={12} xs={12}>
            <Card>
              <img src='https://i.postimg.cc/t403yfn9/home2.jpg'></img>
            </Card>
          </Grid >
        </Grid >
      </Container>

      <Container maxWidth="lg">
        <Typography variant='h1' style={{ fontSize: "40px", margin: "15px" }}>Top Sales</Typography>
        <Grid container spacing={4}>
          {currentPageData.map((item) => (
            <>
              <Grid lg={3} sm={6} md={4} xs={12}>
                <Card>
                  <img className='product-img' src={item.image} style={{ width: "100%", height: "150px" }}></img>
                  <Rating name="customized-10" defaultValue={2} max={item.rating} />
                  <Rating name="size-small" defaultValue={item.rating} precision={item.rating} size="small" />
                  <Button onClick={() => addToCart(item)} variant="contained" color="success" style={{ color: "black", fontSize: "20px", background: "blue" }}>
                    Add to cart
                  </Button>
                </Card>
              </Grid >
            </>
          ))}
        </Grid >
      </Container >
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color='primary' />
      </Container>
    </>
  )
}
export default CardCom;




