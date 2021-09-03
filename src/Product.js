import React from "react";
import { useState } from "react";
import StarRating from './Star';


function Product(props) {
    const [rating, setRating] = useState(props.product.rating);
    const handleChange = (value) => {
        setRating(value);
      }
      console.log(window.location.origin);
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={`${window.location.origin}/images/${props.product.filename}`} height="250px"alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{props.product.title}</a>
                        </h4>
                        <h5>&#8377; {props.product.price}</h5>
                        <p className="card-text">{props.product.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <StarRating
                                count={5}
                                size={40}
                                value={rating}
                                activeColor={'#206a5d'}
                                inactiveColor={'#ddd'}
                                onChange={handleChange} 
                            />
                        </small>
                        <div className="add-btn">
                        <button className="btn btn-primary" id={props.product.id} disabled={props.product.isDisabled} onClick={() => { props.onAdd(props.product) }}>Add</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Product;