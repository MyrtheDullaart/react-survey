function Checkboxes({ formdata, setFormData }) {
    function handleChange(e) {
        const {name, value} = e.target
        setFormData({
            ...formdata,
            [name] : value
        })
    }

    return (
        <ul>
            <li>
                <label>
                    <input
                        name="spendTime"
                        type="checkbox"
                        value="swimming"
                        onChange={handleChange}
                    /> Swimming
                </label>
            </li>
            <li>
                <label>
                    <input 
                        name="spendTime" 
                        type="checkbox" 
                        value="bathing" 
                        onChange={handleChange}
                    /> Bathing
                </label>
            </li>
            <li>
                <label>
                    <input
                        name="spendTime"
                        type="checkbox"
                        value="chatting"
                        onChange={handleChange}
                    />Chatting
                </label>
            </li>
            <li>
                <label>
                    <input 
                        name="spendTime" 
                        type="checkbox" 
                        value="noTime"
                        onChange={handleChange} 
                    />I don't like to spend time with it
                </label>
            </li>
        </ul>
    )
}

export default Checkboxes