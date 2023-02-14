const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/sushi.jpg" alt="Sushi Roll" id='sushi'/>
                    <div>
                        Photo by <a href="https://unsplash.com/pt-br/@abillion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">abillion</a> on <a href="https://unsplash.com/photos/i4jrjvPQCXQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>    
            </main>  
        </Def>
    )
}

module.exports = home