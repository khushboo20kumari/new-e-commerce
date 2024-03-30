import { Card, Container, Grid } from "@mui/joy";

function CartItem({ cart, totalPrice }) {
    return (
        <>
            <Container lg="lg">
                <Grid container spacing={2}>
                    <Grid lg={8}>
                        <Card>
                            {cart.map((item) => (
                                <>
                                    <Card>
                                        <Grid container spacing={7} >

                                            <Grid lg={3}>
                                                <img src={item.image} style={{ width: "100%", height: "100px" }}></img>
                                            </Grid>
                                            <Grid lg={8}>
                                                <p><span style={{ fontWeight: "bold" }}> Price :</span> {item.price}</p>
                                                <p><span  style={{ fontWeight: "bold" }}>title :</span>{item.title}</p>
                                            </Grid>

                                        </Grid>
                                    </Card>
                                </>
                            ))}
                        </Card>
                    </Grid>

                    <Grid lg={4}>
                        <Card>
                            <p>price : {totalPrice}</p>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}
export default CartItem;