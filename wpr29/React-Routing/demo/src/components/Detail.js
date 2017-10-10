import React, { Component } from 'react';
import { getOne } from '../data.js';

export default class Detail extends Component {
  constructor() {
    super()

    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    this.setState({
      product: getOne(this.props.match.params.id)
    })
  }

  render() {
    return (
      <div>
        <h1>Product Detail View!</h1>
        <h2>{ this.state.product.name }</h2>
        <h2>{ this.state.product.price }</h2>
      </div>
    )
  }
}