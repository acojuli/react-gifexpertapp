import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    // Inicializamos el hook
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Disparamos un efecto
    // Efecto para que solo cambie cuando se modifica la category
    useEffect( () => {
        // Peticion http
        // Esperamos a que se dispare una tarea asincrona 
        getGifs ( category )
            // Traemos las imagenes
            .then( imgs => {
                    // Cambiamos nuevamente el estado
                    setState({
                        data: imgs,
                        loading: false
                    });
            })
                      

    }, [category])

    return state; // { data:[], loading: true};
}