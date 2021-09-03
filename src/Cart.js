import React from 'react'

function Cart(props) {
    console.log(props);
    return (
        // <>
            
        //     <li className="produt-name-cart list-group-item d-flex justify-content-between align-items-center">
        //         <h6>{props.details.title}</h6>
        //             <span className="badge square-pill">&#8377;{props.details.price}</span>
        //         <button className="deleteButton" onClick={() => {props.onDelete(props)}}><i className="fas fa-trash-alt trashh"></i></button>
        //       </li>
        // </>

        <>
            <div className="row produt-name-cart">
                <div className="col-lg-6">
                <h6>{props.details.title}</h6>
                </div>

                <div className="col-lg-3">
                <span className="badge square-pill">&#8377;{props.details.price}</span>
                </div>

                <div className="col-lg-3">
                <button className="deleteButton" onClick={() => {props.onDelete(props)}}><i className="fas fa-trash-alt trashh"></i></button>
                </div>
            </div>
        </>
    )
}

export default Cart
