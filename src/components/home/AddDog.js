import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addDog } from '../../actions/dogActions';

export class AddDog extends Component {

    state = {
        name: '', 
        bred_for: '',
        breed_group: '',
        origin: '',
        weight: ''
    }
    
    onChange = e => {
        //take value of input and sets the value and use it inside searchdogbreed action
        //triggers dispatch
        const {target: {name, value}} = e;
        this.setState({ [name] : value});
    }
  
    onSubmit = e => {
        e.preventDefault();
        console.log('before action')
        this.props.addDog(this.state)
        console.log('after action')
        this.setState({
            name: '', 
            bred_for: '',
            breed_group: '',
            origin: '',
            weight: ''
        });
    }
    render() {
        return (
        <section className='section search'>
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label> Name:</label>
                    <input type='text' onChange={this.onChange} value={this.state.name} name='name' className='form-control' />
                    <label>Bred For:</label>
                    <input type='text' onChange={this.onChange} value={this.state.bred_for} name='bred_for' className='form-control'/>
                    <label>Breed Group:</label>
                    <input type='text' onChange={this.onChange} value={this.state.breed_group} name='breed_group' className='form-control'/>
                    <label>Origin:</label>
                    <input type='text' onChange={this.onChange} value={this.state.origin} name='origin' className='form-control'/>
                    <label>Weight:</label>
                    <input type='text' onChange={this.onChange} value={this.state.weight} name='weight' className='form-control' />
                    <button type="submit" className="btn btn-primary">Add Dog</button>
                </div>
            </form>     
        </section>
        )
    }
}

const mapStateToProps = state => ({
  text: state.dogbreeds.text
})

export default connect(mapStateToProps, {addDog})(AddDog);