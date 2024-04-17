import SiteHeader from './SiteHeader.jsx';

const Wrapper = ({ View }) => {
   return (
      <div className="wrapper">
         <SiteHeader />
         <main>
            <View />
         </main>
      </div>
   );
};

export default Wrapper;
