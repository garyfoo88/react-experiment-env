const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    value: 0
}

const sliceCounter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increaseValue(state) {
            state.value++
        },

        decreaseValue(state) {
            state.value--
        },

        increaseValueBy(state, action) {
            state.value += action.payload
        }
    }
})

export const { increaseValue, decreaseValue, increaseValueBy } = sliceCounter.actions;
export default sliceCounter.reducer