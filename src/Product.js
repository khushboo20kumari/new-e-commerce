import { useEffect, useState } from "react";

import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Product() {

    const [data, seData] = useState([])

    const ProductData = () => {
        fetch("https://fakestoreapi.com/products").then((res) => {
            return res.json()
        }).then((res) => {
            seData(res)
        })
    }

    useEffect(() => {
        ProductData()
    }, [])

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" style={{width:"100%"}}>
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {data.map((item) => (
                                <Grid item lg={3} md={3} sm={6} xs={12}>
                                    <Card sx={{ width: 250, maxWidth: '80%', boxShadow: 'lg' }}>
                                        <CardOverflow>
                                            <AspectRatio sx={{ minWidth: 200 }}>
                                                <img
                                                    src={item.image}
                                                    srcSet={item.image}

                                                    alt=""
                                                    style={{ width: "100%", height: "200px", margin: "20px" }}
                                                />
                                            </AspectRatio>
                                        </CardOverflow>
                                        <CardContent>
                                            <Typography level="body-xs">{item.title}</Typography>
                                            <Link
                                                href="#product-card"
                                                fontWeight="md"
                                                color="neutral"
                                                textColor="text.primary"
                                                overlay
                                            >
                                            </Link>

                                            <Typography
                                                level="title-lg"
                                                sx={{ mt: 1, fontWeight: 'xl' }}
                                                endDecorator={
                                                    <Chip component="span" size="sm" variant="soft" color="success">
                                                        Lowest price
                                                    </Chip>
                                                }
                                            >
                                                {item.price} THB
                                            </Typography>
                                        </CardContent>
                                        <CardOverflow>
                                            <Button variant="solid" color="danger" size="lg">
                                                Add to cart
                                            </Button>
                                        </CardOverflow>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Container>

        </>
    )
}
export default Product;