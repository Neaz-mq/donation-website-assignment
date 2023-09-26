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
    <div className="relative w-full lg:w-[600px] mx-auto">
          {/* Image */}
          <img
            src={image}
            className="w-[100%] object-contain rounded-lg"
            
          />

          {/* Donate button */}
          <div className="bg-[#0b0b0b80] h-28 md:h-24 lg:h-24 w-[100%] absolute bottom-0 p-10 bg-opacity-25">
            <button
            onClick={handleAddToDonates}
              className="p-1 md:p-3 rounded text-xl font-semibold text-white mr-8 -mt-3 -ml-4"
              style={{backgroundColor:text_color}}
            >
              Donate ${price}
            </button>
            <div className="card-body lg:-ml-16 mt-6 lg:mt-0 -ml-12">
            <h2 className="card-title mr-12 ">{category}</h2>
           <p>{description}</p>
          </div>
          </div>
        </div>
   
  );
};

export default DonationCard;

