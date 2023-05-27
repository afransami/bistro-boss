import React from "react";

const ContactForm = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="label">
            <span className="label-text">Name*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-warning w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Email*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-warning w-full"
          />
        </div>
      </div>
      <div>
        <label className="label">
          <span className="label-text">Phone*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="input input-bordered input-warning w-full"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Message*</span>
        </label>
        <textarea
          type="text"
          placeholder="Write your message here"
          className="textarea textarea-warning w-full textarea-lg"
        />
      </div>
      <div className="text-center flex justify-center"><button type="submit" className="btn bg-yellow-600 border-0 mb-40 mt-4 w-1/2">Send Message</button></div>
    </div>
  );
};

export default ContactForm;
