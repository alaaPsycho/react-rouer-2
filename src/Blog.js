import React, { Component } from 'react';
import Card from './Card';
import Data from './Data';
export default class Blog extends Component {
  
    
    render() {
        return (
                <div className='py-4 py-lg-5 container'>
                   <div className='row justify-content-center'>

                    {Data.CardData.map((item,index)=>{
                        return(
                            <Card key={index} img={item.img} desc={item.desc} title={item.title} link={`/Details/${item.id}`}/>
                        )
                    })}
                     
                </div>
                </div>

            )
    }
}
