import React from 'react';
import ReactDOM from 'react-dom';

//=Pasa un arreglo como "props"

<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>

//`El componente hijo entonces tiene acceso a la propiedad del arreglo colors.

//-Los métodos de arreglo, como join() pueden ser usados al acceder a la propiedad.

//Creado del componente para manejar arreglos en los props
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>

//-<p>green, blue, red</p>





//? Add Tasks in List

//= Tenemos el componente ToDo(el padre) y el componente List
//-Al renderizar List en ToDo, se pasa una props llamada tasks que es un arreglo de tarea pendientes.
//`Luego accedo a este arreglo en el componente List para tratarlo, para mostrarlo dentro de p con join(", ")
const List = (props) => {
    return <p>{props.tasks.join(', ')}</p>
  };

  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          <List tasks={["walk dog", "workout"]} />
          <h2>Tomorrow</h2>
          <List tasks={["Ir a neuquen con mi novia", "Comer cosas ricas", "Ir al escape room"]}/>
        </div>
      );
    }
  };





//$ Usar props predeterminadas
//= MyComponent.defaultProps = { location: 'San Francisco' }
//-React asigna props predeterminadas si estas no están definidas, pero si pasas el valor null como valor para una prop, este permanecerá null.

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }

  Items.defaultProps = {
    quantity: 0
  }

  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items quantity={10}/> //no agarrar la default porque le asigne una explicitamente
    }
  };


//$ Usar propTypes para definir las props que espero
//Es util usarlas cuando se que tipo de datos va a ser una prop, ejemplo al llamado de una api yo tengo que decirle que sea un array, si no no tomarlo
//Documentacion de propTypes
//https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
//= Es util para validar los tipos de datos de las props que yo espero en mi app
//-Por ejemplo, tu aplicación hace una llamada a un API para obtener datos que se esperan que sea un arreglo, el cual es pasado al componente como una prop. Puedes establecer propTypes en tu componente para que los datos sean de tipo array. Esto arrojará una advertencia útil cuando los datos sean de otro tipo.

//= su aplicación realiza una llamada a la API para recuperar los datos que espera que estén en un array, que luego se pasan a un componente como props.
//`Se considera una muy buena práctica definir los propTypes cuando conoces el tipo de una propiedad con antelación.

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

//handleClick tiene que ser de tipo function y es una prop llamada handleClick.
//-PropTypes.func verifica que handleClick es una función.
//-Añadir isRequired le dice a React que handleClick es una propiedad obligatoria para ese componente.
//`Nota: A partir de React v15.5.0, PropTypes se importa de manera independiente de React, así: import PropTypes from 'prop-types';



//$ Acceder a las props de un Componente de Clase
//Se hace a traves del this.props.(nombreDeLaProp) en la clase creadora del componente
class App extends React.Component {
    constructor(props) {
      super(props);

    }
    render() {
      return (
          <div>
              <Welcome name="Micael Martinez"/>
          </div>
      );
    }
  };

  class Welcome extends React.Component {
    constructor(props) {
      super(props);

    }
    render() {
      return (
          <div>
            <p>Hello, <strong>{this.props.name}</strong>!</p>
          </div>
      );
    }
  };


