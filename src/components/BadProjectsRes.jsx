import GitHubSVG from './svg/GitHub';

const BadProjectRes = () => {
   return (
      <section className="view">
         <div className="bad-project-res">
            <div className="bad-project-hero" aria-label={'Trshpuppy looking around...'}></div>
            <div className="something-wrong">
               <h1>Oops! Something went wrong...</h1>
               <p>
                  We couldn't load the projects right now.
                  <br /> This happens when too many requests to the Github public API.
                  <br /> But don't worry, you can still check out my projects on GitHub.
               </p>
               <a className="github-url" href="https://github.com/TrshPuppy">
                  <span>View Projects On Github</span>
                  <GitHubSVG />
               </a>
            </div>
         </div>
      </section>
   );
};

export default BadProjectRes;
