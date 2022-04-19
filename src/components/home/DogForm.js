import axios from 'axios';
import React, { Component } from 'react';

//Controlled Form Component
const apiEndPoint = "http://localhost:3000/dogbreeds";

class DogForm extends Component {

    state = {
        dogbreeds: [],
        dogbreed: {
            name: '',
            origin: '',
            bred_for: '',
            breed_group: '',
            height: '',
            temperament: '',
            weight: '', 
            image_url: '',
            life_span: '' 
        }
    };


    async componentDidMount() {
        const { data: dogbreeds } = await axios.get(apiEndPoint);
        this.setState({ dogbreeds });
    };

    handleChange = ({currentTarget: input}) => {
        const dogbreed = {...this.state.dogbreed};
        dogbreed[input.name] = input.value;
        this.setState({ dogbreed });
    };

    handleSubmit = async() => {
        const obj = this.state;
        const { data: dogbreed } = await axios.post(apiEndPoint, obj);
        const dogbreeds = [dogbreed, ...this.state.dogbreeds];
        this.setState({ dogbreeds});
    };


    // handleSubmit = e => {
    //     e.preventDefault();
    // }; 
    
   

    render() {
        const { dogbreed } = this.state;
        return (
            <div>
                <h1>Dog Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group"><label htmlFor="name"></label>Name:<input onChange={this.handleChange} value={dogbreed.name} name="name" id="name" type="text" className="form-control" /></div>
                    <div className="form-group"><label htmlFor="bred_for"></label>Bred For:<input onChange={this.handleChange} value={dogbreed.bred_for} name="bred_for" id="bred_for" type="text" className="form-control" /></div>
                    <div className="form-group"><label htmlFor="group"></label>Group:<input onChange={this.handleChange} value={dogbreed.breed_group} name="breed_group" id="group" type="text" className="form-control" /></div>
                    <div className="form-group"><label htmlFor="life_span"></label>Life Span:<input onChange={this.handleChange} value={dogbreed.life_span} name="life_span" id="life-span" type="text" className="form-control" /></div>
                    <div className="form-group"><label htmlFor="temperament"></label>Temperament:<input onChange={this.handleChange} value={dogbreed.temperament} name="temperament" id="temperament" type="text" className="form-control" /></div>
                    <div className="form-group"><label htmlFor="weight"></label>Weight:<input onChange={this.handleChange} value={dogbreed.weight} name="weight" id="weight" type="text" className="form-control" /></div>
                    <div className="form-group"><label htmlFor="height"></label>Height:<input onChange={this.handleChange} value={dogbreed.height} name="height" id="height" type="text" className="form-control" /></div>
                    <div className="form-group"><label htmlFor="origin"></label>Origin:<input onChange={this.handleChange} value={dogbreed.origin} name="origin" id="origin" type="text" className="form-control" /></div>
                    <div className="form-group"><label htmlFor="image"></label>Image:<input onChange={this.handleChange} value= {dogbreed.image_url} name="image_url" id="image" type="text" className="form-control" /></div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>     
            </div>
        );
    }
}

export default DogForm;





// import React, { Component } from 'react';

// class DogForm extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             input: {
//             name: '',
//             origin: '',
//             bred_for: '',
//             breed_group: '',
//             height: '',
//             temperament: '',
//             weight: '', 
//             image_url: '',
//             life_span: ''  
//             }       
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this); 
//     }
     

//     handleChange(event) {
//         this.setState({input: event.target.input})
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         const dog = {
//             name: this.state.name,
//             origin: this.state.origin,
//             bred_for: this.state.bred_for,
//             breed_group: this.state.breed_group,
//             height: this.state.height,
//             temperament: this.state.temperament,
//             weight: this.state.weight, 
//             image_url: this.state.image_url,
//             life_span: this.state.life_span       
//         };
//         this.createNewDog(dog);
//     }

//     createNewDog(dog) {
//         const url = "http://localhost:3000/dogbreeds"
//         fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type":  "application/json",
//                 Accept: "application/json"
//             },
//             body: JSON.stringify(dog)
//         })
//         .then(res => res.json())
//         .then(console.log("Dog Submitted!"))
//     }

//     render() {
//         const { name, bred_for, temperament, weight, image_url, breed_group, height, origin, life_span} = this.state
//          return (
//             <div>
//                 <div className="form-group">
//                 <form onSubmit={this.handleSubmit}>
//                 <label >Name:</label>
//                 <input type="text" name="name" value={name} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//                 <label >Origin:</label>
//                 <input type="text" name="origin" value={origin} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//                 <label >Bred For:</label>
//                 <input type="text" name="bred_for" value={bred_for} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//                 <label >Temperament:</label>
//                 <input type="text" name="temperament" value={temperament} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//                 <label >Weight:</label>
//                 <input type="text" name="weight" value={weight} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//                 <label >Height:</label>
//                 <input type="text" name="height" value={height} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//                 <label >Picture:</label>
//                 <input type="text" name="image_url" value={image_url} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//                 <label >Life Span:</label>
//                 <input type="text" name="life_span" value={life_span} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//                 <label >Breed Group:</label>
//                 <input type="text" name="breed_group" value={breed_group} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default DogForm;


