import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Email() {
  const form = useRef();
  const vite = import.meta.env;
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //   validate email
  const isValidEmail = (email) => {
    const e_reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return e_reg.test(email);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required...!";
    } else if (formData.name < 3) {
      newErrors.name = "Name must have atleast 3 character";
    }

    if (!formData.email) {
      newErrors.email = "Email is Required...!";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please Enter Valid Email...!";
    }

    if (formData.message < 25) {
      newErrors.message = "Please be brief about Topic...!";
    }

    setErrors(newErrors);
    console.log(newErrors);
    console.log(Object.keys(newErrors));
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    console.log("isValid", isValid);
    if (isValid) {
      emailjs
        .sendForm(vite.VITE_SERVICE_ID, vite.VITE_TEMPLATE_ID, form.current, {
          publicKey: vite.VITE_PUBLIC_KEY,
        })
        .then(
          () => {
            alert("Message sent successfully!");
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.error("Opps!", error.text);
            setErrors({
              ...error,
              sending: "Error while sending a mail, please try again...!",
            });
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="mx-auto my-4 w-[90%] ">
        <label htmlFor="from_name" className="text-sm">
          Name*
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="from_name"
          placeholder="Who are you?"
          className="block w-full py-2.3 mx-auto px-0 text-[14px] border-0 bg-transparent input-transition border-b-2 placeholder-slate-700 border-gray-900 appearance-none focus:border-gray-500 focus:outline-none focus:ring-0"
          type="text"
        />
        {errors?.name && (
          <div className="mt-[8px] text-gray-300 text-sm font-medium">
            {errors.name}
          </div>
        )}
      </div>
      <div className="mx-auto my-4 w-[90%] ">
        <label htmlFor="from_email" className="text-sm">
          Email*
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="from_email"
          placeholder="Your email address?"
          className="block w-full py-2.3 mx-auto px-0 text-[14px] border-0 bg-transparent input-transition border-b-2 placeholder-slate-700 border-gray-900 appearance-none focus:border-gray-500 focus:outline-none focus:ring-0"
          type="email"
        />
        {errors?.email && (
          <div className="mt-[8px] text-gray-300 text-sm font-medium">
            {errors.email}
          </div>
        )}
      </div>
      <div className="mx-auto my-4 w-[90%] ">
        <label htmlFor="message" className="text-sm">
          Message*
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message goes here..."
          className="block w-full py-2.3 mx-auto px-0 text-[14px] border-0 bg-transparent input-transition border-b-2 placeholder-slate-700 border-gray-900 appearance-none focus:border-gray-500 focus:outline-none focus:ring-0"
          type="text"
        />
        {errors?.message && (
          <div className="mt-[8px] text-gray-300 text-sm font-medium">
            {errors.message}
          </div>
        )}
      </div>
      <div className="mx-auto my-4 w-[90%] ">
        <input
          type="submit"
          value="Send"
          className="border w-24 h-12 bg-transparent font-semibold rounded-lg hover:bg-white hover:bg-opacity-20 shadow-lg hover:opacity-80 cursor-pointer"
        />
        {errors?.sending && (
          <div className="mt-[8px] text-gray-300 text-sm font-medium">
            {errors.sending}
          </div>
        )}
      </div>
    </form>
  );
}

export default Email;
