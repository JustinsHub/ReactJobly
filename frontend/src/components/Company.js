import React, {useParams} from 'react'

const Company = () => {
    const {company} = useParams()
    return (
        <div>
            Single Company 
        </div>
    )
}

export default Company