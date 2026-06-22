import React from 'react'
import Card from './components/Card';
import santorini from './assets/images/santorini.jpg';
import paris from './assets/images/paris.jpg';
import bali from './assets/images/bali.jpg';
import maldive from './assets/images/maldive.jpg';
import  newyork from './assets/images/newyork.jpg';
import  swiss from './assets/images/swiss.jpg';
import dubai from './assets/images/dubai.jpg';
import tokyo from './assets/images/tokyo.jpg'


const App = () => {

  const travelPlaces = [
  {
    id: 1,
    image: paris,
    place: "Paris, France",
    price: "$5,000",
    description: "Experience the Eiffel Tower, charming cafés, and romantic city vibes.",
    badge: "Top Pick",
    vibesLeft: "Only 4 vibes left"
  },
  {
    id: 2,
    image: bali,
    place: "Bali, Indonesia",
    price: "$3,800",
    description: "Relax on tropical beaches while exploring lush jungles and waterfalls.",
    badge: "Rare",
    vibesLeft: "Only 8 vibes left"
  },
  {
    id: 3,
    image: santorini,
    place: "Santorini ",
    price: "$4,700",
    description: "Enjoy breathtaking sunsets with iconic white-and-blue architecture.",
    badge: "Ultimate",
    vibesLeft: "Only 5 vibes left"
  },
  {
    id: 4,
    image: dubai,
    place: "Dubai, UAE",
    price: "$4,200",
    description: "Discover luxury shopping, futuristic skyscrapers, and desert adventures.",
    badge: "Top Pick",
    vibesLeft: "Only 6 vibes left"
  },
  {
    id: 5,
    image: tokyo,
    place: "Tokyo, Japan",
    price: "$5,500",
    description: "Explore cutting-edge technology mixed with timeless Japanese culture.",
    badge: "Rare",
    vibesLeft: "Only 3 vibes left"
  },
  {
    id: 6,
    image: maldive,
    place: "Maldives",
    price: "$6,800",
    description: "Stay in overwater villas surrounded by crystal-clear turquoise waters.",
    badge: "Ultimate",
    vibesLeft: "Only 2 vibes left"
  },
  {
    id: 7,
    image: swiss,
    place: "Swiss Alps",
    price: "$5,900",
    description: "Witness majestic mountains, snowy peaks, and unforgettable train journeys.",
    badge: "Top Pick",
    vibesLeft: "Only 7 vibes left"
  },
  {
    id: 8,
    image: newyork,
    place: "New York, USA",
    price: "$4,900",
    description: "Experience iconic landmarks, Broadway shows, and vibrant city life.",
    badge: "Rare",
    vibesLeft: "Only 5 vibes left"
  }
];


  return (
    <div className='container'>
     {travelPlaces.map((elem) => {
        return <Card image =  {elem.image} place = {elem.place} price ={elem.price} description = {elem.description} badge = {elem.badge} vibesLeft = {elem.vibesLeft} />  
     })}

    </div>
  )
}

export default App
