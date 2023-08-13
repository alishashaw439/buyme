import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer({
    products:[],
    product:{}
},builder=>{
    builder.addCase("getAllProductsRequest",(state)=>{
        state.loading = true
    }).addCase("getAdminProductsRequest",(state)=>{
        state.loading = true
    }).addCase("getProductsDetailsRequest",(state)=>{
        state.loading = true
    }).addCase("getAllProductsSuccess",(state,action)=>{
        state.loading = false
        state.products = action.payload
    }).addCase("getAdminProductsSuccess",(state,action)=>{
        state.loading = false
        state.products = action.payload.products
        state.inStock = action.payload
        state.outOfStock = action.payload.outOfStock
    }).addCase("getProductDetailsSuccess",(state,action)=>{
        state.loading = false
        state.products = action.payload
    }).addCase("getAllProductsFail",(state,action)=>{
        state.loading = false
        state.error = action.payload
    }).addCase("getAdminProductsFail",(state,action)=>{
        state.loading = false
        state.error = action.payload
    }).addCase("getProductDetailsFail",(state,action)=>{
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