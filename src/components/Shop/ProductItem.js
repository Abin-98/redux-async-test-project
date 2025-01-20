import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartItemsActions } from '../../store/reducers/cartItems';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch()
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={()=>dispatch(cartItemsActions.addToCart({
            id:id,
            name:title,
            price:price,
          }))}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
