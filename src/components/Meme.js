import memesData from '../memesData.js'

function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url);
    }

    const [memeImage, setMemeImage] = React.useState('')

    return (
        <div className='meme'>
            <div className='meme--inputs'>
                <input type='text' placeholder='Top text'></input>
                <input type='text' placeholder='Bottom text'></input>
            </div>
            <button onClick={getImage}>Get a new meme image</button>
        </div>
    )
}

export default Meme