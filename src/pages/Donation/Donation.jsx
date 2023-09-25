import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";


const Donation = () => {


    const [donation, setDonation] = useState({})

    const {id} = useParams()

    const donations = useLoaderData()

    useEffect(()=>{

        
        const findDonation = donations?.find(donation=>donation.id === id)
       
        setDonation(findDonation);

    }, [id, donations])
    console.log(donation);

    return (
        <div>
       <DonationCard donation={donation}></DonationCard>     
        </div>
    );
};

export default Donation;