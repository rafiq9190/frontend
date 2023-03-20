import React from 'react'

function preloader() {
    return (
        <div>
            <div className="spinner-border m-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default preloader