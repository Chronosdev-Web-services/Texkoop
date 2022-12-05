import useTranslation from "next-translate/useTranslation";
import React from "react";
import Button from "../Reusable/Button";

const Suscribe = () => {

  const createClient = async (form_values)=>{
    
    const client = await fetch(`/api/forms/client/`, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(form_values),
    })
    //it returns status of 201 if it was successfull and 400 if not successfull
    console.log("response status", client.status)
  }
  
  const createPartner = async (form_values)=>{
    
    const partner = await fetch(`/api/forms/partner/`, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(form_values),
    })
    //it returns status of 201 if it was successfull and 400 if not successfull
    console.log("response status", partner.status)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);
    console.log("pp", form_values.form_type)
    if (form_values.form_type == 'partner' ) {
      
      createPartner(form_values)

      
    }
    else{
      createClient(form_values)
    }
    // createRider(form_values)

  }

  const { t } = useTranslation("partner");

  return (
    <form onSubmit={submitHandler} className="md:w-[70%] grid gap-5 my-10">
      <div>
        <label className="py-2">
          {t("f_name")}
          <span className="text-red-600">*</span>
        </label>
        <input
        name="first_name"
          type="text"
          required
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div>
        <label className="">
          {t("l_name")} <span className="text-red-600">*</span>
        </label>
        <input
        name="last_name"
        required
          type="text"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div>
        <label className="">
          {t("c_name")} <span className="text-red-600">*</span>
        </label>
        <input
        required
        name="company_name"
          type="text"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div>
        <label className="">
          {t("email")} <span className="text-red-600">*</span>
        </label>
        <input
        required
        name="email"
          type="email"
          className="w-full p-3 outline-none border-black border"
        />
      </div>

      <div>
        {/* <label className="">
          {t("number")} <span className="text-red-600">*</span>
        </label> */}
        <label for="type">Choose type:</label>
        <select name="form_type" id="type">
          <option value="partner">Partner</option>
          <option value="client">Client</option>
          
        </select>
      </div>


      <div>
        <label className="">
          {t("number")} <span className="text-red-600">*</span>
        </label>
        <input
        required
        name="telephone_number"
          type="text"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div className="flex items-center gap-3 w-[2/3]">
        <input
        required
          type="checkbox"
          className="p-3 w-[20px] h-[20px] outline-none rounded-none border-black border"
        />
        <label className="text-xs">
          {t("select")} <span className="text-red-600">*</span>
          {t("required")}
        </label>
      </div>
      <div>
        <Button text={t("button_a")} className="capitalize" />
      </div>
    </form>
  );
};

export default Suscribe;
