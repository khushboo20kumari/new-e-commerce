function CartItem({ cart }) {
    return (
        <>
            {cart.map((item) => (
                <>
                    <p>{item.price}</p>
                    <p>{item.title}</p>
                </>
            ))}

        </>
    )
}
export default CartItem;