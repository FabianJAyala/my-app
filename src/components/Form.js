import React from 'react';
import "./styles/ReservationsPage.css";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("Full name is required"),
    email: yup.string().required("Email is required").email("Please enter a valid email"),
    phone: yup.string().required("Phone number is required").matches(/\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/, "Phone number is not valid"),
    guests: yup.number().min(1, "There must be at least 1 guest").required("Please specify number of diners"),
    date: yup.string().required("Please select date and time"),
})

function Form() {


    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    console.log(errors)

    const formSubmit = (data) => {
        console.table(data)
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
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
                    <input type="tel" placeholder="Your Phone Number Here" name="telephone" {...register("phone")}/>
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
                    <input type="number" placeholder="# of diners" name="guests" min="1" max="20" {...register("guests")}/>
                    <span className="error-message">{errors.guests?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="date">Reservation Date & Time</label>
                    <input type="datetime-local" name="date" {...register("date")} />
                    <span className="error-message">{errors.date?.message}</span>
                </div>
                <button className="reserve-btn" type="submit">Book Now</button>
            </fieldset>
        </form>
  )
}

export default Form;