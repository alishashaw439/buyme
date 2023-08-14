import { ScrollView, Text, View } from "react-native"
import ButtonBox from "../../components/ButtonBox"
import Chart from "../../components/Chart"
import { Header } from "../../components/Header"
import Loader from "../../components/Loader"
import { ProductListHeading } from "../../components/ProductListHeading"
import ProductListItem from "../../components/ProductListItem"
import {styles,colors} from "../../styles/styles"
import { useDispatch } from "react-redux"
import { useAdminProducts, useMessageAndErrorOther } from "../../utils/hooks"
import { useIsFocused } from "@react-navigation/native"
import { deleteProduct } from "../../redux/actions/otherAction"
import { getAdminProducts } from "../../redux/actions/productAction"

export const AdminPanel = ({navigation}:{navigation:any}) => {
    const dispatch = useDispatch()
    const isFocused = useIsFocused()
   const {loading,products,inStock,outOfStock} = useAdminProducts(dispatch,isFocused)
    const navigationHandler = (text:string) =>{
    switch(text){
        case "Category":
            navigation.navigate("categories")
            break
        case "All Orders":
            navigation.navigate("adminorders")
            break
        case "Product":
            navigation.navigate("newproduct")
            break
        default:
            navigation.navigate("adminorders")
            break
    }
    }
     const deleteProductHandler = (id:any)=>{
        dispatch(deleteProduct(id));
     }
     const loadingDelete = useMessageAndErrorOther(
        dispatch,
        null,
        null,
        getAdminProducts
      );
    return(
        <View style={styles.defaultStyle}>
            <Header emptyCart={false} back={true}></Header>
            <View style={{paddingTop:70,marginBottom:20}}>
                <Text style={styles.heading}>Admin Panel</Text>
                {
                    loading ? (
                        <View style={{alignSelf:"center",justifyContent:"center"}}>
                        <Loader/>
                        </View>
                    ):(
                        <>
                        <View
                         style={{backgroundColor:colors.color3,
                         borderRadius:20,
                         alignItems:"center"}}>
                        
                         </View>
                        
                        <Chart inStock={inStock} outOfStock={outOfStock}/>
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
                                   !loadingDelete && products.map((item:any,index:any)=>(
                                        
                                        <ProductListItem 
                                            key={item._id}
                                            navigation = {navigation}
                                            id={item._id}
                                            i={index}
                                            deleteHandler={deleteProductHandler}
                                            price={item.price}
                                            stock={item.stock}
                                            name={item.name}
                                            category={item.category?.category}
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