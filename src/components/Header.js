import Capybara from 'media/capybara.png'

function Header() {
    return (
        <div className='header'>
            <div className='header--brand'>
                <img className='header--brand--logo' src={Capybara}></img>
                <h2 className='header--brand--name'>Capybara</h2>
            </div>
            <p>Meme Generator</p>
        </div>
    )
}

export default Header