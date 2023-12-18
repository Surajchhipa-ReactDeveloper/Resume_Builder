import { configureStore } from "@reduxjs/toolkit";
import formSlice1 from "./Slice/Form1Slice";
import formSlice2 from "./Slice/Form2Slice";
import formSlice3 from "./Slice/Form3Slice";
import formEducationSlice3 from "./Slice/Form3SliceEducation";
console.log(formEducationSlice3);
const store = configureStore({
  reducer: {
    Form1: formSlice1,
    Form2: formSlice2,
    Form3: formSlice3,
    FormEducation: formEducationSlice3,
  },
});

export default store;
