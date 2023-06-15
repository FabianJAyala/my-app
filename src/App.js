import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer} from "react";
import { fetchAPI, submitAPI } from "./API/Api"
import ConfirmedReservation from "./components/ConfirmedReservation";

function App() {

  const initialState = {availableTimes:  fetchAPI(new Date())}
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
      return {availableTimes: fetchAPI(new Date(date))}
  }
  const navigate = useNavigate();
  function submitForm (formData) {
      if (submitAPI(formData)) {
          navigate("/confirmed")
      }
  }

  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route
          path = "/reservations"
          element = {
            <Reservations
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }/>
          <Route path="/confirmed" element={<ConfirmedReservation/> }/>
      </Routes>
    </>
  );
}

export default App;