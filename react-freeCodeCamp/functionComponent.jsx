//= Componente creado a traves de funcion (la funcion empieza con mayuscula)

const DemoComponent = function () {
    return (
        <div className='customClass' />
    );
};


//Other case

const MyComponent = function () {
    return (
        <div> Hello World </div>
    )
}


//= Componentes funcionales sin estado y con props
//-Props es un argumento que se le pasa a una funcion para retornar un JSX personalizado (<h1>Hello, {props.user}!</h1>)
//`Puedes acceder al valor del argumento desde el cuerpo de la funcion.
//=En los componentes de clase, verás que esto es un poco diferente.

//` Asi se pasa información desde un componente padre a un componente hijo como props
const CurrentDate = (props) => {
    return (
      <div>
        <p>The current date is: {props.date}</p>
      </div>
    );
  };

  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          <CurrentDate date={Date()}/>
        </div>
      );
    }
  };