import React, { Component } from 'react';

class DogForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            input: {
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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
     

    handleChange(event) {
        this.setState({input: event.target.input})
    }

    handleSubmit(event) {
        event.preventDefault();
        const dog = {
            name: this.state.name,
            origin: this.state.origin,
            bred_for: this.state.bred_for,
            breed_group: this.state.breed_group,
            height: this.state.height,
            temperament: this.state.temperament,
            weight: this.state.weight, 
            image_url: this.state.image_url,
            life_span: this.state.life_span       
        };
        this.createNewDog(dog);
    }

    createNewDog(dog) {
        const url = "http://localhost:3000/dogbreeds"
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type":  "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(dog)
        })
        .then(res => res.json())
        .then(console.log("Dog Submitted!"))
    }

    render() {
        const { name, bred_for, temperament, weight, image_url, breed_group, height, origin, life_span} = this.state
         return (
            <div>
                <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                <label >Name:</label>
                <input type="text" name="name" value={name} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
                <label >Origin:</label>
                <input type="text" name="origin" value={origin} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
                <label >Bred For:</label>
                <input type="text" name="bred_for" value={bred_for} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
                <label >Temperament:</label>
                <input type="text" name="temperament" value={temperament} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
                <label >Weight:</label>
                <input type="text" name="weight" value={weight} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
                <label >Height:</label>
                <input type="text" name="height" value={height} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
                <label >Picture:</label>
                <input type="text" name="image_url" value={image_url} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
                <label >Life Span:</label>
                <input type="text" name="life_span" value={life_span} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
                <label >Breed Group:</label>
                <input type="text" name="breed_group" value={breed_group} onChange={this.handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        )
    }
}

export default DogForm;



//OLD USING REDUCER//


// import React, { useReducer} from "react";

// const initialState = {
//     name: '',
//     origin: '',
//     bred_for: '',
//     breed_group: '',
//     height: '',
//     temperament: '',
//     weight: '', 
//     image_url: '',
//     life_span: '',   
// }

// function reducer(state, {field, value}) {
//     return {
//         ...state,
//         [field]:value
//     }
// }

// export default function DogForm() {
//     const[state, dispatch] = useReducer(reducer, initialState);

//     const handleChange = (event) => {
//         dispatch({field: event.target.name, value: event.target.value});
//     }

//     const { name, bred_for, temperament, weight, image_url, breed_group, height, origin, life_span} = state

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const { name, bred_for, temperament, weight, image_url, breed_group, height, origin, life_span} = state
//         const dog = {
//             name: name,
//             bred_for: bred_for,
//             breed_group: breed_group,
//             temperament: temperament, 
//             weight: weight,
//             height: height,
//             origin: origin, 
//             life_span: life_span,
//             image_url: image_url
//         }
//         event.createNewDog(dog);
//     }

//     const createNewDog = (dog) => {
//         const url = "http://localhost:3000/dogbreeds"
//         fetch(url, {
//             method: "POST",
//             body: JSON.stringify(dog),
//             headers: {
//                 Content_Type: "application/json",
//             }
//         }) 
//         console.log("Form Submitted ")     
//     }

    
//     return (
//     <div>
//         <div className="form-group">
//           <form onSubmit={handleSubmit}>
//           <label >Name:</label>
//           <input type="text" name="name" value={name} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//           <label >Origin:</label>
//           <input type="text" name="origin" value={origin} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//           <label >Bred For:</label>
//           <input type="text" name="bred_for" value={bred_for} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//           <label >Temperament:</label>
//           <input type="text" name="temperament" value={temperament} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//           <label >Weight:</label>
//           <input type="text" name="weight" value={weight} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//           <label >Height:</label>
//           <input type="text" name="height" value={height} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//           <label >Picture:</label>
//           <input type="text" name="image_url" value={image_url} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//           <label >Life Span:</label>
//           <input type="text" name="life_span" value={life_span} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//           <label >Breed Group:</label>
//           <input type="text" name="breed_group" value={breed_group} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
//           <button type="submit" className="btn btn-primary">Submit</button>
//           </form>
//         </div>
//     </div>
//   )
// }