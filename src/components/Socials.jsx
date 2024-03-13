import HackTheBoxSVG from "./svg/HackTheBox";
import TryHackMeSVG from "./svg/TryHackMe";
import CodeWarsSVG from "./svg/CodeWars";
import TwitterSVG from "./svg/Twitter";
import YouTubeSVG from "./svg/YouTube";
import GitHubSVG from "./svg/GitHub";
import TwitchSVG from "./svg/Twitch";


const Socials = () => {
   return (
      <section className="socials">
         <ul className="external-links">
            <li key="link-github">
               <a
                  className="link github"
                  data-name="GitHub"
                  href="https://github.com/TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
               >
                  <GitHubSVG />
                  <div>Github</div>
               </a>
            </li>
            <li key="link-twitch">
               <a
                  className="link twitch"
                  data-name="Twitch"
                  href="https://www.twitch.tv/trshpuppy"
                  target="_blank"
                  rel="noreferrer"
               >
                  <TwitchSVG />
                  <div>Twitch</div>
               </a>
            </li>
            <li key="link-youtube">
               <a
                  className="link youtube"
                  data-name="YouTube"
                  href="https://youtube.com/@TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
               >
                  <YouTubeSVG />
                  <div>Youtube</div>
               </a>
            </li>
            <li key="link-twitter">
               <a
                  className="link twitter"
                  data-name="Twitter"
                  href="https://twitter.com/trshpuppy"
                  target="_blank"
                  rel="noreferrer"
               >
                  <TwitterSVG />
                  <div>Twitter</div>
               </a>
            </li>
            <li key="link-codewars">
               <a
                  className="link codewars"
                  data-name="CodeWars"
                  href="https://www.codewars.com/users/TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
               >
                  <CodeWarsSVG />
                  <div>CodeWars</div>
               </a>
            </li>
            <li key="link-tryhackme">
               <a
                  className="link tryhackme"
                  data-name="TryHackMe"
                  href="https://tryhackme.com/p/TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
               >
                  <TryHackMeSVG />
                  <div>TryHackMe</div>
               </a>
            </li>
            <li key="link-hackthebox">
               <a
                  className="link hackthebox"
                  data-name="HackTheBox"
                  href="https://app.hackthebox.com/profile/1343592"
                  target="_blank"
                  rel="noreferrer"
               >
                  <HackTheBoxSVG />
                  <div>HackTheBox</div>
               </a>
            </li>
         </ul>
      </section>
   )
}

export default Socials;