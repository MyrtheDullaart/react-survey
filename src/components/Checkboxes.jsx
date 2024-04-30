function Checkboxes({ formdata, setFormData }) {
    function handleChange(e) {
        const {name, value} = e.target
        setFormData({
            ...formdata,
            [name] : [
                ...formdata.spendTime,
                value]            
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
                        checked={formdata.spendTime.includes("swimming")}
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
                        checked={formdata.spendTime.includes("bathing")}
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
                        checked={formdata.spendTime.includes("chatting")}
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
                        checked={formdata.spendTime.includes("noTime")} 
                    />I don't like to spend time with it
                </label>
            </li>
        </ul>
    )
}

export default Checkboxes