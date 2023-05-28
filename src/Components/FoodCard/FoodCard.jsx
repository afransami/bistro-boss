import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const FoodCard = ({item}) => {
const {name, image, price, recipe, _id}= item;

const {user}= useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()

const handleAddToCart =(item)=>{
  console.log(item);
  if(user && user.email){
    const cartItem = {menuItemId: _id, name, image, price, email: user.email}
    fetch('http://localhost:5000/carts',{
      method: "POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(cartItem)
    })
      .then (res=>res.json())
      .then (data =>{
        if (data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your food added on the cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })        
  }
  else{
    Swal.fire({
      title: 'Please login to order the food',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Login Now!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          navigate('/login', {state: {from:location}} )
          // navigate(from, {replace:true})
        )
      }
    })
  }

}



  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-full h-[300px] bg-contain"
        />
      </figure>
      <div className="badge badge-primary font-bold text-lg top-14 right-10 absolute">$ {price}</div>
      {/* <p><small>{price}</small></p> */}
      <div className="card-body bg-gray-100 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline btn-warning border-0 border-b-4 mt-4 text-yellow-500">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
