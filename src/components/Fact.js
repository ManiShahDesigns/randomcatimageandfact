import React from 'react'

import Loading from './Loading';

function Fact({ fact, loading, fetchFacts, cat }) {

    return <div class="container text-center">
        <button className="btn btn-light" onClick={fetchFacts}>CLICK ME!</button>

        {loading ? <Loading /> : (<div className="card fact mt-4">
            {fact.text}
        </div>)}

        {loading ? <p>Getting a random cat fact and image...</p> :
            (
                <div className="image-wrapper mt-3">

                    <img src={cat.url} alt={cat.name} />

                </div>
            )
        }
    </div>


}

export default Fact;    