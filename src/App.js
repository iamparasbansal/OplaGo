import "./styles/all.styles.css";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Carousel } from "./components/Carousel";

const carouselData = [
	{
		timeline: "5 days left to enroll",
		heading: "IBS PO & SBI PO Live Coaching",
		liveClasses: "240",
		questions: "9000",
		notes: "120",
	},
	{
		timeline: "Starts in 15 days",
		heading: "Civil Junior engineer Live Coaching",
		liveClasses: "200",
		questions: "5000",
		notes: "80",
	},
	{
		timeline: "Batch closes in 2 days",
		heading: "UPSC CDS - 2 2021 Live Coacing",
		liveClasses: "220",
		questions: "6000",
		notes: "100",
	},
];

function App() {
	return (
		<div className="App">
			<div className="app-container">
				<div className="heading">
					<div className="left">
						<ul className="live">
							<li>LIVE</li>
						</ul>
						<h3>Upcoming Live Coaching</h3>
					</div>
					<div className="button-container">
						<button
							className="button prev-btn"
							type="button"
							data-bs-target="#carouselExampleControls"
							data-bs-slide="prev"
						>
							<NavigateNextIcon />
						</button>
						<button
							className="button"
							type="button"
							data-bs-target="#carouselExampleControls"
							data-bs-slide="next"
						>
							<NavigateNextIcon />
						</button>
					</div>
				</div>
				<Carousel carouselData={carouselData} />
			</div>
		</div>
	);
}

export default App;
