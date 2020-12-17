import React, { useContext, useEffect, useState } from "react"
import { MetarContext } from "./MetarsProvider"


export const MetarList = (props) => {
    const { metars, getMetars } = useContext(MetarContext)

    useEffect(() => {
        getMetars()
    }, [])

    return (
        <>
        <article>
        {
            metars.map(metars => {
                return <section>
                    <div className="card" style={{width: "20rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{metars.raw}</h5>
                            <h6 className="card-subtitle mb-2 text-muted"></h6>
                        </div>
                    </div>
                </section>
    })
}
</article>
    </>
    )
}
