//- Un componente funcional sin estado, es cualquier función que escribas que acepte props y devuelva JSX.

const MyComponent = (props) => {
    return (
    <div>Hello World</div>
    )
};
//` Un componente sin estado, por otra parte, es una clase que extiende React.Component, pero no usa el estado interno (que será cubierto en el siguiente desafío).

//-Finalmente, un componente con estado es un componente de clase que mantiene su propio estado interno.


//? Resolver
//= El editor de código tiene un componente CampSite que renderiza un componente Camper como un componente hijo. Define el componente Camper y asigna los props predeterminados de { name: 'CamperBot' }. Dentro del componente Camper, renderiza el código que quieras, pero asegúrate de tener un elemento p que incluya sólo el valor name que se pasa como un prop. Por último, define propTypes en el componente Camper para requerir que name sea proporcionado como un prop y verifique que sea de tipo string.


class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  };

  class Camper extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <p>{this.props.name}</p>
      )
    }
  }

  Camper.defaultProps = { name: "CamperBot" }

  Camper.propTypes = {
    name: PropTypes.string.isRequired
  }




//$ Componentes con Estado
//= El estado consiste en saber cualquier dato que tu app necesite conocer y que cambie con el tiempo.
//` Queremos que nuestras apps respondan en base al cambio de estado y presenten una interfaz de usuario actualizada cuando sea necesario.

//- El estado de un componente se crea declarando una propiedad "state" en la clase del componente, en su constructor "this.state"
//- esto inicializa el componente con un estado, se crea con un object de JS, this.state = {...}

//= Tenemos acceso al objeto state a lo largo de la vida del componente

//-Puedes actualizarlo, renderizarlo en tu interfaz de usuario y pasarlo como propiedades a componentes hijos
//Ten en cuenta que debes crear un componente de clase heredando React.Component para crear un state como este.

//= renderizar una propiedad name desde su state

class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);

        this.state = {
        name: "Micael"
      }

    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };


//= Una vez que se inicializa el estado, siempre el componente tendrá acceso a los datos en state en su método render(). Puedes acceder a los datos con this.state.

//-Si quieres acceder a un valor de estado dentro del return del método de renderización, tienes que encerrar el valor entre llaves.
//` Si tus datos cambian, tu interfaz de usuario cambiará.
//=  React usa lo que se llama un DOM virtual, para realizar un seguimiento de los cambios detrás de escena.

//-Cuando se actualizan los datos de estado, activa un re-renderizado de los componentes usando esos datos incluyendo componentes hijos que recibieron los datos como un prop
//$ Esto significa que no tienes que preocuparte por cambiar el DOM. Tú simplemente declara cómo debe verse la interfaz de usuario, por eso es declarativo, no imperativo.


//= Ten en cuenta que si creas un componente con estado, ningún otro componente es consciente de su state. Su state está completamente encapsulado, o local a ese componente, a menos que pases datos de estado a un componente hijo como props




//=Hay otra manera de acceder al state de un componente. En el método render(), antes de la sentencia return, se puede escribir JavaScript directamente. Por ejemplo, puedes declarar funciones, acceder a datos de state o props, realizar cálculos sobre estos datos, etc. Luego, puedes asignar cualquier dato a las variables, a las que tienes acceso en la sentencia return.

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      const name = this.state.name;
      return (
        <div>
          <h1>{name}</h1>
        </div>
      );
    }
  };



//? Actualizar el componente
//`React proporciona un método para actualizar el componente state llamado setState. El método setState dentro de tu clase de componente se llama así: this.setState(), pasando un objeto con pares clave-valor: this.setState({username: "Lewis"})

//-React espera que nunca modifiques state directamente. En su lugar, siempre usa this.setState() cuando ocurran cambios de estado.

//-Además, ten en cuenta que React puede agrupar múltiples actualizaciones de estado con el fin de mejorar el rendimiento. Esto significa que las actualizaciones de estado a través del método setState pueden ser asíncronas.


//$ Ejemplo de cambio de estado
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
      //Luego, cuando llamas a una función como this.setState() dentro de handleClick(), this se refiere a la clase y no será undefined.
    }
    handleClick() {
      this.setState({
        name: 'React Rocks!'
      })
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };




  //?Another Exampple

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {

        const {state, handleClick} = this;
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };


  //$ Puliendo el render del componente de arriba

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {

      const { state = {text}, handleClick} = this;
      return (
        <div>
          <button onClick={handleClick}>Click Me</button>
          <h1>{state.text}</h1>
        </div>
      );
    }
  };


//. Aveces se necesita conocer el estado anterior al actualizar el Estado
//` Pero estas pueden ser asincronas, significa que react puede procesar multiples llamadas a setState en una sola actualizacion, no podemos confiar de this.state o this.props
//- en vez de eso, tenemos que pasar una funcion a setState() para acceder al state y props

