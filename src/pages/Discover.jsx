import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoIosNotifications, IoMdArrowDropdown } from "react-icons/io";
import {
  MdNotificationsActive,
  MdOutlineNotificationsActive,
} from "react-icons/md";

function Discover() {
  const [descoverData, setDescoverData] = useState([]);
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [openInput, setOpenInput] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
  const [conformationModal, setConformationModal] = useState(false);
  const [deleteID, setDeleteID] = useState();
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setDescoverData(res.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleDropdown = (index) => {
    if (activeRowIndex === index) {
      setActiveRowIndex(null);
    } else {
      setActiveRowIndex(index);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = descoverData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(descoverData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDelete = () => {
    try {
      const deleteData = descoverData.filter(
        (curElem) => curElem.id !== deleteID
      );
      setDescoverData(deleteData);
      setConformationModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (product, index) => {
    setEditedProduct({ ...product, index });
    setOpenInput(true);
    toggleDropdown(index);
  };

  const handleChange = (field, value) => {
    setEditedProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdate = () => {
    const updatedData = descoverData.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setDescoverData(updatedData);
    setOpenInput(false);

    setActiveRowIndex(null);
  };

  return (
    <div className="px-20 h-[640px]">
      <div className="flex justify-between items-center pt-5 pb-2">
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
        </div>
        <div className="w-[500px] flex gap-3 justify-between items-center">
          <div className="text-sm">
            Incidunt nihil consequatur commodi ipsam accus sapiente rem error
            accusamus{" "}
          </div>
          <div className="flex gap-2 items-center gradiant-button text-black rounded-lg font-semibold px-8 py-1 cursor-pointer">
            <MdNotificationsActive className="text-3xl " />
            Subscribe
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-4 rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-600 rounded-lg">
          <thead className="text-xs text-[#14c48f] uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-96">
                <ul className=" flex gap-2 items-center">
                  <li className="cursor-default">Name</li>
                  <li className="cursor-pointer">
                    <IoMdArrowDropdown className="text-lg text-white" />
                  </li>
                </ul>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <ul className=" flex gap-2 items-center">
                  <li className="cursor-default">Price</li>
                  <li className="cursor-pointer">
                    <IoMdArrowDropdown className="text-lg text-white" />
                  </li>
                </ul>
              </th>
              <th scope="col" className="px-6 py-3 w-60">
                <ul className=" flex gap-2 items-center">
                  <li className="cursor-default">Discount Percentage</li>
                  <li className="cursor-pointer">
                    <IoMdArrowDropdown className="text-lg text-white" />
                  </li>
                </ul>
              </th>
              <th scope="col" className="px-6 py-3">
                <ul className=" flex gap-2 items-center">
                  <li className="cursor-default">Rating</li>
                  <li className="cursor-pointer">
                    <IoMdArrowDropdown className="text-lg text-white" />
                  </li>
                </ul>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <ul className=" flex gap-2 items-center">
                  <li className="cursor-default">Stock</li>
                  <li className="cursor-pointer">
                    <IoMdArrowDropdown className="text-lg text-white" />
                  </li>
                </ul>
              </th>
              <th scope="col" className="px-6 py-3 text-center cursor-default">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((curElem, index) => (
              <tr
                key={index}
                className={`${index % 2 ? "bg-gray-900" : "bg-gray-950"}`}
              >
                <th scope="row">
                  <ul className="px-6 gap-4 h-full pt-1 flex items-center font-medium text-white">
                    <li>
                      <img
                        className="w-10"
                        src={curElem.thumbnail}
                        alt={curElem.title}
                      />
                    </li>
                    <li
                      className={`${
                        openInput && activeRowIndex === index
                          ? "hidden"
                          : "block"
                      }`}
                    >
                      {curElem.title}
                    </li>
                    <input
                      type="text"
                      className={`${
                        openInput && activeRowIndex === index
                          ? "block"
                          : "hidden"
                      } ${
                        index % 2
                          ? "bg-gray-900 border border-gray-600 rounded-md px-2 py-1"
                          : "bg-gray-950 border py-1 border-gray-600 px-2 rounded-md"
                      }`}
                      value={
                        editedProduct?.id === curElem.id
                          ? editedProduct.title
                          : curElem.title
                      }
                      onChange={(e) => handleChange("title", e.target.value)}
                    />
                  </ul>
                </th>
                <td className="px-6">
                  <span
                    className={`${
                      openInput && activeRowIndex === index ? "hidden" : "block"
                    }`}
                  >
                    {curElem.price}
                  </span>
                  <input
                    type="text"
                    className={`${
                      openInput && activeRowIndex === index ? "block" : "hidden"
                    } ${
                      index % 2
                        ? "bg-gray-900 border border-gray-600 rounded-md px-2 py-1"
                        : "bg-gray-950 border py-1 border-gray-600 px-2 rounded-md"
                    }`}
                    value={
                      editedProduct?.id === curElem.id
                        ? editedProduct.price
                        : curElem.price
                    }
                    onChange={(e) => handleChange("price", e.target.value)}
                  />
                </td>
                <td className="px-6">
                  <span
                    className={`${
                      openInput && activeRowIndex === index ? "hidden" : "block"
                    }`}
                  >
                    {curElem.discountPercentage}
                  </span>
                  <input
                    type="text"
                    className={`${
                      openInput && activeRowIndex === index ? "block" : "hidden"
                    } ${
                      index % 2
                        ? "bg-gray-900 border border-gray-600 rounded-md px-2 py-1"
                        : "bg-gray-950 border py-1 border-gray-600 px-2 rounded-md"
                    }`}
                    value={
                      editedProduct?.id === curElem.id
                        ? editedProduct.discountPercentage
                        : curElem.discountPercentage
                    }
                    onChange={(e) =>
                      handleChange("discountPercentage", e.target.value)
                    }
                  />
                </td>
                <td className="px-6">
                  <span
                    className={`${
                      openInput && activeRowIndex === index ? "hidden" : "block"
                    }`}
                  >
                    {curElem.rating}
                  </span>
                  <input
                    type="text"
                    className={`${
                      openInput && activeRowIndex === index ? "block" : "hidden"
                    } ${
                      index % 2
                        ? "bg-gray-900 border border-gray-600 rounded-md px-2 py-1"
                        : "bg-gray-950 border py-1 border-gray-600 px-2 rounded-md"
                    }`}
                    value={
                      editedProduct?.id === curElem.id
                        ? editedProduct.rating
                        : curElem.rating
                    }
                    onChange={(e) => handleChange("rating", e.target.value)}
                  />
                </td>
                <td className="px-6">
                  <span
                    className={`${
                      openInput && activeRowIndex === index ? "hidden" : "block"
                    }`}
                  >
                    {curElem.stock}
                  </span>
                  <input
                    type="text"
                    className={`${
                      openInput && activeRowIndex === index ? "block" : "hidden"
                    } ${
                      index % 2
                        ? "bg-gray-900 border border-gray-600 rounded-md px-2 py-1"
                        : "bg-gray-950 border py-1 border-gray-600 px-2 rounded-md"
                    }`}
                    value={
                      editedProduct?.id === curElem.id
                        ? editedProduct.stock
                        : curElem.stock
                    }
                    onChange={(e) => handleChange("stock", e.target.value)}
                  />
                </td>
                <td>
                  <ul className="px-6 pb-1 flex items-center justify-center">
                    <ul className="flex justify-center gap-4 items-center">
                      <li>
                        {activeRowIndex === index ? (
                          <button
                            type="button"
                            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2 text-center"
                            onClick={handleUpdate}
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center"
                            onClick={() => handleEdit(curElem, index)}
                          >
                            Edit
                          </button>
                        )}
                      </li>
                      <li>
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-2 text-center"
                          onClick={() => {
                            setConformationModal(true);
                            setDeleteID(curElem.id);
                          }}
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#14c48f] text-white rounded disabled:bg-gray-500"
          >
            Previous
          </button>
          <div className="flex items-center gap-3">
            <div>
              <span className="text-white">
                Page {currentPage} of {totalPages}
              </span>
            </div>
            <div className="flex justify-center items-center space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={`px-3 py-2 rounded ${
                    currentPage === index + 1
                      ? "bg-[#14c48f] text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#14c48f] text-white rounded disabled:bg-gray-500"
          >
            Next
          </button>
        </div>
      </div>
      {/* Conformation Modal For delete Product */}
      {conformationModal && (
        <div
          id="popup-modal"
          tabindex="-1"
          className=" overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen bg-black/50  max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
                onClick={() => setConformationModal(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  onClick={() => handleDelete()}
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => setConformationModal(false)}
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Discover;
