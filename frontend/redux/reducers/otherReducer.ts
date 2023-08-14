import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({},builder=>{
    builder.addCase("changePasswordRequest",(state)=>{
        state.loading = true
    }).addCase("updateProfileRequest",(state)=>{
        state.loading = true
    }).addCase("updatePicRequest",(state)=>{
        state.loading = true
    }).addCase("placeOrderRequest",(state)=>{
        state.loading = true
    }).addCase("processOrderRequest",(state)=>{
        state.loading = true
    }).addCase("addCategoryRequest",(state)=>{
        state.loading = true
    }).addCase("deleteCategoryRequest",(state)=>{
        state.loading = true
    }).addCase("addProductRequest",(state)=>{
        state.loading = false
    }).addCase("changePasswordSuccess",(state,action)=>{
        state.loading = false
        state.message = action.payload
    }).addCase("updateProfileSuccess",(state,action)=>{
        state.loading = false
        state.message = action.payload
    }).addCase("updatePicSuccess",(state)=>{
        state.loading = true
    }).addCase("placeOrderSuccess",(state,action)=>{
        state.loading = true
        state.message = action.payload
    }).addCase("processOrderSuccess",(state,action)=>{
        state.loading = false
        state.message = action.payload
    }).addCase("addCategorySuccess",(state,action)=>{
        state.loading = false
        state.message = action.payload
    }).addCase("deleteCategorySuccess",(state,action)=>{
        state.loading = false
        state.message = action.payload
    }).addCase("addProductSuccess",(state,action)=>{
        state.loading = false
        state.message = action.payload
    }).addCase("changePasswordFail",(state,action)=>{
        state.loading = false
        state.error = action.payload
    }).addCase("updateProfileFail",(state,action)=>{
        state.loading = false
        state.error = action.payload
    }).addCase("updatePicFail",(state,action)=>{
        state.loading = false
        state.error = action.payload
    }).addCase("placeOrderFail",(state,action)=>{
        state.loading = false
        state.error = action.payload
    }).addCase("processOrderFail",(state,action)=>{
        state.loading = false
        state.error = action.payload
    }).addCase("addCategoryFail",(state,action)=>{
        state.loading = false
        state.error = action.payload
    }).addCase("deleteCategoryFail",(state,action)=>{
        state.loading = false
        state.error = action.payload
    }).addCase("addProductFail",(state,action)=>{
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