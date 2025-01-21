import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import axios from "axios";
import { uiActions } from "./store/reducers/uiSlice";
import Card from "./components/UI/Card";

function App() {
  const show = useSelector((state) => state.cartShow.show);
  const cartItems = useSelector((state) => state.cartItems.items);
  const isLoading = useSelector((state) => state.uiSlice.isLoading);
  const success = useSelector((state) => state.uiSlice.success);
  const fail = useSelector((state) => state.uiSlice.fail);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(cartItems).length > 0) {
      async function fetchAPI(params) {
        try {
          dispatch(uiActions.loading(true));
          const res = axios.put(
            "https://redux-async-demo-1aafb-default-rtdb.firebaseio.com/items.json",
            cartItems
          );
          dispatch(uiActions.loading(false));
          dispatch(uiActions.didSucceed(true));
          console.log(res.value);
        } catch (err) {
          console.log(err);
          dispatch(uiActions.loading(false));
          dispatch(uiActions.didFail(true));
        }
      }
      fetchAPI();
    }
  }, [cartItems]);

  return (
    <Layout>
      {show && <Cart />}
      {isLoading && <Card>{"Sending cart data!"}</Card>}
      {fail && <Card>{"Error... sending data failed!"}</Card>}
      {success && <Card>{"Success! ...sent cart data!"}</Card>}
      <Products />
    </Layout>
  );
}

export default App;
