import React from "react";


function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
  
          //Debemos inicializar un arreglo de todos para los que si tienen contenido en local storage
          let parsedItem;
  
          if (!localStorageItem) {
            // EN EL CASO DE QUE EL USER NO TENGA NINGUN TODO, SE INICIALIZARA UN ARREGLO CON TODOS POR DEFECTO
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            //INICIALIZAMOS UN ARREGLO CON DATA DE LOCALSTORAGE
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          //Cuando ya cargó cambiamos el estado del loading,
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 3000);
    });
  
    // Para almacenar los cambios de estado en el componente y en localStorage
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error)
      }
    };
  
    return {
      item,
      saveItem,
      loading,
    };
}

export {useLocalStorage};