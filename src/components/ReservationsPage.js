import React from 'react';
import "./styles/ReservationsPage.css";
import Form from './Form';

function ReservationsPage(props){
  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
                <h2>Have the best experience and enjoy your day with Little Lemon.</h2>
                <p>The best place in Chicago to bring your family and friends.</p>
                <p>Book a table and start the <em>experience</em>.</p>
            </div>
            <div className="form">
                <h1>Reserve a Table</h1>
                <p>Please fill in with your information and book your reservation at Little Lemon.</p>
                <Form availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
            </div>
        </div>
    </div>
  )
}

export default ReservationsPage;