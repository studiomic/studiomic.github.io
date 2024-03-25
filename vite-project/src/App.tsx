import { useState } from 'react'
import logo from './assets/logo.svg'
// import './App.scss'
import Studioheader from './components/studio-header'
// import MainContent from './components/main'
// import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

	return (
    <div className="App">
			<header className="site-name">
				<h1>すたじおみっく。</h1>
			</header>
			<footer>
				<p><a href="https://www.studiomic.net/">www.studiomic.net</a></p>
			</footer>
    </div>
  )
}

export default App


