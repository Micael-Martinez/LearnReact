//= Los componentes tienen metodos en react asociados al CICLO DE VIDA del componente
//- Sirven para realizar acciones en puntos específicos en el ciclo de vida de un componente. Estos se llaman métodos de ciclo de vida, o interceptores (hooks) de ciclo de vida, y te permiten interceptar componentes en determinados momentos del tiempo.

//= Esto puede ser antes de que se rendericen, antes de que se actualicen, antes de que reciban las props, antes de que se desmonten, etc. Aquí hay una lista de algunos de los métodos principales del ciclo de vida:
//-componentWillMount() - es invocado antes del render, va a ser deprecada.
//- componentDidMount()
//- shouldComponentUpdate()
//- componentDidUpdate()
//- componentWillUnmount()

//= componentDidMount() para llamar a APIs con endpoints o cualquier llamada a mi server
//- La mejor práctica con React es ubicar las llamadas API o cualquier llamada a tu servidor en el método de ciclo de vida componentDidMount().

//- Este método se llama después de que un componente es montado (mounted) en el DOM. Cualquier llamada a setState() aquí desencadenará un re-renderizado de tu componente

//- Cuando se llame a una API en este método, y se modifique el estado con los datos que la API devuelve, automáticamente se ejecutará una actualización una vez que los datos sean recibidos.

//$ Cuando se llame a una API en este método, y se modifique el estado con los datos que la API devuelve, automáticamente se ejecutará una actualización una vez que los datos sean recibidos.

//? Exercise
//Hay una llamada simulada al API en componentDidMount(). Esta llamada modifica el estado después de 2.5 segundos para simular una llamada a un servidor para obtener datos. Este ejemplo consulta el total de usuarios activos actual para un sitio. En el método render, se renderiza el valor de activeUsers en el h1 después del texto Active Users:. Mira lo que sucede en la vista previa, y siéntete libre de cambiar el tiempo de espera para ver los diferentes efectos.

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273 //aca puedo traer los datos de la api despues de 2,5 seg.
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          <h1>Active Users: {this.state.activeUsers}</h1>
        </div>
      );
    }
  }
