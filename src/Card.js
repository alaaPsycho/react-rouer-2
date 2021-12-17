import React, { Component } from 'react';
import {Link,Route,Routes} from 'react-router-dom';
export default class Card extends Component {
    render() {
        return (
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4 shadow'>
            <div className="card" style={{width: '18rem'}}>
               <img src={this.props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.desc}</p>
            
    
                    <Link  to={this.props.link} className="btn btn-primary">Details</Link>

          
              </div>
             </div>
            </div>

        )
    }
}
