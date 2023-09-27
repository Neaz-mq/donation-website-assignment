import { useEffect, useState } from "react";

const useGetAllDonations = () => {
    
    const [donations,setDonations] = useState()
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{

        fetch(`/donations.json`)
        .then(res=>res.json())
        .then(data=>{
            setDonations(data)
            setIsLoading(false)
        })
        .catch(e=>{
            setIsLoading(false)
        })

    },[])

    return [donations,isLoading]

};

export default useGetAllDonations;