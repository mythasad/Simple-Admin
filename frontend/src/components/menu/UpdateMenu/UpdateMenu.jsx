import { useState } from "react" 
import './UpdateMenu.scss'
import PropTypes from 'prop-types'

const UpdateMenu = ({ item, updateMenuItem }) => {
    const [text, setText] = useState(item.text)
    const [url, setUrl] = useState(item.url)
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!text || !url) {
            setErrorMessage("Please enter both text and url.")
            return
        }
        try {
            const response = await fetch(`http://localhost:1234/menu/${item._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text, url })
            })
            const data = await response.json()
            setErrorMessage("")
            updateMenuItem(data)

        } catch (error) {
            console.log("Error:", error),
                setErrorMessage("Error occured while updating menu.")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="text">Text:</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    id="text"
                    name="text"
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
                />
            </div>
            {errorMessage && <p style={{ color: "red" }}> {errorMessage} </p>}
            <button type="submit">Update Menu</button>
        </form>
    )
}

UpdateMenu.propTypes = {
    item: PropTypes.object.isRequired,
    updateMenuItem: PropTypes.func.isRequired
}

export default UpdateMenu