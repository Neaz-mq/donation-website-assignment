import swal from "sweetalert";


const DonationCard = ({ donation }) => {

  const { id, image, title, category, card_bg, text_color, btn_bg, description, price } = donation || {}

  const handleAddToDonates = () => {

    const addDonatesArray = [];

    const donateItems = JSON.parse(localStorage.getItem('donates'))

    if (!donateItems) {
      addDonatesArray.push(donation);
      localStorage.setItem('donates', JSON.stringify(addDonatesArray))
      swal("Good job!", "Donate add successful!", "success");
    }
    else {

      const isExists = donateItems.find(donation => donation.id === id)

      if (!isExists) {
        addDonatesArray.push(...donateItems,donation);
        localStorage.setItem('donates', JSON.stringify(addDonatesArray))
        swal("Good job!", "Donate add successful!", "success");
       
      }
      else{
        swal("Error!", "No duplicate!", "error");
      }



    }


  }

  


  return (
    <div className="flex justify-center py-7">
    <div className="card w-96 bg-base-100 shadow-xl object-cover">
    <figure><img src={image} alt="donate" /></figure>
   
      <div className="card-actions">
        <button  onClick={handleAddToDonates} className="btn  text-white ml-8" style={{backgroundColor:text_color}}>Donate ${price}</button>
      </div>
      <div className="card-body">
      <h2 className="card-title">{category}</h2>
      <p>{description}</p>
    </div>
  </div>
  
  </div>
   
  );
};

export default DonationCard;

