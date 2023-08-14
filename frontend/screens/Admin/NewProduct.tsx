import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, styles } from '../../styles/styles'
import { Header } from '../../components/Header'
import Loader from '../../components/Loader'
import { Avatar, Button, TextInput } from 'react-native-paper'
import SelectComponent from '../../components/SelectComponent'
import { useMessageAndErrorOther, useSetCategories } from '../../utils/hooks'
import { useIsFocused } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import mime from 'mime'
import { createProduct } from '../../redux/actions/otherAction'
const NewProduct = ({ navigation, route }: { navigation: any, route: any }) => {
    const isFocused = useIsFocused()
    const [visible,setVisible] = useState(false)
    const dispatch = useDispatch()
    const [name,setName] = useState("")
    const [image,setImage] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [stock,setStock] = useState("")
    const [category,setCategory] = useState("Choose Category")
    const [categoryID,setCategoryID] = useState(undefined)
    const [categories,setCategories] = useState([])
    useSetCategories(setCategories,isFocused)
    const disableCondition = !name || !description || !price || !stock || !image
    useEffect(()=>{
        if(route.params?.images){
            setImage(route.params.images[0].uri)
        }
    },[route.params])
    const submitHandler = ()=>{
        const myForm = new FormData()
        myForm.append("name",name)
        myForm.append("description",description)
        myForm.append("price",price)
        myForm.append("stock",stock)
        myForm.append("file",{
            uri:image,
            type:mime.getType(image),
            name:image.split("/").pop()
        })
       if(categoryID) myForm.append("category",categoryID) 
        dispatch(createProduct(myForm))
    }
    const loading = useMessageAndErrorOther(dispatch,navigation,"adminpanel")
    return (
        <>
        <View style={{
            ...styles.defaultStyle,
            backgroundColor: colors.color5
        }}>
            <Header back={true} emptyCart={false} />

            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={styles.heading}>New Product</Text>
            </View>
            
           
                    <ScrollView style={{
                        padding: 20,
                        elevation: 10,
                        borderRadius: 10,
                        backgroundColor: colors.color3
                    }}>
                        <View style={{
                            justifyContent: "center",
                            height: 650
                        }}>
                            <View style={{
                                width:80,
                                height:80,
                                alignSelf:"center",
                                marginBottom:20
                            }}>
                                <Avatar.Image size={80} 
                                style={{
                                    backgroundColor:colors.color1,

                                }}
                                source={{
                                    uri:image ? image : undefined
                                }}
                                ></Avatar.Image>
                                <TouchableOpacity onPress={()=>navigation.navigate("camera",{newProduct:true})}>
                                    <Avatar.Icon icon={"camera"} size={30} color={colors.color3}
                                    style={{
                                        backgroundColor:colors.color2,
                                        position:"absolute",
                                        bottom:0,
                                        right:-5
                                    }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TextInput style={styles.inputStyling}
                                placeholder="Name"
                                value={name}
                                onChangeText={setName}
                            ></TextInput>
                            <TextInput style={styles.inputStyling}
                                placeholder="Description"
                                value={description}
                                onChangeText={setDescription}
                            ></TextInput>
                            <TextInput style={styles.inputStyling}
                                placeholder="Price"
                                keyboardType='number-pad'
                                value={price}
                                onChangeText={setPrice}
                            ></TextInput>
                             <TextInput style={styles.inputStyling}
                                placeholder="Stock"
                                keyboardType='number-pad'
                                value={stock}
                                onChangeText={setStock}
                            ></TextInput>
                            <Text style={{
                                height:50,
                                 backgroundColor:colors.color2,
                                 textAlign:"center",
                                marginHorizontal:20,
                                marginVertical:10,
                                borderRadius:3,
                                padding:15
                            }} onPress={()=> setVisible(true)}>{category}</Text>
                            <Button style={{
                                backgroundColor:colors.color1,
                                margin:20,
                                padding:6
                            }} 
                            onPress={submitHandler}
                            loading={loading}
                            disabled={disableCondition || loading}
                            textColor={colors.color2}>Create</Button>
                        </View>
                    </ScrollView>
                
            
        </View>
        <SelectComponent visible={visible} setVisible={setVisible} 
        setCategory={setCategory} setCategoryID={setCategoryID} categories={categories}/>
        </>
    )
}

export default NewProduct