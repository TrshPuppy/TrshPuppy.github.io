import TwitchSVG from '../components/svg/Twitch.jsx';
import YouTubeSVG from '../components/svg/YouTube.jsx';
import GitHubSVG from '../components/svg/GitHub.jsx';
import PageTitle from '../components/PageTitle.jsx';

const Contact = () => {
   return (
      <>
         <PageTitle title="Contact" color="#ff93b7" />
         <article id="contact-view" className="contact view">
            <section>
               {/* <div className="hero hero-about"></div> */}
               <div className="info">
                  <h2>Want to Chat?</h2>
                  <p>I'm active on a few platforms, please feel free to contact me on any of them.</p>
               </div>
            </section>
            <section>
               <div className="info">
                  <h2>Twitch</h2>
                  <p>
                     Join us in our thriving Twitch community where we explore cybersecurity, programming, and a bit of
                     everything in between - from AI art horrors to coding, and even chair building. We have a large and
                     friendly community, come say hi!
                  </p>
                  <a
                     className="link twitch"
                     data-name="Twitch"
                     href="https://www.twitch.tv/trshpuppy"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Twitch"
                  >
                     <span>Visit the Trash Heap on Twitch</span>
                     <TwitchSVG />
                  </a>
               </div>
               <div className="hero hero-twitch"></div>
            </section>
            <section>
               <div className="info">
                  <h2>GitHub</h2>
                  <p>fjoawiejf wioejf a;iowjf</p>
                  <a
                     className="link youtube"
                     data-name="YouTube"
                     href="https://www.youtube.com/@TrshPuppy"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Twitch"
                  >
                     <span>View my GitHub</span>
                     <GitHubSVG />
                  </a>
               </div>
               <div className="hero hero-github"></div>
            </section>
            <section>
               <div className="info">
                  <h2>Twitter</h2>
                  <p>
                     I keep a video blog documenting my journey and tech findings since I left my job as a nurse. Don't
                     forget to subscribe!
                  </p>
                  <a
                     className="link twitter"
                     data-name="Twitter"
                     href="https://www.youtube.com/@TrshPuppy"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Twitter"
                  >
                     <span>Watch my Twitter stuffs</span>
                     <YouTubeSVG />
                  </a>
               </div>
               <div className="hero hero-twitter"></div>
            </section>
            <section>
               <div className="info">
                  <h2>GitHub</h2>
                  <p>Github stuffs</p>
                  <a
                     className="link github"
                     data-name="GitHub"
                     href="https://www.youtube.com/@TrshPuppy"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="GitHub"
                  >
                     <span>View my GitHub</span>
                     <GitHubSVG />
                  </a>
               </div>
               <div className="hero hero-github"></div>
            </section>
         </article>
      </>
   );
};

export default Contact;
