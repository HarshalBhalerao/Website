import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';

function App()
{
    return(
        // <Navbar /> We can use the same Navbar for different pages, just make sure to remove the -80px of margin
        <Router>
            <Routes>
                <Route path = "/Website" element = {<Home />} exact />
            </Routes>
        </Router>
    );
}

export default App;