//. El usar una función con setState te garantiza que estás trabajando con los valores más actuales del estado y props.
this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));


//- Sin props si necesito solo el state
this.setState(state => ({
    counter: state.counter + 1
  }));

//3 Hay que encapsular el objeto literal entre parentesis, de lo contrario JS pensara que es un bloque de codigo (estamos retornando un objeto)



//? Ejercicio
//-MyComponent tiene una propiedad visibility que se inicializa con el valor false. El método de renderización devuelve un resultado si el valor de visibility es verdadero, y un resultado diferente si es falso.
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    //Fijarme este metodo, que hace que al hacer click en el button desaparezca y aparezca el render
    toggleVisibility() {
      this.setState(state => ({
        visibility: !state.visibility
      }))

    }
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }



//. Manejando un estado para diferentes botones

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Cambia el código debajo de esta línea
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.reset = this.reset.bind(this)
      // Cambia el código encima de esta línea
    }
    // Cambia el código debajo de esta línea
    increment() {
        this.setState(state => ({
        count: state.count + 1
        }))
    }

    decrement() {
        this.setState(state => ({
        count: state.count - 1
        }))
    }

    reset() {
        this.setState(state => ({
        count: state.count = 0
        }))
    }
    // Cambia el código encima de esta línea
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };



//? Crear un input controlado (al escribir en el input se me escribe eso mismo en un <p></p>)
class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      })
    }
    render() {
      return (
        <div>
          <input value={this.state.input}></input>
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };




  //? El componente MyForm está configurado con un form vacío, con un manejador de envío. El manejador de envío será llamado cuando se envíe el formulario.

  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault()
      this.setState({
        submit: this.state.input,
        input: ''
      })
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.input} onChange={this.handleChange}></input>
            <button type='submit'>Submit!</button>
          </form>
          <h1>{this.state.submit}</h1>
        </div>
      );
    }
  }



  //$ Pasar el estado como props a los componentes hijos.
//= Hay un state supremo que es el de la App, los componentes hijos van a usar cierta parte del estado principal, y se accede al state principal a la partecita que vamos a utilizar
//- Los componentes hijos únicamente reciben los datos de estado que ellos necesitan

//- Por ejemplo, tal vez tengas un componente App que renderiza una Navbar, entre otros componentes. En tu App, tienes un state que contiene mucha información del usuario, pero la Navbar sólo necesita acceder al nombre de usuario para poder mostrarlo. Pasas esa parte del state al componente Navbar como prop.

//`las aplicaciones con estado pueden ser divididas en solo algunos, o tal vez un solo, componente con estado. El resto de tus componentes simplemente reciben el estado del padre como props, y renderizan la interfaz de usuario a partir de ese estado. Esto comienza a crear una separación donde la administración de estado es manejada en una parte del código y la renderización de la interfaz de usuario en otra. Este principio de separar la lógica de estado de la lógica de la interfaz de usuario es uno de los principios clave de React. Cuando se utiliza correctamente, hace que el diseño de aplicaciones complejas y de estado sea mucho más fácil de gestionar.

//? Exercise:

//Componente que administra el estado global: My app, navBar es un componente hijo que usa el estado.
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "CamperBot"
      };
    }
    render() {
      return (
        <div>
          <Navbar name={this.state.name} />
        </div>
      );
    }
  }

  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Hello, my name is: {this.props.name}</h1>
        </div>
      );
    }
  }



//. pasa una funcion callback como props
//Hay tres componentes descritos en el editor de código. El componente MyApp es el padre que renderizará los componentes hijos GetInput y RenderInput. Añade el componente GetInput al método de renderizar en MyApp, luego pásale un "prop" llamado input asignado a inputValue desde el estado state de MyApp. También crea un "prop" llamado handleChange y pasa el controlador de entrada handleChange a este.

//A continuación, añade RenderInput al método de renderizar en MyApp, luego crea un "prop" llamado input y pasa el inputValue desde el estado state a este. Una vez que hayas terminado podrás escribir en el campo input en el componente GetInput, que luego llama al método manejador en su padre a través de "props". Esto actualiza la entrada en el state del padre, que se pasa como "props" a ambos hijos. Observa cómo fluyen los datos entre los componentes y cómo la única fuente de verdad sigue siendo el state del componente padre. Es cierto que este ejemplo es un poco inventado, pero debe servir para ilustrar cómo los datos y las funciones callback pueden ser pasados entre componentes React.


class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          <GetInput handleChange={this.handleChange} input={this.state.inputValue} />
          <RenderInput input={this.state.inputValue} />
         </div>
      );
    }
  };

  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };

  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };


