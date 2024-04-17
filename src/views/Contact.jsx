import TwitchSVG from '../components/svg/Twitch.jsx';
import YouTubeSVG from '../components/svg/YouTube.jsx';
import GitHubSVG from '../components/svg/GitHub.jsx';
import TwitterSVG from '../components/svg/Twitter.jsx';
import PageTitle from '../components/PageTitle.jsx';

const Contact = () => {
   return (
      <>
         <PageTitle title="Contact" color="#ff93b7" />
         <article id="contact-view" className="contact view">
            <section>
               <div className="info">
                  <h2>Want to Chat?</h2>
                  <p>I'm active on a few platforms, please feel free to contact me on any of them.</p>
               </div>
            </section>
            <section>
               <div className="info">
                  <h2>
                     <TwitchSVG />
                     <span>Twitch</span>
                  </h2>
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
                  </a>
               </div>
               <div className="hero hero-twitch"></div>
            </section>
            <section>
               <div className="info">
                  <h2>
                     <GitHubSVG />
                     <span>GitHub</span>
                  </h2>
                  <p>
                     Dive into my repositories where you'll find a collection of hands-on learning projects designed to
                     enhance my cybersecurity skills. From beginner-friendly exercises to more advanced challenges, each
                     project offers valuable insights and practical experience.
                  </p>
                  <a
                     className="link youtube"
                     data-name="YouTube"
                     href="https://www.youtube.com/@TrshPuppy"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Twitch"
                  >
                     <span>View my GitHub</span>
                  </a>
               </div>
               <div className="hero hero-github"></div>
            </section>
            <section>
               <div className="info">
                  <h2>
                     <YouTubeSVG />
                     <span>YouTube</span>
                  </h2>
                  <p>
                     I keep a video blog documenting my journey and tech findings since I left my job as a nurse. Don't
                     forget to subscribe!
                  </p>
                  <a
                     className="link youtube"
                     data-name="YouTube"
                     href="https://www.youtube.com/@TrshPuppy"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="YouTube"
                  >
                     <span>Watch my YouTube stuffs</span>
                  </a>
               </div>
               <div className="hero hero-youtube"></div>
            </section>
            <section>
               <div className="info">
                  <h2>
                     <TwitterSVG />
                     <span>Twitter</span>
                  </h2>
                  <p>
                     Follow me on Twitter, where you can get the latest news on my journey into cybersecurity and read
                     about other fun stuff going on in my life and career.
                  </p>
                  <a
                     className="link twitter"
                     data-name="Twitter"
                     href="https://twitter.com/trshpuppy"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Twitter"
                  >
                     <span>Get the latest news about the Trash Heap!</span>
                  </a>
               </div>
               <div className="hero hero-twitter"></div>
            </section>
         </article>
      </>
   );
};

export default Contact;
