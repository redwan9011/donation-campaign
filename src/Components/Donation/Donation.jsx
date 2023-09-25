import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [donations, setDonation] = useState([])
    const [nodonation, setNoDonation] = useState(false)

    const [ isShow, setIsShow] = useState(false)
 
    useEffect( () => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if(donationItems){
            setDonation(donationItems)
        }
        else{
           setNoDonation('No one donation here')
        }

        
    }, [])
    

    return (
        <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-0">
           {
            nodonation ? <p className="h-[70vh] flex justify-center items-center font-bold text-red-600 text-3xl">{nodonation}</p> : <div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-8">
                {
                   isShow ?  donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>) : 

                   donations.slice(0,4).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>

            </div>
           }

           {
            donations.length > 4 ?  <div className="text-center mt-5 mb-5">
            <button onClick={()=> setIsShow(!isShow)} className="btn">{isShow ? 'Show Less' : 'Show All'}</button>
        </div> : ''

           }



        </div>
    );
};

export default Donation;