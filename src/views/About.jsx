import PageTitle from '../components/PageTitle.jsx';

const About = () => {
   return (
      <>
         <PageTitle title="About" color="#8ffff6" />
         <article id="about-view" className="about view">
            <section className="about-trshpuppy">
               <div className="hero loki-and-rose"></div>
               <div className="info">
                  <h2>Who is TrshPuppy?</h2>
                  <p>
                     TrshPuppy (Trash Puppy) is an internet persona inspired by my resilient dog, Loki. Named after his
                     humble beginnings as a discarded pup we found in a trash can, Loki's journey mirrors my own quest
                     for self-improvement and growth.
                  </p>
               </div>
            </section>
            <section className="about-trshpuppy">
               <div className="info">
                  <h2>My Journey</h2>
                  <p>
                     Much like Loki's story, I am dedicated to enhancing my life. After years in the demanding and
                     emotionally taxing world of E.R. nursing, I've redirected my path toward inspiration, creativity,
                     and honing my expertise in cybersecurity and programming.
                  </p>
               </div>
               <div className="hero rose"></div>
            </section>
            <section className="about-trshpuppy">
               <div className="hero loki-sunset"></div>
               <div className="info">
                  <h2>A Reminder</h2>
                  <p>
                     Trash Puppy is more than just our nickname. It's a reminder to keep pushing forward, whether it's
                     in cybersecurity, programming, or any other of the other many challenges life brings our way.
                  </p>
               </div>
            </section>
         </article>
      </>
   );
};

export default About;
