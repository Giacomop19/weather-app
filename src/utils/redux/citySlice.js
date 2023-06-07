import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
    name : 'city',
    initialState : [],
    reducers :{
        addCity : (state,action) =>{
        state.push(action.payload)
        },
        cityPop : (state,action) =>{
            state.pop()
        }
    },
})

export const {addCity, cityPop} = citySlice.actions


export default citySlice.reducer


//STATE.TOP

//OR DELETING THE CITIES THAT ARE BEING REPETED ( pop )