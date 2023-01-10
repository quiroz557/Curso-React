const getImagen = async() => {
    try {
        const apiKey = 'Ks2F6LXcZifNQLuXkvpb3TMU2ifB7ZJP';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        const { data } = await peticion.json()
        const { url } = data.images.original
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch (error) {
        console.error( error );
    }
}

getImagen();
