import { configureStore } from '@reduxjs/toolkit'
import highlightCode from "./features/ColorCode/colorcodeSlice.js"
export const store = configureStore({
    reducer: {
        code:highlightCode
      },
})