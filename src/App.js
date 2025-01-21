import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import axios from "axios";
import { uiActions } from "./store/reducers/uiSlice";
import Card from "./components/UI/Card";
import { cartItemsActions } from "./store/reducers/cartItems";

let initial=true // so that it doesnt re initialize on re-render of component but only initialize once when the file is parsed for the first time

function App() {
  const show = useSelector((state) => state.cartShow.show);
  const cartItems = useSelector((state) => state.cartItems.items);
  const notification = useSelector((state) => state.uiSlice.notification);

  const dispatch = useDispatch();

  useEffect(() => {

    if (initial) {
      initial=false
      return;
    }
      async function fetchAPI(params) {
        try {
          dispatch(uiActions.notify({
            msg:"loading..."
          }));
          const res = await axios.put(
            "https://redux-async-demo-1aafb-default-rtdb.firebaseio.com/items.json",
            cartItems
          );

          console.log(cartItems,'cartItems after put request');
          
          dispatch(uiActions.notify({
            msg:"success, data sent!"
          }));

          console.log(res.data);
        } catch (err) {
          console.log(err);
          dispatch(uiActions.notify({
            msg:"error, data not sent!"
          }));
        }
      }
      fetchAPI();
  }, [cartItems]);

  useEffect(()=>{
    async function getAPI() {
      dispatch(uiActions.notify({
        msg:"loading..."
      }));
      const res= await axios.get("https://redux-async-demo-1aafb-default-rtdb.firebaseio.com/items.json")

      console.log(res.data, 'from axios get useEffect');
      
      dispatch(uiActions.notify({
        msg:"success, data retrieved!"
      }));

      res.data.forEach((item)=>{
        if(item){
        dispatch(cartItemsActions.addToCart({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
         }))
        }
      })


      if(res.statusText!=="OK"){
        throw new Error("Retrieving failed!")
      }
    }
    getAPI().catch((err)=>{
      console.log(err);

      dispatch(uiActions.notify({
        msg:"error, data not retrieved!"
      }));
    })
  },[])

  return (
    <Layout>
      {show && <Cart />}
      {notification && <Card>{notification.msg}</Card>}
      <Products />
    </Layout>
  );
}

export default App;
