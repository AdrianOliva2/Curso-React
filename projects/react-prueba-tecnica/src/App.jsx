import './App.css';
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact';

export function App () {
    const { fact, refreshFact } = useCatFact();
    const { imageUrl } = useCatImage({ fact });

    const hanleClick = () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>

            <button onClick={hanleClick}>Get new fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}/>}
        </main>
    )
}