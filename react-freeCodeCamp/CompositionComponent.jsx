import React from 'react';
import ReactDOM from 'react-dom';

//= Como componer multiples componentes de react juntos
//-Tenemos un navbar, dashboard, footer.
//` se crea un Componente App parent(padre) que renderiza cada uno de los 3 anteriores como children.
//- Para renderizar un componente como hijo de otro, se incluye el nombre del componente escrito como una etiqueta HTML personalizada en el JSX.

//Por ejemplo, en el método render se puede escribir:

return (
    <App>
        <Navbar />
        <Dashboard />
        <Footer />
    </App>
)


//Cuando React encuentra una etiqueta HTML personalizada que hace referencia a otro componente (un nombre de componente envuelto en < /> como en este ejemplo), renderiza el marcado de ese componente en la ubicación de la etiqueta. Esto debería ilustrar la relación padre/hijo entre el componente App y Navbar, Dashboard, y Footer.


const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                { /* Cambia el código debajo de esta línea */}
                <ChildComponent />

                { /* Cambia el código encima de esta línea */}
            </div>
        );
    }
};





//= La composición de componentes es una de las características más poderosas de React. Cuando trabajas con React, es importante comenzar a pensar en tu interfaz de usuario en términos de componentes,

//-Debes dividir tu UI en sus bloques básicos de construcción, y esas piezas se convierten en los componentes.

//`Esto ayuda a separar el código responsable de la interfaz de usuario del código responsable de manejar la lógica de tu aplicación. Esto puede simplificar enormemente el desarrollo y el mantenimiento de proyectos complejos.

//? Hay 2 componentes funcionales, TypesOfFruit y Fruits.
//`Anidar TypesOfFruit dentro del componente Fruits.
//`Luego tomar Fruits y anidarlo a TypesOfFood.
//-El resultado es un componente hijo, anidado dentro de un componente padre, dentro de otro componente padre


const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };

  const Fruits = () => {
    return (
      <div>
        { /* Cambia el código debajo de esta línea */ }
        <TypesOfFruit />
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  };

  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Cambia el código debajo de esta línea */ }
            <Fruits />
          { /* Cambia el código encima de esta línea */ }
        </div>
      );
    }
  };


  //= Dentro de otros componentes, se puede añadir componentes funcionales sin estado, componentes de clase y renderizar elementos jsx.

  //- Para renderizar elementos JSX en el DOM, se usa ReactDOM

//`ReactDOM.render(componentToRender, targetNode)  Para los elementos JSX, pasas el nombre del elemento que deseas representar. Sin embargo, para los componentes de React, debes usar la misma sintaxis que si estuvieras renderizando un componente anidado, por ejemplo, ReactDOM.render(<ComponentToRender />, targetNode)
//- ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))