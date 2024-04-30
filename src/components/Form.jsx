import Checkboxes from "./Checkboxes"
import RadioButtons from "./RadioButtons"

function Form({ formdata, setFormData, answers, setAnswers, setEdit, edit }) {
    function handleSubmit(e) {
        if (edit === 0 || edit ) {
            e.preventDefault()
            editAnswers()
            setEdit('')
            setFormData({
                color: "",
                spendTime: [],
                review: "",
                username: "",
                email: ""
              })
        } else {
            e.preventDefault()
            setAnswers([
                ...answers,
                formdata
            ])
            setFormData({
                color: "",
                spendTime: [],
                review: "",
                username: "",
                email: ""
              })
        }

    }

    function handleChange(e) {
        const {name, value} = e.target
        setFormData({
            ...formdata,
            [name] : value
        })
    }

    function editAnswers() {
        setAnswers([...answers.slice(0, edit), formdata, ...answers.slice(edit + 1)])
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <RadioButtons formdata={formdata} setFormData={setFormData} />
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <Checkboxes formdata={formdata} setFormData={setFormData} />
            </div>
            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                    value={formdata.review}>
                </textarea>
            </label>
            <label>
                Put your name here (if you feel like it):<input
                type="text"
                name="username"
                value={formdata.username} 
                onChange={handleChange}/>
            </label>
            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    value={formdata.email} 
                    onChange={handleChange}/>
            </label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    )
}

export default Form