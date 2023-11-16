import React from 'react'

const Testpage = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("type")
    const id = queryParameters.get("id")
    console.log(type);
    console.log(id);

    return (
        <div>testpage</div>
    )
}

export default Testpage