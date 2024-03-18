import Loader from '../components/Loader.jsx';

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
               <p>About twitch</p>
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