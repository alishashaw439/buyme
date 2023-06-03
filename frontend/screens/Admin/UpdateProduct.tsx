import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, styles } from '../../styles/styles'
import { Header } from '../../components/Header'
import Loader from '../../components/Loader'
import { Button, TextInput } from 'react-native-paper'
import SelectComponent from '../../components/SelectComponent'
const UpdateProduct = ({ navigation, route }: { navigation: any, route: any }) => {
    const loading = false
    const loadingOther = false
    const [id] = useState(route.params.id)
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [stock,setStock] = useState("")
    const [category,setCategory] = useState("Laptop")
    const [categoryID,setCategoryID] = useState("")
    const [categories,setCategories] = useState([
        { _id:"78468",category:"Furniture"},
        { _id:"4468",category:"Appliances"},
        { _id:"8568",category:"Clothes"},
    ])
    const images = [
        {
            _id:"ugsugd",
            url:"https://www.pngmart.com/files/12/Bob-Minion-Transparent-PNG.png",
        },
        {
            _id:"jsadcfs",
            url:"https://www.pngmart.com/files/12/Stuart-Minion-PNG-Pic.png",
        }
    ]
    const [visible,setVisible] = useState(false)

    const submitHandler = ()=>{
        console.log(name,description,price,stock,categoryID)
    }
    return (
        <>
        <View style={{
            ...styles.defaultStyle,
            backgroundColor: colors.color5
        }}>
            <Header back={true} emptyCart={false} />

            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={styles.heading}>Update Product</Text>
            </View>
            {
                loading ? <Loader /> : (
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
                            <Button
                                onPress={() => navigation.navigate("productimages", {
                                    id,
                                    images: images

                                })}
                                textColor={colors.color1}>Manage Images</Button>
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
                            loading={loadingOther}
                            disabled={loadingOther}
                            textColor={colors.color2}>Update</Button>
                        </View>
                    </ScrollView>
                )
            }
        </View>
        <SelectComponent visible={visible} setVisible={setVisible} 
        setCategory={setCategory} setCategoryID={setCategoryID} categories={categories}/>
        </>
    )
}

export default UpdateProduct