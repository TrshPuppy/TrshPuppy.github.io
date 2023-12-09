import { useReducer } from "react"
import { NavLink } from "react-router-dom";
import initialState from "../initialState";
import reducer from "../reducer";
//Nav Item SVGs
import CoffeeSVG from "./svg/Coffee";
import FlaskSVG from "./svg/Flask";
import HomeSVG from "./svg/Home";
import PawSVG from "./svg/Paw";
//Link SVGs
import HackTheBoxSVG from "./svg/HackTheBox";
import TryHackMeSVG from "./svg/TryHackMe";
import CodeWarsSVG from "./svg/CodeWars";
import TwitterSVG from "./svg/Twitter";
import YouTubeSVG from "./svg/YouTube";
import GitHubSVG from "./svg/GitHub";
import TwitchSVG from "./svg/Twitch";

const Nav = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHoveredLinkName = (e) => {
        const dataName = `${e.target.getAttribute('data-name')} ↗`;
    
        if (dataName) {
          dispatch({
            type: 'UPDATE_HOVERED_LINK_NAME',
            payload: dataName,
          });
        }
      };

    const resetLinkName = () => dispatch({ type: 'UPDATE_HOVERED_LINK_NAME', payload: '' });

    return (
        <nav>
            <img src="/img/logo-1.webp" alt="Trash Puppy Logo."/>
            <ul>
                <li key="nav-link-home">
                    <NavLink
                        to={ '/' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                    >
                        <span>Home</span>
                        <HomeSVG/>
                    </NavLink>
                </li>
                <li key="nav-link-projects">
                    <NavLink
                        to={ '/projects' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                    >
                        <span>Projects</span>
                        <FlaskSVG/>
                    </NavLink>
                </li>
                <li key="nav-link-about">
                    <NavLink
                        to={ '/about' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                    >
                        <span>About</span>
                        <PawSVG/>
                    </NavLink>
                </li>
                <li key="nav-link-contact">
                    <NavLink
                        to={ '/contact' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                    >
                        <span>Contact</span>
                        <CoffeeSVG/>
                    </NavLink>
                </li>
            </ul>
            <div className="socials">
                <div role="region" id="linkInfo" aria-live="polite">
                    <samp 
                        id="hoveredLinkName"
                        className={state.hoveredLinkName ? "active" : ""}
                    >{state.hoveredLinkName}</samp>
                </div>
                <ul 
                    className="external-links"
                    onMouseLeave={() => resetLinkName()}
                >
                    <li key="link-github">
                        <a 
                            className="link github" 
                            data-name="GitHub"
                            onMouseEnter={e => updateHoveredLinkName(e)}
                            href="https://github.com/TrshPuppy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubSVG />
                        </a>
                    </li>
                    <li key="link-twitch">
                        <a 
                            className="link twitch" 
                            data-name="Twitch"
                            onMouseEnter={e => updateHoveredLinkName(e)}
                            href="https://www.twitch.tv/trshpuppy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitchSVG />
                        </a>
                    </li>
                    <li key="link-youtube">
                        <a 
                            className="link youtube" 
                            data-name="YouTube"
                            onMouseEnter={e => updateHoveredLinkName(e)}
                            href="https://youtube.com/@TrshPuppy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <YouTubeSVG />
                        </a>
                    </li>
                    <li key="link-twitter">
                        <a 
                            className="link twitter" 
                            data-name="Twitter"
                            onMouseEnter={e => updateHoveredLinkName(e)}
                            href="https://twitter.com/trshpuppy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitterSVG />
                        </a>
                    </li>
                    <li key="link-codewars">
                        <a 
                            className="link codewars" 
                            data-name="CodeWars"
                            onMouseEnter={e => updateHoveredLinkName(e)}
                            href="https://www.codewars.com/users/TrshPuppy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <CodeWarsSVG />
                        </a>
                    </li>
                    <li key="link-tryhackme">
                        <a 
                            className="link tryhackme" 
                            data-name="TryHackMe"
                            onMouseEnter={e => updateHoveredLinkName(e)}
                            href="https://tryhackme.com/p/TrshPuppy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TryHackMeSVG />
                        </a>
                    </li>
                    <li key="link-hackthebox">
                        <a 
                            className="link hackthebox" 
                            data-name="HackTheBox"
                            onMouseEnter={e => updateHoveredLinkName(e)}
                            href="https://app.hackthebox.com/profile/1343592"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <HackTheBoxSVG />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;