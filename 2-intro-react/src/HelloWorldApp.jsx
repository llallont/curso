
import PropTypes from 'prop-types';
import Title from './componets/Title';
import UserDetails from './componets/UserDetails';
import Book from './componets/Book';

const HelloWorldApp = ( {user, id, title, book} ) => {

    //const name = 'Pepe';
    //console.log(title)

    return (
        <>
            <Title title = { title }/> 
            <UserDetails user = { user } id = { id } />
            <Book book = { book }/>
        </>
    )
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}

HelloWorldApp.defaultProps = {
    title: 'Hola Mundo por defecto',
    book: 'UML got a gota'
}

export default HelloWorldApp;