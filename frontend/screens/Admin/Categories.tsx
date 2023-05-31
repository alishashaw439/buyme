import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { colors, styles } from '../../styles/styles'
import CategoryCard from '../../components/CategoryCard'
import { Button } from 'react-native-paper'

const categories = [
    {
        name: "Laptop",
        _id: "8836"
    },
    {
        name: "Book",
        _id: "8236"
    },
    {
        name: "Keys",
        _id: "81336"
    }
]
const Categories = () => {
    const [category, setCategory] = useState("")
    const loading = false
    const submitHandler = () => {
        console.log(category)
    }
    const deleteHandler = (id: string) => {
        console.log("deleted category", id)
    }
    return (
        <View style={{ ...styles.defaultStyle, backgroundColor: colors.color5 }}>
            <Header back={true} emptyCart={false} />

            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={styles.heading}>Categories</Text>
            </View>

            <ScrollView style={{
                marginBottom: 20
            }}>
                <View style={{
                    backgroundColor: colors.color2,
                    padding: 20,
                    minHeight: 400
                }}>
                    {
                        categories.map((i) => (
                            <CategoryCard
                                name={i.name}
                                id={i._id}
                                key={i._id}
                                deleteHandler={deleteHandler} />
                        ))
                    }
                </View>
            </ScrollView>
            <View style={categoryStyles.container}>
                <TextInput style={{ ...styles.inputStyling, borderRadius: 10, paddingLeft: 5 }}
                    placeholder="Category"
                    value={category}
                    onChangeText={setCategory}
                ></TextInput>
                <Button textColor={colors.color2} disabled={!category}
                onPress={submitHandler}
                loading={loading}
                >Add</Button>
            </View>
        </View>
    )
}

const categoryStyles = StyleSheet.create({
    container: {
        padding: 20,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: colors.color3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3
    }
})
export default Categories