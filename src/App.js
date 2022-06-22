import './App.css';

function App() {
  return (
    <div className="App">
      <div className='navBar'>
        <img className='logo' src='/logoWhite.png' height='100px'></img>
        <div className='buttons'>
          <h1>Home</h1>
          <h1>For Sale</h1>
          <h1>About Us</h1>
          <h1>Contact</h1>
        </div>
        <div className='textBox'>
          <h1>Meerkat Motors</h1>
          <h1>2503 Newby Rd SW</h1>
          <h1>(256)-665-1645</h1>
        </div>
      </div>
      <div className='pageContnet'>
        <div className='centerBoxBottom'>
          <div className='centerBoxTop'>
            <h1>WE BUY</h1>
            <h1>USED CARS</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
