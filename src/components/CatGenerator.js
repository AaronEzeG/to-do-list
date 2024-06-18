import { useState } from "react";

const API_URL ="https://meowfacts.herokuapp.com/"

export function CatGenerator(){

    const [phraseState, setPhraseState] = useState('')

    async function handleClick() {
        console.log('generando...');

        const response = await fetch(API_URL)

        if (response.ok) {
            const data = await response.json()
            setPhraseState(data.data[0])
        }
    }
    return (
    <>
        <button onClick={handleClick}>Generar Frase Gatuna</button>

        <p>{phraseState}</p>
    </>
    )
}