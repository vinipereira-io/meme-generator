import './App.css';
import Header from 'components/Header.js'
import Meme from 'components/Meme.js'

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Meme />
      </section>
    </div>
  );
}

export default App;
