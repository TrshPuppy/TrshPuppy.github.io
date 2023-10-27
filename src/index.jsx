import { render} from 'preact';
import { useEffect, useState } from 'preact/hooks';
import DivThing from './portfolio';
import Nav from './fragments/nav';
import './style.css';


function App() {
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

export function Content(props){
	const [endPoint, setEndpoint] =useState("index");

	const onURLChange = () => {
		const currentURL = window.location.href.split("/")[3]
		setEndpoint(currentURL);
		return;
	}

	useEffect(() =>{
		window.addEventListener("load", onURLChange);
		return () => window.removeEventListener("load", onURLChange)
	},[]);

	switch(endPoint){
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
