import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState({
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: ""
  })

  const [answers, setAnswers] = useState([])

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answers={answers}/>
      </section>
      <section className="survey__form">
        <Form formdata={formData} setFormData={setFormData} answers={answers} setAnswers={setAnswers}/>
      </section>
    </main>
  );
}

export default Survey;
