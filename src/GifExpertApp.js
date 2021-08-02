import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Pokemon'])

    // const handleAdd = () => {

    //     setCategories( [ ...categories, 'Ranma' ] );
    //     // Definimos un callback en el cual el primer argumento es el estado anterior y luego el nuevo estado que tieen que regresar.
    //     // setCategories( cats => [ ...cats, 'Ranma '] );
    // }



    return (
        <>
            <h2>GIFs Search Engine</h2>
            <p>Place the text you want in the search box and press enter. Then the app will show related GIFs.</p>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } />

                    ))
                }
            </ol>
        </>
    );
    };

export default GifExpertApp;