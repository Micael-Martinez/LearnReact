//= propTypes
//- Es un paquete que corre validaciones de las propiedades que son pasadas a los componentes
//` Valida el tipo de las props que son pasadas a mis componentes para render
// prop-types.js en unpkg (https://egghead.io/lessons/react-validate-custom-react-component-props-with-proptypes-60e63690)
const rootElement = document.getElementById('root');


function SayHello({ firstName, lastName }) {
    return (
        <div>
            Hello {firstName} {lastName} !
        </div>
    )
}

SayHello.propTypes = {
    firstName(props, propName, componentName) {
        if (typeof props[propName] !== 'string') {
            return new Error(`Hey, the component ${componentName} needs the prop ${propName} to be a string, but you passed a ${typeof props[propName]}`)
        }
    }
}

ReactDOM.render(element, rootElement);
