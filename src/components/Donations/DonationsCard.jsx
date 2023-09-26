import { Link } from "react-router-dom";


const DonationsCard = ({donation}) => {

    const {id, image, title, category, card_bg, text_color, btn_bg} = donation || {}


    return (
        <div style={{backgroundColor:card_bg}}>
  <Link to={`/donations/${id}`}>   
<div className="card shadow-xl" style={{buttonBackgroundColor:btn_bg}}>
  <figure><img src={image} alt="" /></figure>
  <div className="card-body ">
  <div className="card-actions">
      <button className="btn  ml-6 lg:ml-0" style={{backgroundColor:card_bg, color: text_color}}>{category}</button>
    </div>
  
    <p className="text-lg ml-6 lg:ml-0  font-semibold" style={{color: text_color}}>{title}</p>
    
  </div>
</div>

</Link>
        
        </div>
    );
};

export default DonationsCard;

