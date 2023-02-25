const React = require('react')
const Def = require('../default')

function show ({place, id}) {
    function commentForm() {
        return (
          <form method='POST' action={`/places/${place.id}/comment`} className='comment-form'>
          <legend className='comment-legend'><h4>Add A Comment</h4></legend>
          <div className='comment-auth'>
              <label htmlFor='author'>Author: </label>
              <input
                  type='text'
                  name='author'
              />
          </div>
          <div className='comment-stars'>
              <label htmlFor="stars">Rating: </label>
              <input
                  type="number"
                  name='stars'
                  step='0.5'
                  min='0.5'
                  max='5'
                  defaultValue='0.5'
              />
          </div>
          <div className='comment-rant'>
              <label htmlFor="rant">Rant: </label>
              <input
                  type="checkbox"
                  name='rant'
                  value='rant'
              />
          </div>
          <div className='comment-content'>
              <label htmlFor="content">Content: </label>
              <textarea
                  name="content"
                  rows='5'
              ></textarea>
          </div>
          <div className='comment-submit'>
              <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
      </form>
        )
    }
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (place.comments.length) {
        comments = place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars} </h4>
                </div>
            )
        })
    }
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
                {comments} {commentForm()}
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