import React from 'react'
import StateContext from './StateContext'

const StateContextWrapper = ({children}) => {
    return (
        <StateContext>
        {children}
        </StateContext>
    )
}

export default StateContextWrapper