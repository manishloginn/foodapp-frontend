import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./home.css"
import { Action } from '../store/action'
import Cart from './Cart'

function Home() {


  const allData = useSelector((e) => e.data)
  const dispatch = useDispatch()


  const haldelcart = (item) => {
    console.log("hit")
    dispatch({ type: Action.CART, payload: item })
  }

  // console.log(cart)

  return (
    <>
      <div className='homeproduct'>
        {allData && allData.map((item, i) => {
          return (
            <>
              <div className='productItem' key={item._id}>
                <div className='restrname' key={item.restrauntName}>
                  <p>By {item.restrauntName}</p>
                  <hr />
                </div>
                <div className='lowersection' key={item.name}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <img src={`http://localhost:5000/${item.image}`}></img>
                    <button onClick={() => haldelcart(item)} style={{ marginTop: "-20px", border: "1px solid grey", width: "100px", background: "white", color: "green", fontWeight: "800", fontSize: "20px" }}>ADD</button>
                  </div>

                  <div className='otherside'>
                    <p className='name'>{item.name}</p>
                    <h5> ₹{item.price}</h5>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )

}

export default Home
