import React from 'react'
import Logo from './logo'
import Navmenu from './navmenu'

const styles={
    header:{
        background:"grey"
    }
}

export default ()=>{
    return (
        <header style={styles.header} className="header">
            <Logo></Logo>
            <Navmenu></Navmenu>
        </header>
        
    )
}