const React = require('react')
const Def = require('../default')

function Edit ({place}) {
    return (
        <Def>
            <main>
                <h1>Edit Restaurant!</h1>
                <form method="POST" action={`/places/${place.id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" type='text' name="name" defaultValue={place.name}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" defaultValue={place.pic} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" defaultValue={place.city}/>                    
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" defaultValue={place.state}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" defaultValue={place.cuisines} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded</label>
                        <input className="form-control" 
                            id="founded" 
                            name="founded" 
                            value={place.founded} 
                        />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Update Place"  />
                </form>
            </main>
        </Def>
    )
}

module.exports = Edit