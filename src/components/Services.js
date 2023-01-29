import React from "react";

const Services = () => {
  return (
    <div className=" my-48" id="Services">
      <h1 className=" text-center text-3xl font-medium">Our Services</h1>
      <div className="grid grid-cols-3 gap-10 mt-32 mx-10">
        <div className="bg-white rounded-lg hover:scale-105 shadow-md w-[450px] text-center">
          <div className="p-6">
            <h3 className="text-lg mb-6 font-bold">Service 1</h3>
            <p className="text-gray-600">Description of service 1</p>
          </div>
        </div>
        <div className="bg-white rounded-lg hover:scale-105 shadow-md w-[450px] text-center">
          <div className="p-6">
            <h3 className="text-lg mb-6 font-bold">Service 2</h3>
            <p className="text-gray-600">Description of service 2</p>
          </div>
        </div>
        <div className="bg-white rounded-lg hover:scale-105 shadow-md w-[450px] text-center">
          <div className="p-6">
            <h3 className="text-lg mb-6 font-bold">Service 3</h3>
            <p className="text-gray-600">Description of service 3</p>
          </div>
        </div>
        <div className="bg-white rounded-lg hover:scale-105 shadow-md w-[450px] text-center">
          <div className="p-6">
            <h3 className="text-lg mb-6 font-bold">Service 4</h3>
            <p className="text-gray-600">Description of service 4</p>
          </div>
        </div>
        <div className="bg-white rounded-lg hover:scale-105 shadow-md w-[450px] text-center">
          <div className="p-6">
            <h3 className="text-lg mb-6 font-bold">Service 5</h3>
            <p className="text-gray-600">Description of service 5</p>
          </div>
        </div>
        <div className="bg-white rounded-lg hover:scale-105 shadow-md w-[450px] text-center">
          <div className="p-6">
            <h3 className="text-lg mb-6 font-bold">Service 6</h3>
            <p className="text-gray-600">Description of service 6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
