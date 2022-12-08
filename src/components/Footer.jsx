import React from "react";
import date from "./date";



function Footer(){

    const year = date()

    return <footer className="about-footer text-center">
        <p>copyright @ {year} Colorad Designs</p>
    </footer>
}

export default Footer;
