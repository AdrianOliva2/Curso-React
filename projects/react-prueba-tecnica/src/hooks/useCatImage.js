import { useState, useEffect } from "react";

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/';

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        if (!fact) return;

        const threeFirstWords = fact.split(' ', 3).join(' ');

        setImageUrl(threeFirstWords);
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}