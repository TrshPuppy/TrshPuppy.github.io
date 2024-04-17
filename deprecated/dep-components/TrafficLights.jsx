const TrafficLights = () => {
   const trafficLights = [
      '#FF5E57',
      '#FEBB2E',
      '#28C740',
   ];

   return (
      <div className="traffic-lights" aria-hidden="true">
         { trafficLights.map((colorIndex, i) => (
            <div
               key={ `flashy-${ i }` }
               className="traffic-light"
               style={ { color: `${ trafficLights[i] }` } }
            ></div>
         )) }
      </div>
   )
}

export default TrafficLights;