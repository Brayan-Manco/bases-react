const apiKey = 'gIQWnxV5Xz67ukJpapEYUJUgA4m4Zaj2';
const peticion = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`);

peticion
    .then( resp => resp.json())
    .then( ({data}) =>{
        const { url } = data[0].images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    })
    .catch(console.warn);