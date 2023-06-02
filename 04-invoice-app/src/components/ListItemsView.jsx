
import React from 'react'
import RowItemView from './RowItemView'
import PropTypes from 'prop-types'

const ListItemsView = ( {title, items} ) => {
  return (
    <>
        <h4>{ title }</h4>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                { items.map( (item)  => 
                    (   
                        <RowItemView key={item.id} item={ item }/>
                    )
                ) }
                
            </tbody>
        </table>
    </>
  )
}

ListItemsView.propTypes = {
    title : PropTypes.string.isRequired,
    items : PropTypes.array.isRequired
}

export default ListItemsView