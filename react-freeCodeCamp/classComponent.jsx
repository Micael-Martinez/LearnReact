//= Componente creado a traves de clase, la nueva clase hereda de React.Component, que le da propiedades exclusivas de React.
//= Caracteristicas exclusivas: El estado local y el ciclo de vida de los "hooks".
//` También ten en cuenta que la clase MyComponent tiene un constructor definido dentro de ella que llama a super() que llama al constructor de la clase padre (React.Component).
//` Tiene un método de render que retorna HTML (de JSX) o null. Esta es la estructura básica de un componente React.
//=Es una mejor práctica llamar al constructor de un componente con super, y pasar sus propiedades props a ambos. Esto asegura que el componente esté inicializado correctamente.
//- Usa sintaxis es6 de class
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        )
    }
};
