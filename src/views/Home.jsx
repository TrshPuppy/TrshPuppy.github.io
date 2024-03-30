import Socials from '../components/Socials.jsx';
import PageTitle from '../components/PageTitle.jsx';
import HomeLinks from '../components/HomeLinks.jsx';

const Home = () => {
   return (
      <>
         <PageTitle title="TrshPuppy" color="#ff91f8" />
         <article id="home-view" className="home view">
            <section className="welcome">
               <div>
                  <h2>Welcome to the Trash Heap.</h2>
                  <p>
                     Here you'll find various writeups and projects I've been working on, all related to cybersecurity
                     and coding!
                  </p>
                  <Socials />
               </div>
               <div className="hero hero-welcome" aria-hidden="true"></div>
            </section>
            <HomeLinks />
         </article>
      </>
   );
};

export default Home;
