import { render } from 'preact';
import DivThing from './portfolio';
import Nav from './fragments/nav';
import './style.css';


export function App() {
	return (
		<div>
			<Nav/>
			<Content />
			<DivThing
			text="TIDDIES"
			 />
				
			
		</div>
	);
}

function Content(props){
	// Get current URL from window:
	const currentEndpoint = window.location.href;
	console.log(currentEndpoint.split("/")[3])
	
	// Make decisions regarding content to serve based on endpoint:
	switch(currentEndpoint.split("/")[3]){
		case "portfolio":
			return <div>
				<p>Wlecom to the portfolio</p>
			</div>
		default:
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
