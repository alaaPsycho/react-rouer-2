import React, { Component } from 'react';
import data from './Data'
export default class Details extends Component {


render(){

    let Id = this.props.match.params.id;
    console.log(this.props)
    let getData = data.CardData[Id -1]


      console.log(this.props)

      const { history } = this.props;
        return (
            <section className='py-4 py-lg-5 container shadow mb-4 ' >
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <img src={getData.img} alt='img' style={{width:'800PX'}} className='text-center'/>
                    <h1>{getData.title}</h1>
                    <p>
                        {getData.desc}
                    </p>

                    <button onClick={()=>history.push('/')} className="btn btn-primary">Go home</button>

                </div>
            </div>
            </section>
        )
        }
}






