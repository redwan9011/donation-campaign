
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";


const Statistics = () => {

    const totaldonations = useLoaderData()
    const totaldonation = totaldonations.length;
    
    const [donations, setDonation] = useState([])
    useEffect( () => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if(donationItems){
            setDonation(donationItems)
        }
       
        
    }, [])
   const myDonation = donations.length

    const data = [
        ["Donation", "Donation per person"],
        ["Your Donation", myDonation],
        ["Total Donation", totaldonation ],
        
        
      ];
      
    return (
        <div>
          
         <Chart
      chartType="PieChart"
      data={data}
      
      width={"100%"}
      height={"400px"}
    />
        </div>
    );
};

export default Statistics;


