import { createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({ 
    name: "user", 
    initialState: {
        uid : "",
        email: "",
        name : "",
        userName : "",
        profilePicUrl : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    reducers: {
        setUser : (state, action) => {
            const {uid, email, name, username, profilePicUrl} = action.payload
            state.uid = uid;
            state.email= email;
            state.name = name;
            state.userName = username;
            if(profilePicUrl){
                state.profilePicUrl = profilePicUrl ;
            }
        },

        resetUser: (state) => {
            state.uid = "";
            state.email= "";
            state.name = "";
            state.userName = "";
            state.profilePicUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
        }
    }
});


export const {setUser, resetUser} = userSlice.actions;

export default userSlice.reducer;