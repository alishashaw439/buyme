import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({},builder=>{
    builder.addCase("changePasswordRequest",(state)=>{
        state.loading = true
    }).addCase("updateProfileRequest",(state)=>{
        state.loading = true
    }).addCase("changePasswordSuccess",(state,action)=>{
        state.loading = false
        state.message = action.payload
    }).addCase("updateProfileSuccess",(state,action)=>{
        state.loading = false
        state.message = action.payload
    }).addCase("changePasswordFail",(state,action)=>{
        state.loading = false
        state.error = action.payload
    }).addCase("updateProfileFail",(state,action)=>{
        state.loading = false
        state.error = action.payload
    })
    builder.addCase("clearError",(state,action)=>{
        state.error = null
    })
    builder.addCase("clearMessage",(state,action)=>{
        state.message = null
    })
})