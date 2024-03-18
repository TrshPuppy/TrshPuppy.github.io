import Loader from '../components/Loader.jsx';
import TwitchSVG from '../components/svg/Twitch.jsx';

const Contact = () => {
   return (
      <article id="contact-view" className="contact view">
         <section>
            <div className="hero hero-about"></div>
            <div className="info">
               <h2>Want to Chat?</h2>
               <p>I'm active on a few platforms, please feel free to contact me on any of them.</p>
            </div>
         </section>
         <section>
            <div className="info">
               <h2>Twitch</h2>
               <p>Join us in our thriving Twitch community where we explore cybersecurity, programming, and a bit of
                  everything in between - from AI art horrors to coding, and even chair building.
                  We have a large and friendly community, come say hi!
               </p>
               <a
                  className="link twitch"
                  data-name="Twitch"
                  href="https://www.twitch.tv/trshpuppy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitch"
               >
                  <span>Visit the Trash Heap </span>
                  <TwitchSVG />
               </a>
            </div>
            <div className="hero hero-twitch"></div>
         </section>
         <section>
            <div className="hero hero-youtube"></div>
            <div className="info">
               <h2>Youtube</h2>
               <p>About youtube</p>
            </div>
         </section>
         <section>
            <h2>Github</h2>
            <div className="hero hero-github"></div>
            <div className="info">
               <p>About twitch</p>
               <div className="hero hero-github"></div>
            </div>
         </section>
      </article>
   );
};

export default Contact;