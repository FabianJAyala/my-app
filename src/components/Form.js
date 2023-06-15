import React from 'react';
import "./styles/ReservationsPage.css";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    name: yup.string().required("Full name is required"),
    email: yup.string().required("Email is required").email("Please enter a valid email"),
    phone: yup.string().required("Phone number is required").matches(/\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/, "Phone number is not valid"),
    guests: yup.number().required("Please specify number of diners").typeError("Please select the number of diners"),
    date: yup.string().required("Please select a date"),
    time: yup.string().required("Please select a time"),
})

function Form(props) {
    const navigate = useNavigate();
    const { handleSubmit, register, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data, e) => {
        reset();
        navigate("/confirmed");
    }
    const onError = (errors, e) => alert("Please make sure the form is correctly filled before submitting.");

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder="Your Full Name Here" name="name" {...register("name")} />
                    <span className="error-message">{errors.name?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Your Email Here" name="email" {...register("email")}/>
                    <span className="error-message">{errors.email?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" placeholder="Your Phone Number i.e. 705-888-8888" name="telephone" {...register("phone")}/>
                    <span className="error-message">{errors.phone?.message}</span>
                </div>
                <div className="field occasion">
                    <label htmlFor="occasion">Occasion (optional)</label>
                    <div className="options">
                        <select name="occasion" {...register("occasion")}>
                            <option value="select">Select occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="graduation">Graduation</option>
                        </select>
                    </div>
                </div>
                <div className="field guest">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="Select the number of diners" name="guests" min="1" max="20" {...register("guests")}/>
                    <span className="error-message">{errors.guests?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="date">Reservation Date</label>
                    <input type="date" name="date" {...register("date")} />
                    <span className="error-message">{errors.date?.message}</span>
                </div>
                <div className="field occasion">
                    <label htmlFor="time">Reservation Time</label>
                    <div className="options">
                        <select id="time" {...register("time")}>
                            <option value="">Select a Time</option>
                            {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                        </select>
                        <span className="error-message">{errors.time?.message}</span>
                    </div>
                </div>

                <button className="reserve-btn" type="submit" aria-label="Book Now">Book Now</button>
            </fieldset>
        </form>
  )
}

export default Form;