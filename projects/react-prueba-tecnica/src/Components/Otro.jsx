import { useCatImage } from "../hooks/useCatImage";

export function Otro() {
    const fact = 'cat'
    const { imageUrl } = useCatImage({ fact });

    return (
        <>
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}/>}
        </>
    )
}