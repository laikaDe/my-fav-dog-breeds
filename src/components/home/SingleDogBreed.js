
const SingleDogBreed = (props) => {

    return(
        <div className="container">
          <div className="row">
            <div className="col-md-4 card card-body"><img src={props.dogbreed.image_url} className="thumbnail" alt="Poster" /> </div>
            <div className="col-md-8">
              <h2 className="mb-4">{props.dogbreed.name}</h2>
              <ul className="list-group">
                <li className="list-group-item"><strong>Bred for:</strong> {props.dogbreed.bred_for}</li>
                <li className="list-group-item"><strong>Group:</strong> {props.dogbreed.breed_group}</li>
                <li className="list-group-item"><strong>Life Span:</strong> {props.dogbreed.life_span}</li>
                <li className="list-group-item"><strong>Temperament:</strong> {props.dogbreed.temperament}</li>
                <li className="list-group-item"><strong>Weight:</strong> {props.dogbreed.weight} pounds</li>
                <li className="list-group-item"><strong>Height:</strong> {props.dogbreed.height} inches</li>
              </ul>
            </div>
          </div>
        </div>
    );
}

export default SingleDogBreed