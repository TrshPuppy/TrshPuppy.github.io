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

    const playClickSound = () => {
        const audio = new Audio('/audio/click.mp3');
        audio.volume = 0.2;
        audio.play();
    };  

    const linkColors = {
        hackthebox: '#d3ee98',
        tryhackme: '#ffeb81',
        codewars: '#F05656',
        youtube: '#F50003',
        twitter: '#2C96E8',
        github: '#E6EDF3',
        twitch: '#A960FF'
    };

    const textColors = {
        hackthebox: '#2A3909',
        tryhackme: '#2E2700',
        codewars: '#FFFFFF',
        youtube: '#FFFFFF',
        twitter: '#FFFFFF',
        github: '#000000',
        twitch: '#FFFFFF'
    };

    const updateHoveredLinkName = e => {
        const dataName = e.target.getAttribute('data-name');
        const dataColor = e.target.getAttribute('data-color');
        const textColor = e.target.getAttribute('data-text-color');

        if (dataName) {
          dispatch({
            type: 'UPDATE_HOVERED_LINK_NAME',
            payload: dataName,
          });
        }

        if (dataColor) {
            dispatch({
                type: 'UPDATE_HOVERED_LINK_COLOR',
                payload: dataColor,
            });
        }

        if (textColor) {
            dispatch({
                type: 'UPDATE_HOVERED_TEXT_COLOR',
                payload: textColor
            })
        }
      };

    const resetLink = () => {
        dispatch({ type: 'UPDATE_HOVERED_LINK_NAME', payload: '' });
        dispatch({ type: 'UPDATE_HOVERED_LINK_COLOR', payload: '' });
    }

    return (
        <nav>
            <img src="/img/logo-1.webp" alt="Trash Puppy Logo."/>
            <ul>
                <li key="nav-link-home" className="nav-link-home">
                    <NavLink
                        to={ '/' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                        onClick={() => playClickSound()}
                    >
                        <span>Home</span>
                        <HomeSVG/>
                    </NavLink>
                </li>
                <li key="nav-link-projects" className="nav-link-projects">
                    <NavLink
                        to={ '/projects' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                        onClick={() => playClickSound()}
                    >
                        <span>Projects</span>
                        <FlaskSVG/>
                    </NavLink>
                </li>
                <li key="nav-link-blog" className="nav-link-blog">
                    <NavLink
                        to={ '/blog' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                        onClick={() => playClickSound()}
                    >
                        <span>Blog</span>
                        <CoffeeSVG/>
                    </NavLink>
                </li>
                <li key="nav-link-about" className="nav-link-about">
                    <NavLink
                        to={ '/about' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                        onClick={() => playClickSound()}
                    >
                        <span>About</span>
                        <PawSVG/>
                    </NavLink>
                </li>
                <li key="nav-link-contact" className="nav-link-contact">
                    <NavLink
                        to={ '/contact' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                        onClick={() => playClickSound()}
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
                        style={{
                            backgroundColor: state.hoveredLinkColor,
                            filter: `drop-shadow(0 0 2px ${state.hoveredLinkColor})`,
                            color: state.hoveredTextColor
                        }}
                    >{state.hoveredLinkName}</samp>
                </div>
                <ul 
                    className="external-links"
                    onMouseLeave={() => resetLink()}
                >
                    <li key="link-github">
                        <a 
                            className="link github" 
                            data-name="GitHub"
                            data-color={linkColors.github}
                            data-text-color={textColors.github}
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
                            data-color={linkColors.twitch}
                            data-text-color={textColors.twitch}
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
                            data-color={linkColors.youtube}
                            data-text-color={textColors.youtube}
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
                            data-text-color={textColors.twitter}
                            data-color={linkColors.twitter}
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
                            data-color={linkColors.codewars}
                            data-text-color={textColors.codewars}
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
                            data-color={linkColors.tryhackme}
                            data-text-color={textColors.tryhackme}
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
                            data-color={linkColors.hackthebox}
                            data-text-color={textColors.hackthebox}
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