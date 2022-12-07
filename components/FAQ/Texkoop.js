import React, { useState } from "react";

import { FAQ } from "../../utils/data";
import SingleQuestion from "./SingleQuestion";

const Texkoop = () => {
  const { questions } = FAQ;
  const [faqs, setFaqs] = useState(questions);

  return (
    <section className="my-10">
      {faqs.map((item) => (
        <div key={item.id} className="my-20">
          <div>
            <p className="h2-text">{item.text}</p>
          </div>
          {item.data.map((data, index) => (
            <SingleQuestion data={data} key={index} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Texkoop;
