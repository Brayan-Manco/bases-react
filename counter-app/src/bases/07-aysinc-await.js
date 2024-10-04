

export const getImagen = async () => {

    try {

        const apiKey = 'gIQWnxV5Xz67ukJpapEYUJUgA4m4Zaj2';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data[0].images.original;


        return url;

    } catch (error) {
        console.log(error)
        return 'Imagen not found '
    }
}


