const React = require('react')
const Def = require(`../default`) 

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        <div className="col-sm-6">
          <h2 className="text-center">
            <a href={`/places/${place.id}`}>
              {place.name}
            </a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <div className='imgContainer'>
            <img src={place.pic} alt={place.name} class={place.class}/>
            <p>Photo by <a href={place.credit}></a> {place.creditName} on <a href={place.source}></a> {place.sourceName}</p>
          </div>  
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant/Rave About!</h1>
              <div className="row">
                {placesFormatted}
              </div>  
          </main>
      </Def>
  )
}
  

module.exports = index