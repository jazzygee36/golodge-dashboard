import RentersTable from "@/features/renters/table";


const BookingDetails = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-[28px] text-[#292D32] font-medium"> Renters </h1>
        <p className="text-[14px] text-[#6F6F6F]">
          Here is a extended details of all Renters so far!
        </p>
      </div>

      <RentersTable />
    </div>
  );
};

export default BookingDetails;
