import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/reducers/cartShow';

const CartButton = (props) => {
  const items=useSelector(state=>state.cartItems.items)
  const cartNumber = Object.values(items).reduce((acc, item)=>(acc+item.quantity),0)
  const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(cartActions.toggleShow())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartNumber}</span>
    </button>
  );
};

export default CartButton;
