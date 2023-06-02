
import React from 'react'
import PropTypes from 'prop-types'

const ClientView = ( { title, client } ) => {

    const {
        name : nameClient, 
        lastName, 
        address : { //ejemplo de desestructuracion anidada
            country, 
            city, 
            street, 
            number } 
    } = client;

  return (
    <>
        <h3>{ title }</h3>
        <ul className = "list-group">
            <li className = "list-group-item active">{ nameClient } { lastName }</li>
            <li className = "list-group-item">{ country } { city }</li>
            <li className = "list-group-item">{ street } { number }</li>
        </ul>
    </>
  )
}

ClientView.protoTypes = {
    title: PropTypes.string.isRequired,
    client : PropTypes.object
}

export default ClientView