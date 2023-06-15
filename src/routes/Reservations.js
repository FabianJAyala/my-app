import React from 'react';
import HeaderElement from '../components/HeaderElement';
import Footer from '../components/Footer';
import ReservationsPage from '../components/ReservationsPage';

const Reservations = (props) => {
  return (
    <div>
      <HeaderElement />
      <ReservationsPage availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
      <Footer />
    </div>
  )
}

export default Reservations;