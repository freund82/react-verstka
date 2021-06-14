import React from 'react'

const style={
    a:{
        textDecoration:"none",
        color:"black"
    }
}

export default()=>{
    return(
        <nav style={{fontWeight:"bold", paddingRight:"10px"}}>
            <a style={style.a} href="#">Home</a> | <a style={style.a} href="#">About us</a> | <a style={style.a} href="#">Contacts</a>
        </nav>
    )
}