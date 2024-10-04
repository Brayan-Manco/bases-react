import React from 'react';
// este paquete se instala
import PropTypes from 'prop-types';


const newMessage = {
  nombre: 'Brayan',
  title: 'Hola'
}

export const FirstApp = ( {title, subTitle} ) => {

  return (
    <>
      {/* Forma para parsear un arreglo */}
      {/* <code>{ JSON.stringify(newMessage) }</code> */}

      <h1> { title } </h1>
      <p>{subTitle}</p>
    </>
  )
}

// las PropTypes es para definir los tipos de las props
FirstApp.PropTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

// para dar un valor por defecto
FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo'
}
