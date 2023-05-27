import { ScrollView, Text, View } from "react-native"
import ButtonBox from "../../components/ButtonBox"
import { Header } from "../../components/Header"
import Loader from "../../components/Loader"
import { ProductListHeading } from "../../components/ProductListHeading"
import ProductListItem from "../../components/ProductListItem"
import {styles,colors} from "../../styles/styles"
import { products } from "../Home"

export const AdminPanel = ({navigation}:{navigation:any}) => {
    const loading = false
    const navigationHandler = () =>{
        console.log("naviagting from product")
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
                         <View >
                            <View style={{
                                flexDirection:"row",
                                margin:15,
                                justifyContent:"space-between"
                            }}>
                                <ButtonBox icon={"plus"}
                                text={"product"}
                                handler={navigationHandler}
                                >
                                </ButtonBox>
                                <ButtonBox icon={"format-list-bulleted-square"}
                                text={"All orders"}
                                handler={navigationHandler}
                                reverse={true}
                                >
                                </ButtonBox>
                                <ButtonBox icon={"plus"}
                                text={"category"}
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
                                        key={item._id} 
                                        i={index}
                                        deleteHandler={deleteProductHandler}
                                        price={item.price}
                                        stock={item.stock}
                                        name={item.name}
                                        category={item.category}
                                        imageSrc={item.images[0].url}
                                        />
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