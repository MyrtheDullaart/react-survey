import { useState } from "react";
import Form from "./Form";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState({
    color: {
      value1 : false,
      value2 : false,
      value3 : false,
      value4 : false
    },
    spendTime: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false
    },
    review: "",
    username: "",
    email: ""
  })

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <Form formdata={formData} setFormData={setFormData}/>
      </section>
    </main>
  );
}

export default Survey;
