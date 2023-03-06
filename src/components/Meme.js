function Meme() {
    return (
        <div className='meme'>
            <div className='meme--inputs'>
                <input type='text' placeholder='Top text'></input>
                <input type='text' placeholder='Bottom text'></input>
            </div>
            <button>Get a new meme image</button>
        </div>
    )
}

export default Meme