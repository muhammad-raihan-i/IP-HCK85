
export default function Card2(properties){
    const {text, image, title, link} = properties;
    return(
        <div className="card">
            <img src={properties.image} alt={properties.title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{properties.title}</h5>
                <p className="card-text">{properties.description}</p>
                <a href={properties.link} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}