import React from "react";
import HeaderElement from '../components/HeaderElement';
import Footer from '../components/Footer';
import "./styles/ConfirmedReservation.css";

const ConfirmedReservation= () => {
    return(
        <div>
            <HeaderElement />
            <div className="confirmed">
                <h2>Congratulations, your reservation was succesful!</h2>
                <p>Check your email for more details!</p>
            </div>
        <Footer />
        </div>


    )
}

export default ConfirmedReservation;