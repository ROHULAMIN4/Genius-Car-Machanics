import React from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { BookingId } = useParams();
  return (
    <div>
      <h2>This is Booking : {BookingId}</h2>
    </div>
  );
};

export default Booking;
