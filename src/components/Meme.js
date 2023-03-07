import MemesData from '../memesData.js'

function Meme() {
    function getImage() {
        console.log(MemesData.data.memes[Math.floor(Math.random() * 100)].url);
    }

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