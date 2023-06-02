
import React from 'react'
import PropTypes from 'prop-types'

const RowItemView = ( { item } ) => {

    const { product, price, quantity } = item;

  return (
    <>
        <tr>
            <td>{ product }</td>
            <td>{ price }</td>
            <td>{ quantity }</td>
        </tr>
    </>
  )
}

RowItemView.propTypes = {
    item : PropTypes.object.isRequired
}

export default RowItemView