import React from 'react'

const Cart = (props) => {
    return (
        <div>
            <img style={{ marginRight: "50px", display: 'flex', justifyContent: "center", alignItems: "center" }} height={"30px"} width="30px" src='https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg' />
            <span>{props.cart.length}</span>
        </div>
    )
}

export default Cart