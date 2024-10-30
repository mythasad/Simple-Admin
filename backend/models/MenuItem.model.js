import mongoose from "mongoose" 

const MenuItemSchema = mongoose.Schema({
    text: {
        type: String,
        requred: true,
    },
    url: {
        type: String,
        requred: true,
    }
})

export const MenuItem = mongoose.model('Menu Item', MenuItemSchema)