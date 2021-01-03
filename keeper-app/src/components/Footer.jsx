import React from "react"



function Footer(){
    let year=new Date().getFullYear();
    return(
        <p>Copyright MANZAR {year} </p>
    )
}


export default Footer;