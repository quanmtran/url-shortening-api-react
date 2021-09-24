import './App.css';

// Import components
import HeaderContainer from './components/HeaderContainer';
import ShortenLinkContainer from './components/ShortenLinkContainer';
import StatisticsContainer from './components/StatisticsContainer';
import CardsContainer from './components/CardsContainer';
import BoostContainer from './components/BoostContainer';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<HeaderContainer />
			<ShortenLinkContainer />
			<StatisticsContainer />
			<CardsContainer />
			<BoostContainer />
			<Footer />
		</div>
	);
}

export default App;
