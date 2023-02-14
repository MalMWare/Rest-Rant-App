const React = require('react')
const Def = require('./default') 

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't load this page!</p>
                <div>
                    <img src="http://placekitten.com/500/500" alt="cat picture" id='kitty'></img>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404