import React from "react";
import { IoIosHome } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section
        style={{ marginTop: "10px", padding: "2rem 1rem" }}
        className="section__container bg-[#f4e5ec] rounded-lg"
      >
        <h2
          style={{ marginBottom: "1.5rem" }}
          className="section__header capitalize text-3xl font-bold text-center"
        >
          Contact Us
        </h2>
        <p
          style={{ marginBottom: "1.5rem" }}
          className="section__subheader text-center text-gray-700"
        >
          We provide exceptional products to enhance your lifestyle with quality
          and elegance.
        </p>
      </section>
      <div
        style={{ padding: "4rem 1.5rem", margin: "1rem 0" }}
        className="flex w-full container mx-auto items-center justify-center gap-6 flex-col lg:flex-row"
      >
        {/* Address Card */}
        <div
          style={{ padding: "1.5rem", marginBottom: "1.5rem" }}
          className="flex flex-col items-center justify-start gap-4 border-2 border-orange-500 rounded-lg bg-gradient-to-r from-orange-50 via-white to-orange-50 shadow-lg transition-transform transform hover:scale-105 w-full md:w-[30%]"
        >
          <IoIosHome className="text-6xl text-orange-500" />
          <div className="text-center">
            <h2
              style={{ marginBottom: "0.5rem" }}
              className="text-2xl font-bold text-gray-800"
            >
              Address
            </h2>
            <p className="text-gray-600">
              Dhamni (Gokulnagri ) Maharashtra, India, 415611
            </p>
          </div>
        </div>

        {/* Phone Card */}
        <div
          style={{ padding: "1.5rem", marginBottom: "1.5rem" }}
          className="flex flex-col items-center justify-start gap-4 border-2 border-orange-500 rounded-lg bg-gradient-to-r from-orange-50 via-white to-orange-50 shadow-lg transition-transform transform hover:scale-105 w-full md:w-[30%]"
        >
          <FaSquarePhone className="text-5xl text-orange-500" />
          <div className="text-center">
            <h2
              style={{ marginBottom: "0.5rem" }}
              className="text-xl font-bold text-gray-800"
            >
              Soham Chogale
            </h2>
            <p className="text-gray-600">+91 90225 13064</p>
            <p className="text-gray-600">+91 9518 391 500</p>
          </div>
        </div>

        {/* Email Card */}
        <div
          style={{ padding: "1.5rem", marginBottom: "1.5rem" }}
          className="flex flex-col items-center justify-start gap-4 border-2 border-orange-500 rounded-lg bg-gradient-to-r from-orange-50 via-white to-orange-50 shadow-lg transition-transform transform hover:scale-105 w-full md:w-[30%]"
        >
          <MdEmail className="text-5xl text-orange-500" />
          <div className="text-center">
            <h2
              style={{ marginBottom: "0.5rem" }}
              className="text-2xl font-bold text-gray-800"
            >
              Email Id
            </h2>
            <p className="text-gray-600">sohamchogale07@gmail.com</p>
            <p className="text-gray-600">shop@gmail.com</p>
          </div>
        </div>
      </div>
      <section
        style={{ padding: "4rem 0", marginBottom: "2.5rem" }}
        className="bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-blue-100/50 flex items-center justify-center"
      >
        <div style={{ padding: "0 1rem" }} className="mx-auto max-w-7xl">
          <h2
            style={{ marginBottom: "3rem" }}
            className="text-3xl md:text-4xl text-center font-bold text-gray-800"
          >
            Get in Touch with Us
          </h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 w-full">
            <div
              style={{ marginBottom: "2.5rem" }}
              className="group w-full h-full"
            >
              <div className="relative h-full">
                <img
                  src="https://static.wixstatic.com/media/3669ad_bef0af9bd2504259abcc0634a0af2ae8~mv2.png/v1/fill/w_980,h_551,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/3669ad_bef0af9bd2504259abcc0634a0af2ae8~mv2.png"
                  alt="ContactUs"
                  className="w-full lg:rounded-l-2xl rounded-2xl h-[400px] md:h-[500px]"
                />
                <div
                  style={{ padding: "2.75rem" }}
                  className="absolute bottom-4 w-full"
                >
                  <div className="bg-white rounded-lg shadow-xl">
                    <iframe
                      src="https://www.google.com/maps/embed?..."
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ padding: "2.75rem", marginBottom: "2.5rem" }}
              className="bg-gray-50 lg:rounded-r-2xl rounded-2xl h-[490px] md:h-[500px] shadow-2xl border"
            >
              <input
                style={{ marginBottom: "2.5rem" }}
                type="text"
                className="w-full h-12 pl-4"
                placeholder="Name"
              />
              <input
                style={{ marginBottom: "2.5rem" }}
                type="email"
                className="w-full h-12 pl-4"
                placeholder="Email"
              />
              <input
                style={{ marginBottom: "2.5rem" }}
                type="text"
                className="w-full h-12 pl-4"
                placeholder="Phone"
              />
              <textarea
                style={{ marginBottom: "2.5rem" }}
                rows={3}
                className="w-full pl-4"
                placeholder="Message"
              ></textarea>
              <button className="w-full h-12 text-white rounded-full bg-gradient-to-t from-[#ff914d] to-[#8c52ff] shadow-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
