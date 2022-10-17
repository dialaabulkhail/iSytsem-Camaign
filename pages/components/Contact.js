import React from "react";
import { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";

const Contact = ({ setThank, setPhone, phone }) => {
  // const [inputs, setInputs] = useState([])

  // const handleChange = (e) =>{
  //   const name = e.target.name
  //   const email = e.target.email
  //   const phone = e.target.phone
  //   setInputs(values => ({...values, [name]: phone}))
  // }

  const handleSubmit = () => {
    axios
      .get(
        `https://josmsservice.com/SMSServices/Clients/Prof/RestSingleSMS/SendSMS?senderid=iSystem&numbers=962${phone}&accname=isystem1&AccPass=xW8@zF6@wB2@xF1fT2n&msg=Congrats,you entered the draw to get an iPhone14,join us at Abdoun branch on the 27th of Oct 6PM/ to announce the winner at the opening https://bit.ly/3VqeQAD`
      )
      .then((res) => {
        console.log(res);
      })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });

      vlaidation()
      setThank(true);
  };

  const handleChange = (e) => {
    setPhone(e.target.value);
  };


  const vlaidation = () =>{
    
    const phoneNumber = document.querySelector("#phone").value

    if(phoneNumber < 0){
      alert("Please enetr a valid number")
    }
  
  }


  
  return (
    <div className="items-center overflow-x-none">
      <h1 className="mx-10 text-[20px] text-white mt-14 font-bold">
        You are a few steps away from winning an iPhone14, please fill in the
        below information to enter the draw!
      </h1>

      <div className="flex items-center justify-center ">
        <form onSubmit={handleSubmit} className="mt-5">
          <label className="flex py-2 text-white font-bold">Name</label>
          <input
            required="true"
            name="name"
            // value={inputs.name || ""}
            // onChange={handleChange}
            type="text"
            className="px-6 py-1 mx-3 text-black underline border-b  focus:border-none focus:ring-0 focus:outline-none text-[18px]"
          />

          <label className="py-2 text-white flex font-bold">Email</label>
          <input
            required="true"
            name="email"
            // value={inputs.email || ""}
            type="email"
            // onChange={handleChange}
            className="px-6 py-1 mx-3 text-black underline border-b  focus:border-none focus:ring-0 focus:outline-none text-[18px]"
          />

          <label className=" py-2 text-white flex font-bold">
            Phone Number
          </label>
          <div className="flex">
            <div className="px-1 py-1 ml-3 text-gray-700 bg-gray-200 border-r">
              +962
            </div>
            <input
            id="phone"
              required="true"
              name="phone"
              // value={inputs.phone || ""}
              onChange={handleChange}
              type="tel"
              className="  text-black underline border-bfocus:border-none focus:ring-0 focus:outline-none text-[18px]"
            />
          </div>

          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="p-3 px-10 text-white duration-200 ease-in-out rounded-lg shadow bg-darkBlue hover:bg-darkBlue/50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
