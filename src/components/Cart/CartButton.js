import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/reducers/cartShow';

const CartButton = (props) => {
  const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(cartActions.toggleShow())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
