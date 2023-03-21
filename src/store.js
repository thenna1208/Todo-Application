import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./reducers/taskSlice";


export const store = configureStore({
    reducer: {tasks : taskSlice}
})