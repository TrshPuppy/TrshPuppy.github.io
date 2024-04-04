import { useState } from 'react';
import HackTheBoxSVG from './svg/HackTheBox';
import TryHackMeSVG from './svg/TryHackMe';
import CodeWarsSVG from './svg/CodeWars';
import TwitterSVG from './svg/Twitter';
import YouTubeSVG from './svg/YouTube';
import GitHubSVG from './svg/GitHub';
import TwitchSVG from './svg/Twitch';

const Socials = () => {
   const [samp, setSamp] = useState('...');

   const handleHover = (linkName) => {
      if (!linkName) {
         setSamp('...');
      } else {
         setSamp(linkName);
      }
   };

   return (
      <div id="socials">
         <h2>Socials</h2>
         <ul className="external-links">
            <li className="link-github">
               <a
                  className="link github"
                  data-name="GitHub"
                  href="https://github.com/TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                  onMouseEnter={() => handleHover('Github')}
                  onMouseLeave={() => handleHover('')}
               >
                  <GitHubSVG />
               </a>
            </li>
            <li className="link-twitch">
               <a
                  className="link twitch"
                  data-name="Twitch"
                  href="https://www.twitch.tv/trshpuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitch"
                  onMouseEnter={() => handleHover('Twitch')}
                  onMouseLeave={() => handleHover('')}
               >
                  <TwitchSVG />
               </a>
            </li>
            <li className="link-youtube">
               <a
                  className="link youtube"
                  data-name="YouTube"
                  href="https://youtube.com/@TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Youtube"
                  onMouseEnter={() => handleHover('YouTube')}
                  onMouseLeave={() => handleHover('')}
               >
                  <YouTubeSVG />
               </a>
            </li>
            <li className="link-twitter">
               <a
                  className="link twitter"
                  data-name="Twitter"
                  href="https://twitter.com/trshpuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  onMouseEnter={() => handleHover('Twitter')}
                  onMouseLeave={() => handleHover('')}
               >
                  <TwitterSVG />
               </a>
            </li>
            <li className="link-codewars">
               <a
                  className="link codewars"
                  data-name="CodeWars"
                  href="https://www.codewars.com/users/TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Codewars"
                  onMouseEnter={() => handleHover('CodeWars')}
                  onMouseLeave={() => handleHover('')}
               >
                  <CodeWarsSVG />
               </a>
            </li>
            <li className="link-tryhackme">
               <a
                  className="link tryhackme"
                  data-name="TryHackMe"
                  href="https://tryhackme.com/p/TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Try hack me"
                  onMouseEnter={() => handleHover('TryHackMe')}
                  onMouseLeave={() => handleHover('')}
               >
                  <TryHackMeSVG />
               </a>
            </li>
            <li className="link-hackthebox">
               <a
                  className="link hackthebox"
                  data-name="HackTheBox"
                  href="https://app.hackthebox.com/profile/1343592"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Hack the box"
                  onMouseEnter={() => handleHover('Hack the Box')}
                  onMouseLeave={() => handleHover('')}
               >
                  <HackTheBoxSVG />
               </a>
            </li>
            <samp aria-live="polite" className="polka-dot">
               {samp}
            </samp>
         </ul>
      </div>
   );
};

export default Socials;
