import React from "react";
import { Helmet } from "react-helmet";
import contactImg from "../../../../assets/contact/banner.jpg";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaBeer } from "react-icons/fa";
import {
  MdLocationPin,
  MdOutlineAccessTimeFilled,
  MdWifiCalling3,
} from "react-icons/md";
import ContactForm from "../../../ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      <Cover img={contactImg} title={"Contact Us"}></Cover>
      <SectionTitle
        subHeading={"Visit Us"}
        heading={"Our Location"}
      ></SectionTitle>

      <div className="relative  lg:flex gap-8 ">
        <div className="lg:w-1/3 text-center">
          <div className="bg-yellow-600 text-white w-full py-4 flex items-center justify-center rounded-lg">
            <MdWifiCalling3 className="text-3xl"></MdWifiCalling3>
          </div>
          <p className="uppercase h-[200px] bg-slate-100  pt-8 mx-4 mb-8">
            Phone
            <br />
            <span>+880181564775778</span>
          </p>
        </div>
        <div className="lg:w-1/3 text-center">
          <div className="bg-yellow-600 text-white w-full py-4 flex items-center justify-center rounded-lg">
            <MdLocationPin className="text-3xl"></MdLocationPin>
          </div>
          <p className="uppercase h-[200px] bg-slate-100  pt-8 mx-4 mb-8">
            Address
            <br />
            <span>+880181564775778</span>
          </p>
        </div>
        <div className="lg:w-1/3 text-center">
          <div className="bg-yellow-600 text-white w-full py-4 flex items-center justify-center rounded-lg">
            <MdOutlineAccessTimeFilled className="text-3xl"></MdOutlineAccessTimeFilled>
          </div>
          <p className="uppercase h-[200px] bg-slate-100  pt-8 mx-4 mb-8">
            Working Hours
            <br />
            <span>
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </span>
          </p>
        </div>
      </div>
      <SectionTitle subHeading={"Send Us a Message"} heading={"CONTACT FORM"}></SectionTitle>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ContactUs;
