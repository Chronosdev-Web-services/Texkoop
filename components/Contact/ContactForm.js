import useTranslation from "next-translate/useTranslation";
import React from "react";
import Button from "../Reusable/Button";



const ContactForm = () => {


  const createContactUs = async (form_values)=>{
    
    const contact = await fetch(`/api/forms/contact/`, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(form_values),
    })
    //it returns status of 201 if it was successfull and 400 if not successfull
    console.log("response status", contact.status)
      

  }

  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);
    createContactUs(form_values)

  }

  const { t } = useTranslation();
  return (
    <section className="lg:w-[80%] mx-auto max-w-[1440px]">
      <form onSubmit={submitHandler} className=" grid md:grid-cols-2 gap-5 my-10 capitalize">
        <div>
          <label className="py-2">
            {t("partner:f_name")} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="first_name"
            required
            className="w-full p-3 outline-none border-black border"
          />
        </div>
        <div>
          <label className="">
            {t("partner:l_name")}
            <span className="text-red-600">*</span>
          </label>
          <input
          required
            type="text"
            name="last_name"
            className="w-full p-3 outline-none border-black border"
          />
        </div>
        <div className="">
          <label className="">
            {t("partner:number")} <span className="text-red-600">*</span>
          </label>
          <input
          required
            type="text"
            name="telephone_number"
            className="w-full p-3 outline-none border-black border"
          />
        </div>
        <div className="">
          <label className="">
            {t("partner:email")} <span className="text-red-600">*</span>
          </label>
          <input
          required
            type="email"
            name="email"
            className="w-full p-3 outline-none border-black border"
          />
        </div>
        <div className="col-span-2">
          <label className="">
            {t("partner:message")} <span className="text-red-600">*</span>
          </label>
          <textarea
          required
          name="message"
            className="w-full p-3 outline-none border-black border"
            rows="7"
          />
        </div>

        <div>
          <Button text={t("contact:contact_button")} />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
