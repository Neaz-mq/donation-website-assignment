

const DonationsCard = ({donation}) => {

    const {id, image, title, category} = donation || {}


    return (
        <div>
  
<div className="card  bg-base-100 shadow-xl">
  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
  <div className="card-actions">
      <button className="btn btn-primary">{category}</button>
    </div>
  
    <p>{title}</p>
    
  </div>
</div>
        </div>
    );
};

export default DonationsCard;

