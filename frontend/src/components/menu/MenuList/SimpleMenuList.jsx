import { useEffect, useState } from "react" 

const MenuList = () => {
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:1234/menu')
            .then(response => response.json())
            .then(data => setMenuItems(data.data))
            .catch(error => console.error('Error:', error))
    }, [])

    return (
        <nav>
            <ul>
                {menuItems.map(item => (
                    <li key={item._id}>
                        <a href={item.url}> {item.text} </a>  

                    </li>
                ))}
            </ul>
        </nav>

    )

}


export default MenuList