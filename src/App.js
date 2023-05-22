
import './App.css';
import NavBar from './components/navBar';
import LandingPage from "./components/landingPage"
import { Route,Routes } from 'react-router-dom';
import Login  from './components/Login';
import Listings from './components/Listings';
import Footer from './components/footer';
// import { useState } from 'react';


const properties = [
  {
    id: 1,
    title: "Luxurious Penthouse",
    location: "City Center",
    description: "Stunning penthouse with panoramic views",
    address: "123 Main Street, City Center",
    date: "2023-05-01",
  },
  {
    id: 2,
    title: "Spacious Family Home",
    location: "Suburbia",
    description: "Ideal home for a growing family",
    address: "456 Elm Avenue, Suburbia",
    date: "2023-05-05",
  },
  {
    id: 3,
    title: "Cozy Apartment",
    location: "Downtown",
    description: "Charming apartment in the heart of the city",
    address: "789 Oak Street, Downtown",
    date: "2023-05-10",
  },
  {
    id: 4,
    title: "Beachfront Villa",
    location: "Seaside",
    description: "Exquisite villa with direct beach access",
    address: "321 Palm Road, Seaside",
    date: "2023-05-15",
  },
  {
    id: 5,
    title: "Modern Loft",
    location: "Urban District",
    description: "Sleek loft with an industrial design",
    address: "654 Vine Lane, Urban District",
    date: "2023-05-20",
  },
  {
    id: 6,
    title: "Charming Cottage",
    location: "Countryside",
    description: "Quaint cottage nestled amidst nature",
    address: "987 Hillside Road, Countryside",
    date: "2023-06-01",
  },
  {
    id: 7,
    title: "Lakeview Retreat",
    location: "Lakefront",
    description: "Serene retreat with stunning lake views",
    address: "741 Shoreline Drive, Lakefront",
    date: "2023-06-05",
  },
  {
    id: 8,
    title: "Historic Mansion",
    location: "Old Town",
    description: "Elegant mansion showcasing rich history",
    address: "369 Heritage Street, Old Town",
    date: "2023-06-10",
  },
  {
    id: 9,
    title: "Cosmopolitan Condo",
    location: "City Center",
    description: "Modern condo in the heart of the city",
    address: "852 Central Avenue, City Center",
    date: "2023-06-15",
  }
];



function App() {
  // const [searchInput, setSearchInput] = useState("");
  const result = properties;
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/Listings' element={<Listings result={result}/>}></Route>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
        </Routes>
        <Footer/>
        
        
        
       
    </div>
  );
}

export default App;
