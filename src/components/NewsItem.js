import React from 'react'

const NewsItem = (props) => {

    var {title, description, imageUrl, url} = props;
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target='_blank' rel="noreferrer" className="btn btn-primary">Go read it</a>
            </div>
        </div>
    )
}

export default NewsItem