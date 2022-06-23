import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>We will buy your car no matter the condition!!!</h1>
      </div>
      <div className='navBar'>
        <img className='logo' src='/logo.png' height='100px'></img>
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
        <div className='topContent'>
          <h1>Business and sale of all things automotive</h1>
        </div>
        <div className='carImages1'>
          <img src='/car01.png'></img>
          <img src='/car02.png'></img>
          <img src='/car03.png'></img>
        </div>
        <div className='aboutUs'>
          <h1>About Us:</h1>
          <h2>ince Eurasia Motorwerks opened for business, we have made it our focus to connect car shoppers to quality used inventory. No matter what your budget or your needs, we are confident we can help find the right vehicle at a great price. Contact us today with your auto shopping questions and we'll be sure to get you the information you need to buy with confidence at Eurasia Motorwerks.</h2>
        </div>
        <div className='carImages1'>
          <img src='/car04.png'></img>
          <img src='/car05.png'></img>
        </div>
        <div className='contact'>
          <h1>Contact Us:</h1>
        </div>
        <div className='carImages1'>
          <img src='/car06.png'></img>
          <img src='/car07.png'></img>
          <img src='/car08.png'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
