import SiteHeader from './SiteHeader.jsx';

const Wrapper = ({ View }) => {
   return (
      <div className="wrapper">
         <SiteHeader />
         <main>
            <View />
         </main>
         <div id="arth-tribute">
            <p>
               {'Thank you to '}
               <a href="https://github.com/arthvadrr" target="_blank" rel="noreferrer">
                  arthvadrr
               </a>
               {' who took my site & made it beautiful!'}
            </p>
         </div>
      </div>
   );
};

export default Wrapper;
