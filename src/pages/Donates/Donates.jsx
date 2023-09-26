import React, { useEffect, useState } from 'react';
import DonatesCard from './DonatesCard';

const Donates = () => {


    const [isShow, setIsShow] = useState(false);
    const [donates, setDonates] = useState([]);
    const [noFound, setNoFound] = useState(false)

    useEffect(()=> {
        const donateItems = JSON.parse(localStorage.getItem('donates'));
      
      
        if(donateItems){
            setDonates(donateItems);
            
            

          }
          else{
            
            setNoFound('no data found');
          }

    }, [])

    console.log(donates);

    const handleRemove = () =>{
        localStorage.clear()
        setDonates([])
        setNoFound('no data found');
    }




    return (
        <div>
        {noFound ? (
          <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
        ) : (
          <div>
            {donates.length > 0 && (
              <div>
                  <button
                onClick={handleRemove}
                className="px-5 bg-green-200 block mx-auto"
              >
                Deleted All donations
              </button>
  
             
              </div>
            )}
  
            <div className="grid grid-cols-2 gap-5">
              {
                  isShow ? donates.map((donation) => (
                    

                    <DonatesCard key={donation.id} donation={donation}></DonatesCard>
                    )) 
                    
                    : donates.slice(0,4).map((donation) => (
                        <DonatesCard key={donation.id} donation={donation}></DonatesCard>
                    ))
              }
            </div>
  
            {donates.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-500 p-3 rounded block mx-auto text-white font-semibold md:mt-24 mt-32 lg:mt-0">
              {isShow ? "See less" : "See All"}
            </button>}
          </div>
        )}
      </div>
    );
};

export default Donates;