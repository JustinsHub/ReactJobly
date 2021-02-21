import React from 'react'
import StateContext from './StateContext'

const StateContextWrapper = ({children}) => {
    return (
        <StateContext.Provider>
        {children}
        </StateContext.Provider>
    )
}

export default StateContextWrapper