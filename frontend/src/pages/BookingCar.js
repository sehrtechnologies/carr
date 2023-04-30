import React, { useState, useEffect } from "react";
import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";
import { bookCar } from "../redux/actions/bookingActions";
import axios from "axios";
import Loading from "../components/Loading";

const { RangePicker } = DatePicker;

const BookingCar = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [car, setcar] = useState({});
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [driver, setdriver] = useState(false);

  const { cars ,loading} = useSelector((state) => state.carsReducer);
  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id === id));
    }
  }, [cars]);

  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format("MMM DD YYYY HH:mm"));
    setTo(moment(values[0]).format("MMM DD YYYY HH:mm"));
    setTotalHours(values[1].diff(values[0], "hours"));
  }

  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour);
    if (driver) {
      setTotalAmount(totalAmount + 30 * totalHours);
    }
  }, [driver, totalHours]);

  function bookNow() {
    const reqObj = {
      user: JSON.parse(localStorage.getItem("user"))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };
    dispatch(bookCar(reqObj));
  }

  return (
    <>
       {
      loading?(<Loading/>):(
        <>
          <div>
      <div className="productD-wrapper">
        {/* card left */}
        <div className="productD-left">
          <div className="productD-img-display">
            <img src={car.image} alt="shoe image" className="productD-img" />
          </div>
        </div>
        {/* card right */}
        <div className="productD-content">
          <div className="product-content-name">
            <div>
              <h2 className="productD-title">{car.name}</h2>

              <a href="#" className="productD-brand">
                Brand: {car.brand}
              </a>

              <p className="productD-new-price">
                Rent : <span> ₹{car.rentPerHour} </span>
              </p>
            </div>
          </div>

          <div className="productD-detail">
            <div className="productD-About">
              <h2>Select Time Slot: </h2>

              <RangePicker
                className="rangePicker"
                showTime={{ format: "HH:mm" }}
                format="MMM DD yyyy HH:mm"
                onChange={selectTimeSlots}
              />
              {from && to && (
                <div>
                  <p>
                    Total Hours : <b>{totalHours}</b>
                  </p>
                  <p>
                    Rent Per Hour : <b>{car.rentPerHour}</b>
                  </p>
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setdriver(true);
                      } else {
                        setdriver(false);
                      }
                    }}
                  >
                    Driver Required
                  </Checkbox>

                  <h3 className="total-amount">Total Amount : {totalAmount}</h3>
                 

                  <button className="btn1" onClick={bookNow}>
                    Book Now
                  </button>
                </div>
              )}
              
            </div>
          </div>
          <div className="purchaseD-info">
            <></>
          </div>
        </div>
      </div>
    </div>
        </>
      )
    }
    </>

   
    
  );
};

export default BookingCar;