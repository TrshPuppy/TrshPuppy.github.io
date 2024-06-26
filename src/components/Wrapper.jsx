import { useLayoutEffect } from 'react';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';

const Wrapper = ({ View }) => {
   return (
      <div className="wrapper">
         <SiteHeader />
         <main>
            <View />
         </main>
         <SiteFooter />
      </div>
   );
};

export default Wrapper;
