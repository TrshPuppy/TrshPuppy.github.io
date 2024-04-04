const BadProjectRes = () => {
   return (
      <section>
         <div className="bad-project-res">
            <div className="bad-project-hero" aria-label={'Trshpuppy looking around...'}></div>
            <div className="something-wrong">
               <h1>Oops, something went wrong</h1>
               <p>
                  We couldn't load the projects right now. This happens when too many requests to the public Github API
                  occur. But don't worry, you can still check out my projects on GitHub.
               </p>
               <a className="github-url" href="https://github.com/TrshPuppy">
                  View Projects On Github
               </a>
            </div>
         </div>
      </section>
   );
};

export default BadProjectRes;
