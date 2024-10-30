import { useEffect, useState } from "react" 
import { DeleteMenu } from "../DeleteMenu/DeleteMenu" 
import CreateMenu from "../CreateMenu/CreateMenu" 
import UpdateMenu from "../UpdateMenu/UpdateMenu" 

const MenuList = () => {
    const [menuItems, setMenuItems] = useState([])
    const [updateItem, setUpdateItem] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1234/menu')
            .then(response => response.json())
            .then(data => setMenuItems(data.data))
            .catch(error => console.error('Error:', error))
    }, [])
    const addMenuItem = (newMenu) => {
        setMenuItems([...menuItems, newMenu])
    }

    const updateMenuItem = (updatedItem) => {
        setMenuItems(menuItems.map(item => (item._id == updatedItem._id ? updatedItem : item)))
    }

    return (
        <nav>
            
            <ul>
                {menuItems.map(item => (
                    <li key={item._id}>
                        <a href={item.url}> {item.text} </a>  <button onClick={() => setUpdateItem(item)}>✏️</button>
                        <button onClick={() => DeleteMenu(item._id, setMenuItems, menuItems)} >X</button>

                    </li>
                ))}
            </ul>
            {updateItem && <UpdateMenu item={updateItem} updateMenuItem={updateMenuItem} />}
            <CreateMenu addMenuItem={addMenuItem} />
        </nav>

    )

}


export default MenuList