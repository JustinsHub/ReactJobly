import React, {useState, useEffect} from 'react'
import JoblyApi from '../api'

const Companies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [company, setCompany] = useState([])

    useEffect(() => {
        const getCompanies = async () => {
        let company = await JoblyApi.request('companies');
        setCompany(company)
        setIsLoading(false)
        }
        getCompanies()
    },[])

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }
    
    return (
        <div>
            {company.map(c => c)}
        </div>
    )
}

export default Companies