import { MenuItem } from "../models/MenuItem.model.js" 

// Creating a menu item to the database.

export const createOneMenu = async (req, res) => {
    try {
        if (!req.body.text || !req.body.url) {
            return res.status(400).json({ error: "Submit both text and url" }) 
        }
        const newMenu = {
            text: req.body.text,
            url: req.body.url,
        }
        const createNewMenu = await MenuItem.create(newMenu) 
        return res.status(201).json(createNewMenu) 
    } catch (error) {
        console.error("Error at creating a menu item.", error) 
        return res
            .status(500)
            .json({ error: "Internal server error at creating a menu item." }) 
    }
} 

// Getting all the menus at once from the database.

export const getAllMenus = async (req, res) => {
    try {
        const menuItems = await MenuItem.find() 
        return res.status(200).json({
            count: menuItems.length,
            data: menuItems,
        }) 
    } catch (error) {
        console.error("Error at getting all menu items.", error) 
        return res
            .status(500)
            .json({ error: "Internal server error at getting all menu items." }) 
    }
} 

// Get one menu item from the database.

export const getOneMenu = async (req, res) => {
    try {
        const { id } = req.params 
        const menuItem = await MenuItem.findById(id) 
        return res.status(200).json({ menuItem }) 
    } catch (error) {
        console.error("Error at getting a menu item.", error) 
        return res
            .status(500)
            .json({ error: "Internal server error at getting a menu item." }) 
    }
} 

// Update a menu item from the database.

export const updateOneMenu = async (req, res) => {
    try {
        if (!req.body.text || !req.body.url) {
            return res.status(400).json({ error: "Submit both text and url." }) 
        }
        const { id } = req.params 
        const updateMenu = {
            text: req.body.text,
            url: req.body.url,
        } 
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(id, updateMenu, {
            new: true,
        }) 
        if (!updatedMenuItem) {
            return res.status(404).json({ error: "Menu item not found." }) 
        }

        return res.status(200).json(updatedMenuItem) 
    } catch (error) {
        console.error("Error at updating a menu item.", error) 
        return res
            .status(500)
            .json({ error: "Internal server error at updating a menu item." }) 
    }
} 

// Delete a menu item from the database.

export const deleteOneMenu = async (req, res) => {
    try {
        const { id } = req.params 

        const deletedItem = await MenuItem.findByIdAndDelete(id) 
        if (!deletedItem) {
            return res.status(404).json({ error: "Menu item not found." }) 
        }
        return res
            .status(200)
            .json({ message: "Menu item deleted successfully.", deletedItem }) 
    } catch (error) {
        console.error("Error at deleting a menu item.", error) 
        return res
            .status(500)
            .json({ error: "Internal server error at deleting a menu item." }) 
    }
} 
