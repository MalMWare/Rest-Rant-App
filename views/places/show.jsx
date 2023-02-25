const React = require('react')
const Def = require('../default')

function show ({place, id}) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    return (
        <Def>
            <main>
                <h1>
                    { place.name }
                </h1>
                <div className='imgContainer'>
                    <img src={place.pic} alt={place.name} id={place.id}/>
                    <p>Photo by <a href={place.credit}></a> {place.creditName} on <a href={place.source}></a> {place.sourceName}</p>
                </div> 
                <h3>Rating</h3>
                <p>Not Rated</p>
                <h3>Description</h3>
                <p>{ place.city }, { place.state }</p>
                <p>{ place.showEstablished() }</p>
                <p>Serving { place.cuisines }</p>
                <h2>Comments</h2>
                {comments}
                <a href={`/places/${place.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show