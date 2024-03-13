import HackTheBoxSVG from './svg/HackTheBox';
import TryHackMeSVG from './svg/TryHackMe';
import CodeWarsSVG from './svg/CodeWars';
import TwitterSVG from './svg/Twitter';
import YouTubeSVG from './svg/YouTube';
import GitHubSVG from './svg/GitHub';
import TwitchSVG from './svg/Twitch';


const Socials = () => {
   return (
      <section className="socials">
         <div className="hero socials-hero" aria-hidden="true"></div>
         <ul className="external-links">
            <h2>Socials</h2>
            <li className="link-github">
               <div className="description">
                  <h3>Github</h3>
                  <p>This is where I keep all of my trash projects. Feel free to star some!</p>
               </div>
               <a
                  className="link github"
                  data-name="GitHub"
                  href="https://github.com/TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
               >
                  <GitHubSVG />
               </a>
            </li>
            <li className="link-twitch">
               <div className="description">
                  <h3>Twitch</h3>
                  <p>I stream all kinds of content regularly on Twitch. Drop by and say hi!</p>
               </div>
               <a
                  className="link twitch"
                  data-name="Twitch"
                  href="https://www.twitch.tv/trshpuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitch"
               >
                  <TwitchSVG />
               </a>
            </li>
            <li className="link-youtube">
               <div className="description">
                  <h3>Youtube</h3>
                  <p>
                     My vlog for my journey into the dev world. My videos highlight important milestones in learning.
                  </p>
               </div>
               <a
                  className="link youtube"
                  data-name="YouTube"
                  href="https://youtube.com/@TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Youtube"
               >
                  <YouTubeSVG />
               </a>
            </li>
            <li className="link-twitter">
               <div className="description">
                  <h3>Twitter</h3>
                  <p>It isn't all trash! See what hot topics are being discussed.</p>
               </div>
               <a
                  className="link twitter"
                  data-name="Twitter"
                  href="https://twitter.com/trshpuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
               >
                  <TwitterSVG />
               </a>
            </li>
            <li className="link-codewars">
               <div className="description">
                  <h3>CodeWars</h3>
                  <p>Coding challenges? Yes please! Join our clan!</p>
               </div>
               <a
                  className="link codewars"
                  data-name="CodeWars"
                  href="https://www.codewars.com/users/TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Codewars"
               >
                  <CodeWarsSVG />
               </a>
            </li>
            <li className="link-tryhackme">
               <div className="description">
                  <h3>TryHackMe</h3>
                  <p>
                     A dark room, a black hoodie, and hacking challenges are a must for a trshpuppy.
                  </p>
               </div>
               <a
                  className="link tryhackme"
                  data-name="TryHackMe"
                  href="https://tryhackme.com/p/TrshPuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Try hack me"
               >
                  <TryHackMeSVG />
               </a>
            </li>
            <li className="link-hackthebox">
               <div className="description">
                  <h3>HackTheBox</h3>
                  <p>
                     Tearing down the firewalls with my mighty puppy teeth, I will SSH into the whole world!
                  </p>
               </div>
               <a
                  className="link hackthebox"
                  data-name="HackTheBox"
                  href="https://app.hackthebox.com/profile/1343592"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Hack the box"
               >
                  <HackTheBoxSVG />
               </a>
            </li>
         </ul>
      </section>
   );
};

export default Socials;