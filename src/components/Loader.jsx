const Loader = () => {
   return (
      <div className="loader" aria-label="loading">
         <div className="lights">
            <div className="light home"></div>
            <div className="light projects"></div>
            <div className="light blog"></div>
            <div className="light about"></div>
            <div className="light contact"></div>
         </div>
         <div>Loading</div>
      </div>
   );
};

export default Loader;
