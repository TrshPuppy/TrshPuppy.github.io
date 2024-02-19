import TrafficLights from './TrafficLights.jsx';

const Terminal = ({windowTitle, children}) => {
   return (
      <div className="terminal">
         <TrafficLights />
         <h2 className="window-title">{ windowTitle }</h2>
         <div className="content">
            {children}
         </div>
      </div>
   )
}

export default Terminal;