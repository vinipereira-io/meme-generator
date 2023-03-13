import memesData from '../memesData.js';
import React from 'react';

function Meme() {
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    const [meme, setMeme] = React.useState(
        {
            'topText': '',
            'bottomText': '',
            'randomImage': 'https://i.kym-cdn.com/entries/icons/original/000/037/615/cover2.jpg'
        }
    )

    function getMemeImage() {
        let memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevState => {
            return {
                ...prevState,
                'randomImage': memesArray[randomNumber].url
            }
        })
    }

    return (
        <div className='meme'>
            <div className='meme--inputs'>
                <input type='text' placeholder='Top text'></input>
                <input type='text' placeholder='Bottom text'></input>
            </div>
            <button onClick={getMemeImage}>Get a new meme image</button>
            <img src={meme.randomImage} className='meme--memeImage' />
        </div>
    )
}

export default Meme