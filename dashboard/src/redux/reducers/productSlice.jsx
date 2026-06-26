import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [
        { id: 1, name: "Basket Ball", price: 500, description: "High quality basketball for outdoor play" },
    { id: 2, name: "Football", price: 800, description: "Durable football suitable for all surfaces" },
    { id: 3, name: "Cricket bat", price: 1200, description: "Lightweight wooden bat for professional play" }
    ]
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})

export default productSlice.reducer