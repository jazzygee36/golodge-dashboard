"use client";
import DeleteIcon from "@/assets/svg/delete";
import EditIcon from "@/assets/svg/edit";
import Modal from "@/components/modal";
import React, { useEffect, useState, useRef } from "react";
import DeleteProfile from "./delete";
import HomeButton from "@/components/button";
import ConfirmBookings from "./confirm-bookings";
import DeleteBookings from "./delete";
import SelectInput from "@/components/select-input";
// import DashboardProfile from "./profile";
// import ResetPassword from "./reset-password";

const originalData = [
  {
    id: "202342",
    userType: "2 Bedroom",
    name: "Linda Foreman",
    apartmentName: " Whispering Rakes",

    noOfDaysBooked: "Two weeks",
    amount: " $450.00",
    dueDate: "22-05-2024",
    dateBooked: "22-05-2024",
    Status: "Checked-In",
    action: "View",
  },
  {
    id: "202343",
    userType: "duplex",
    name: "John Doe",
    apartmentName: " Whispering Rakes",
    noOfDaysBooked: "1 day",
    dateBooked: "21-04-2024",
    amount: " $450.00",
    dueDate: "22-05-2024",

    Status: "Checked-Out",
    action: "View",
  },
];

const TableData = Array.from({ length: 5 }).flatMap((_, i) =>
  originalData.map((item, idx) => ({
    ...item,
    id: `${item.id}-${i}-${idx}`,
  }))
);

const statusStyles: Record<string, string> = {
  "Checked-In":
    "bg-green-100 text-[#292D32] border border-green-300 rounded-lg inline-block px-3 py-[5px] text-[10px]",
  "Checked-Out":
    "bg-[#EF0808]/[0.20] text-[#292D32] border border-[#FFA500] rounded-lg  inline-block px-3 py-[5px] text-[10px]",
};
const options = [
  { label: "All", value: "all" },
  { label: "Checked-in", value: "checked-in" },
  { label: "Checked-out", value: "checked-out" },
];

const BookingsTable = () => {
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [isModalOpenConfirmBookings, setIsModalOpenConfirmBookings] =
    useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [filterValue, setFilterValue] = useState("all");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value);
  };

  const filteredData = TableData.filter((item) => {
    if (filterValue === "all") return true;
    return item.Status.toLowerCase() === filterValue;
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdownId(null); // Close the dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (id: string) => {
    setOpenDropdownId((prev: string | null) => (prev === id ? null : id));
  };
  return (
    <>
      <div className="bg-white px-5 py-4 mt-[32px]">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h1 className="text-[18px] font-medium text-[#151515]">Bookings</h1>
          </div>
          <h1 className="text-[#3F6FB9] text-[10px] underline cursor-pointer">
            {selectedIds.length < 1 ? (
              "Select"
            ) : (
              <div onClick={() => setSelectedIds([])}>Unselect</div>
            )}
          </h1>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-3  ">
            <span className="text-[8px] font-medium text-[#707070]">
              Sort by
            </span>
            <SelectInput
              name={""}
              id={""}
              options={options}
              value={filterValue}
              onChange={handleFilterChange}
            />
          </div>

          {selectedIds.length > 0 && (
            <div className="flex gap-2">
              <HomeButton
                title={"Confirm bookings"}
                type={"reset"}
                bg={""}
                width={"128px"}
                height={"32px"}
                border="1px solid #F2F3F7"
                borderRadius="20px"
                color="#292D32"
                onClick={() => setIsModalOpenConfirmBookings(true)}
              />
              <HomeButton
                title={"Delete All"}
                type={"reset"}
                bg={""}
                width={"128px"}
                color="#292D32"
                height={"32px"}
                border="1px solid  #F2F3F7"
                borderRadius="20px"
                onClick={() => setIsModalOpenDelete(true)}
              />
            </div>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#EAEAEA] text-xs text-[#707070] font-medium">
              <tr>
                <th className="py-3 px-4"></th>
                <th className="py-3 px-4">IdNo</th>
                <th className="py-3 px-4">Client Name</th>
                <th className="py-3 px-4">Apartment Name</th>

                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Date Booked</th>
                <th className="py-3 px-4">No of date Booked</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Due Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="text-xs text-[#292D32] font-medium">
              {filteredData.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="py-4 px-4">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(item.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedIds((prev) => [...prev, item.id]);
                        } else {
                          setSelectedIds((prev) =>
                            prev.filter((id) => id !== item.id)
                          );
                        }
                      }}
                    />
                  </td>
                  <td className="py-4 px-4">{item.id}</td>
                  <td className="py-4 px-4 flex gap-2 items-center">
                    <div className="w-[20px] h-[20px] bg-[#EAEAEA] rounded-full"></div>
                    {item.name}
                  </td>
                  <td className="py-4 px-4">{item.apartmentName}</td>
                  <td className="py-4 px-4">{item.userType}</td>

                  <td className="py-4 px-4">{item.dateBooked}</td>
                  <td className="py-4 px-4">{item.noOfDaysBooked}</td>
                  <td className="py-4 px-4">{item.amount}</td>
                  <td className="py-4 px-4 text-[red]">{item.dueDate}</td>

                  <td className="py-4 px-4 m-auto ">
                    <span
                      className={statusStyles[item.Status] || "bg-gray-100"}
                    >
                      {item.Status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="relative flex gap-4 items-center text-blue-500 underline">
                      <div
                        onClick={() => {
                          toggleDropdown(item.id);
                        }}
                        className="cursor-pointer"
                      >
                        <EditIcon />
                      </div>

                      {openDropdownId === item.id && (
                        <div
                          ref={dropdownRef}
                          className="absolute top-full mt-2 right-0 z-10 bg-white border border-gray-200 rounded shadow-md text-xs text-[#292D32] min-w-[207px]"
                        >
                          <ul className="py-1">
                            <li
                              className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                              // onClick={() => setIsModalOpen(true)}
                            >
                              View Booking Details
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between items-center my-2 text-xs text-[#707070]">
        <h3 className="text-[#B5B7C0] text-xs">
          Showing data 1 to 8 of 256K entries
        </h3>

        <div className="flex items-center gap-1">
          <button className="px-2 py-1  rounded text-[#707070] hover:bg-gray-100">
            ←
          </button>

          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`px-3 py-1  rounded ${
                page === 1
                  ? "bg-[#3F6FB9] text-white"
                  : "text-[#707070] hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="px-2">...</span>

          <button className="px-3 py-1  rounded text-[#707070] hover:bg-gray-100">
            20
          </button>

          <button className="px-2 py-1  rounded text-[#707070] hover:bg-gray-100">
            →
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpenDelete}
        onClose={() => setIsModalOpenDelete(false)}
        title="Delete Bookings"
        showCloseIcon={true}
      >
        <DeleteBookings />
      </Modal>
      <Modal
        isOpen={isModalOpenConfirmBookings}
        onClose={() => setIsModalOpenConfirmBookings(false)}
        title="Confirm Bookings"
        showCloseIcon={true}
      >
        <ConfirmBookings />
      </Modal>
    </>
  );
};

export default BookingsTable;
