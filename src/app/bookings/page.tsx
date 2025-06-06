
import BookingsTable from "@/features/bookings/table";



const BookingDetails = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-[28px] text-[#292D32] font-medium">
          {" "}
          Booking Details
        </h1>
        <p className="text-[14px] text-[#6F6F6F]">
          Here is a extended details of all your bookings so far!{" "}
        </p>
      </div>

      <BookingsTable />
    </div>
  );
};

export default BookingDetails;
