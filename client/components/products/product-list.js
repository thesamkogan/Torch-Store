/* eslint react/prefer-stateless-function: 0 class-methods-use-this:0*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import ProductItem from './product-item.js';
import Sidebar from '../sidebar';
import { fetchProducts } from '../../store';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    const {
      products,
      activeCategory,
    } = this.props;
    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={2} stretched>
            <div className="sidebar">
              <Sidebar />
            </div>
          </Grid.Column>
          <Grid.Column width={14}>
            <Grid>
            <Grid.Row columns={3} centered>
              {activeCategory.id
                ? products
                    .filter(
                      unFilteredProduct =>
                        unFilteredProduct.categoryId === activeCategory.id
                    )
                    .map(product => {
                      return (
                        <Grid.Column key={product.id}>
                          <ProductItem
                            product={product}
                          />
                        </Grid.Column>
                      );
                    })
                : products.map(product => (
                    <Grid.Column key={product.id}>
                      <ProductItem
                        product={product}
                      />
                    </Grid.Column>
                  ))}
            </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapState = ({ products, activeCategory, cart, user }) => ({
  products,
  activeCategory,
  cart,
  user,
  isLoggedIn: !!user.id,
});

const mapDispatch = dispatch => ({
  fetchInitialData() {
    dispatch(fetchProducts());
  },
});

export default connect(mapState, mapDispatch)(ProductList);