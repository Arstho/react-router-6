import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className='container'>
      <header className="App-header">
        <div>
          <h2>Cover</h2>
        </div>
        <div className='menu'>
          <Link to='/'>Home</Link>
          <Link to='/features'>Features</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <div className="footer">
        <p>Cover template for <a href="*">Bootstrap</a>, by <a href="*">@mdo</a>.</p>
      </div>
    </div>
  );
}

export default App;
