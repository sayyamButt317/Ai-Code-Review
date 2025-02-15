import { createSlice, nanoid } from "@reduxjs/toolkit";
import { highlight } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";

const initialState = {
  codeSnippets: [],
};

export const codeHighlightSlice = createSlice({
  name: "codeHighlight",
  initialState,
  reducers: {
    highlightCode: (state, action) => {
      const code =  action.payload;
      state.codetext.push({
        id: nanoid(),
        text: code,
        highlightedText: prism.highlightAll(action.payload),
        isHighlighted: true,
      })
      state.codetext.push(code);
    },
  },
});

export const{highlightCode} =codeHighlightSlice.actions;
export default codeHighlightSlice.reducer;
