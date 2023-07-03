import React from 'react'

export default function NewsItem(props){
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="card">
                    <img src={props.pic} height="150px" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title.slice(0,30)+"..."}</h5>
                            <h6 className='card-source'>{props.source.slice(0,10)+"..."} - {`${new Date(props.date).getFullYear()}/${new Date(props.date).getMonth()}/${new Date(props.date).getDay()}`}</h6><hr/>
                            <p className="card-text">{props.description.slice(0,100)+"..."} </p>
                            <a href={props.url} className="btn background w-100 btn-sm" >Read More</a>
                        </div>
                </div>
            </div>
        )
    
}
