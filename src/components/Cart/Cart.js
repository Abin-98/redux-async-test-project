import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems= useSelector(state=>state.cartItems.items)
  console.log(cartItems);
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {Object.values(cartItems).map((item)=>{
        const itemTotal = item.quantity*item.price
        return (
          <ul key={item.id}>
        <CartItem
          item={{ title: item.name, quantity: item.quantity, total: itemTotal, price: item.price, id: item.id }}
        />
      </ul>
        )
      })}
    </Card>
  );
};

export default Cart;
