import { ScrollView, Text, View } from "react-native"
import ButtonBox from "../../components/ButtonBox"
import Chart from "../../components/Chart"
import { Header } from "../../components/Header"
import Loader from "../../components/Loader"
import { ProductListHeading } from "../../components/ProductListHeading"
import ProductListItem from "../../components/ProductListItem"
import {styles,colors} from "../../styles/styles"

export const AdminPanel = ({navigation}:{navigation:any}) => {
    const loading = false
    const products = []
    const navigationHandler = (text:string) =>{
    switch(text){
        case "Category":
            navigation.navigate("categories")
            break
        case "All Orders":
            navigation.navigate("adminorders")
            break
        case "Product":
            console.log("aayaa")
            navigation.navigate("newproduct")
            break
        default:
            navigation.navigate("adminorders")
            break
    }
    }
     const deleteProductHandler = (id:any)=>{
        console.log("Deleting id",id)
     }
    return(
        <View style={styles.defaultStyle}>
            <Header emptyCart={false} back={true}></Header>
            <View style={{paddingTop:70,marginBottom:20}}>
                <Text style={styles.heading}>Admin Panel</Text>
                {
                    loading ? (
                        <Loader/>
                    ):(
                        <>
                        <View
                         style={{backgroundColor:colors.color3,
                         borderRadius:20,
                         alignItems:"center"}}>
                        
                         </View>
                        
                        <Chart inStock={12} outOfStock={2}/>
                         <View >
                            <View style={{
                                flexDirection:"row",
                                margin:15,
                                justifyContent:"space-between"
                            }}>
                                <ButtonBox icon={"plus"}
                                text={"Product"}
                                handler={navigationHandler}
                                >
                                </ButtonBox>
                                <ButtonBox icon={"format-list-bulleted-square"}
                                text={"All Orders"}
                                handler={navigationHandler}
                                reverse={true}
                                >
                                </ButtonBox>
                                <ButtonBox icon={"plus"}
                                text={"Category"}
                                handler={navigationHandler}
                                >
                                </ButtonBox>
                            </View>
                         </View>
                         <ProductListHeading/>
                         <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                {
                                    products.map((item:any,index:any)=>(
                                        <ProductListItem 
                                            id={item._id}
                                            i={index}
                                            deleteHandler={deleteProductHandler}
                                            price={item.price}
                                            stock={item.stock}
                                            name={item.name}
                                            category={item.category}
                                            imageSrc={item.images[0].url} 
                                            key={item._id}                                        />
                                    ))
                                }
                            </View>
                         </ScrollView>
                        </>
                    )
                }
            </View>
        </View>
    )
}