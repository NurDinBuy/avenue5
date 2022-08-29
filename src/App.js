import './App.css';

import {AboutUs, Benefits, Header, Preview, Projects} from './components'

function App() {
    return (
        <div className="App">
            <Header />
            <Preview />
            <AboutUs />
            <Projects />
            <Benefits />
        </div>
    );
}

export default App;