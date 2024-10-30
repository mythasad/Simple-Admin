import { useState } from "react" 
import PropTypes from 'prop-types'
const CreateMenu = ({ addMenuItem }) => {
    const [text, setText] = useState("") 
    const [url, setUrl] = useState("") 
    const [errorMessage, setErrorMessage] = useState("") 

    const handleSubmit = async (e) => {
        e.preventDefault() 
        if (!text || !url) {
            setErrorMessage("Please enter both text and url.") 
            return 
        }
        try {


            const response = await fetch("http://localhost:1234/menu/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text, url }),
            })

            const data = await response.json()
            console.log("Menu Item Created:", data)
            setErrorMessage("")

            setText("")
            setUrl("")

            addMenuItem(data)
        } catch (error) {
            console.log("Error:", error) 
            setErrorMessage("Error occured while creating menu.") 

        }
    } 
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>
                    Menu Creation
                </legend>
                <div>
                <label htmlFor="text">Text:</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    id="text"
                    name="text"
                    placeholder="Example"
                />
            </div>
            <div>
                <label htmlFor="url">URL:</label>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    id="url"
                    name="url"
                    placeholder="/example"
                />
            </div>
            {errorMessage && <p style={{ color: "red" }}> {errorMessage} </p>}
            <button type="submit">Create Menu</button>
            </fieldset>
        </form>
    ) 
} 


CreateMenu.propTypes = {
    addMenuItem: PropTypes.func.isRequired,
}

export default CreateMenu 
