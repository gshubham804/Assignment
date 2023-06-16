import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: [
        {
            id:0,
            Name:"User1",
            Email:"user1@gmail.com",
            Phone:123456789,
            Marks:50,
            Pass:true,
        },
        {
            id:1,
            Name:"User2",
            Email:"user2@gmail.com",
            Phone:123456789,
            Marks:60,
            Pass:false,
        },
        {
            id:2,
            Name:"User3",
            Email:"user3@gmail.com",
            Phone:123456789,
            Marks:70,
            Pass:true,
        },
        {
            id:3,
            Name:"User4",
            Email:"user4@gmail.com",
            Phone:123456789,
            Marks:80,
            Pass:false,
        },
        {
            id:4,
            Name:"User5",
            Email:"user5@gmail.com",
            Phone:123456789,
            Marks:10,
            Pass:false,
        },
        {
            id:5,
            Name:"User6",
            Email:"user6@gmail.com",
            Phone:123456789,
            Marks:20,
            Pass:false,
        },
        {
            id:6,
            Name:"User7",
            Email:"user7@gmail.com",
            Phone:123456789,
            Marks:30,
            Pass:true,
        },
        {
            id:7,
            Name:"User8",
            Email:"user8@gmail.com",
            Phone:123456789,
            Marks:40,
            Pass:false,
        }
    ],
  }
  const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
      StudentData: (state, action) => {
        state.students = action.payload;
      },

    },
  });

  
  
  export const { StudentData } = studentSlice.actions;
  export default studentSlice.reducer;
  