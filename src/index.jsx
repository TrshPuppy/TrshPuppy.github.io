import { render} from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Nav from './fragments/nav';
import './assets/style.css';
import Portfolio from './portfolio';


function App() {
	return (
		<div>
			<Nav/>
			<Content />
		</div>
	);
}

export function Content(){
	const [endPoint, setEndpoint] = useState("index");

	const onURLChange = () => {
		const currentURL = window.location.href.split("/")[3]
		setEndpoint(currentURL);
		return;
	}

	useEffect(() =>{
		window.addEventListener("load", onURLChange);
		return () => window.removeEventListener("load", onURLChange)
	},[]);
	console.log(`endpoint = ${endPoint}`)
	switch(endPoint){
		
		case "portfolio":
			console.log('switch portfolio')
			return <Portfolio/>
				
		default:
			console.log('switch default')
			return <div>
				<p>this is the defualt</p>
			</div>
	}
}

render(<App />, document.getElementById('app'));



/*
BASIC HTML STRUCTURE:
	Nav bar  <----always the same
		logo
		about
		home
	Section <---- different but mostly the same (image + description p)
	Section <------ differs
		About:
			description
			link bar
		Contact
			grid of contact buttons w/ images
		Portfolio
			list of writeups
	...
	Footer


*/
