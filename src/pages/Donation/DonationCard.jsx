import swal from "sweetalert";


const DonationCard = ({ donation }) => {

  const { id, image, title, category, card_bg, text_color, btn_bg, description, price } = donation || {}

  const handleAddToDonation = () => {

    const addDonationsArray = [];

    const donationItems = JSON.parse(localStorage.getItem('donations'))

    if (!donationItems) {
      addDonationsArray.push(donation);
      localStorage.setItem('donations', JSON.stringify(addDonationsArray))
      swal("Good job!", "Product add successful!", "success");
    }
    else {

      const isExists = donationItems.find(donation => donation.id === id)

      if (!isExists) {
        addDonationsArray.push(...donationItems, donation);
        localStorage.setItem('favorites', JSON.stringify(addDonationsArray))
        swal("Good job!", "Product add successful!", "success");
       
      }
      else{
        swal("Error!", "No duplicate!", "error");
      }



    }


  }



  return (
    <div className="flex justify-center">
    <div className="card  w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
   
   
    <div className="card-actions justify-start">
      <button onClick={handleAddToDonation} className="btn bg-[#FF444A] text-white">Donate ${price}</button>
    </div>
   
  </div>
 
</div>
<p className="absolute py-96 text-2xl text-black font-semibold mr-72 ml-10">{category}</p>
<p className="absolute py-96 mt-10 font-semibold text-left">{description}</p>

</div>
  

   
  );
};

export default DonationCard;

