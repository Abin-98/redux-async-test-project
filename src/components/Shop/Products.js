import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Pizza'
          price={7}
          description='This is a first product - amazing!'
          key={1}
          id={1}
        />
        <ProductItem
          title='Burgers'
          price={20}
          description='Delicious burgers in stock!'
          key={2}
          id={2}
        />
      </ul>
    </section>
  );
};

export default Products;
