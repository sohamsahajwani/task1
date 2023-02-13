import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./ImageSlider.css"


const ImageSlider = () => {
  return (
    <div>
      <div  className='image'>
      <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="1.jpeg" style={{width: "100vw", height:"80vh"}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="NavCarousal.jpeg" style={{width: "100vw", height:"80vh"}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="3.jpeg" style={{width: "100vw", height:"80vh"}} alt="" />
      </Carousel.Item>
    </Carousel>
      </div>

      <div className='circle'>
        <div className='bjj'>bajaj</div>
        <div><p>consumer care</p></div>
      </div>
      <div className='circle2'></div>


      <div className='six-cr'>
        <h3>6+ CRORE Satisfied Customers and Counting...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam nisi numquam maiores veritatis aliquam aperiam praesentium similique ipsum optio tempora officiis unde saepe quod quis, itaque enim modi consequuntur id explicabo non, illo laboriosam? Libero nostrum sed fugit a dolorum totam non, odio laboriosam, fugiat assumenda ab consequatur? Porro, non doloribus! Expedita perferendis debitis hic culpa aliquam. Consectetur cum ea architecto repudiandae porro rem, in quibusdam, labore impedit, aut officiis voluptate. Consectetur provident, distinctio, error delectus minus illum totam beatae commodi maiores unde corporis, cupiditate autem? Hic atque, commodi dignissimos nobis cupiditate assumenda adipisci ipsam? Numquam harum aperiam impedit?</p>
        <div className='buttons'>
          <div className='button1'>KNOW MORE ABOUT BAJAJ CONSUMER CARE</div>
          <div className='button1'>KNOW MORE ABOUT BAJAJ GROUP</div>
        </div>
      </div>
      <div className='prnt'>
        <img src="4.jpeg" alt=""/>
        <img src="5.jpeg" alt=""/>
        </div>
    </div>
  )
}

export default ImageSlider
