export const DeleteMenu = async (id, setMenuItems, menuItems) => {
    try {
        const response = await fetch(`http://localhost:1234/menu/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json()
        console.log('Deleted menu item:', data)
        setMenuItems(menuItems.filter(item => item._id !== id))
    } catch (error) {
        console.error('Error', error)

    }
}
