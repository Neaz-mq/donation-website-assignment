

const DonatesCard = ({donation}) => {


  const { id, image, title, category, card_bg, text_color, btn_bg, description, price, price_color } = donation || {}



    return (
      <div >
        <div className="flex justify-center items-center h-[50vh]" >
                       <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{backgroundColor:card_bg}}>
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <button className="btn"  style={{backgroundColor:card_bg, color: text_color}}>{category}</button>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    { title}
    </h4>
    <p className="text-xl font-semibold" style={{color: price_color }}>${price}</p>
    
    <a className="inline-block" href="#">
      <button className="btn text-white mt-3" style={{backgroundColor:text_color}}>View Details</button>
    </a>
  </div>
</div>
        </div>
        </div>
    );
};

export default DonatesCard;