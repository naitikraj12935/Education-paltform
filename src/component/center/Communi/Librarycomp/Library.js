import React from 'react'
import LibraryCard from './Librarycard'
import './Library.css'
export default function Library() {
    const mylibrary=[
        {   id:0,
            name:"Bhagavad Geeta",
            image:"https://tse3.mm.bing.net/th?id=OIP.BADE-WsbEPOe66aBBjhFKwHaLd&pid=Api&P=0&h=180",
            by:"vaysa"
           
        },
        {   
            id:1,
            name:"Rich Dad Poor Dad",
            image:"https://tse2.mm.bing.net/th?id=OIP.ztAUYljdHqvc6XktUBA-agHaLG&pid=Api&P=0&h=180",
            by:"Robert Kiyosaki"
            
        },
        {   id:2,
            name:"The Great Gatsby",
            image:"https://tse4.mm.bing.net/th?id=OIP.56NnR9KvQ-a88tjpiOwJ0wHaLH&pid=Api&P=0&h=180",
            by:"F.scott fitgerald "
           
        },
        {   id:3,
            name:"IKIGAI",
            image:"https://cdn2.penguin.com.au/covers/original/9781786330895.jpg",
            by:" Francesc Miralles, Hector Garcia"
            
        },
        
        {   id:5,
            name:"The Alchemist",
            image:"https://tse4.mm.bing.net/th?id=OIP.Ekp6wpesOOIWInb2PBnJUgHaLL&pid=Api&P=0&h=180",
            by:"paulo coelho"
           
        },
        {   id:6,
            name:"Sapiens",
            image:"https://tse4.mm.bing.net/th?id=OIP.iAwYvOOKAeVEv8tk9rZ2fwHaKZ&pid=Api&P=0&h=180",
            by:"yuvel Noah harari"
           
        },
        {   id:7,
            name:"Heart of Darkness",
            image:"https://tse3.mm.bing.net/th?id=OIP.2aeFOO6gQDmWO7TpSJbtDAHaLS&pid=Api&P=0&h=180",
            by:"joseph conead"
           
        },
        {   id:8,
            name:"All HE'LL Ever Be",
            image:"https://tse3.mm.bing.net/th?id=OIP.mHRdoNmJ-SifTLmLirV3NQAAAA&pid=Api&P=0&h=180",
            by:"W.winters"
           
        },
        {   id:9,
            name:"Fear not:be Strong",
            image:"https://tse3.mm.bing.net/th?id=OIP.Kq1QKXhd_E1zGxyELiLPEQAAAA&pid=Api&P=0&h=180",
            by:"Swami vivekanand"
           
        },
        {   id:10,
            name:"The art of war",
            image:"https://tse1.mm.bing.net/th?id=OIP.0htvHToFEzM78Uq4W80PMgHaLN&pid=Api&P=0&h=180",
            by:"Sun tzu"
           
        },
        
            {   id:11,
                name:"Mens`s for search",
                image:"https://tse3.mm.bing.net/th?id=OIP.4H_vSJtn-YvlCRu-wDW5mgHaLq&pid=Api&P=0&h=180",
                by:"Viktor E.Farknel"
               
    } 
    ]
    const libraries=mylibrary.map(el=>(
        <LibraryCard data={el} key={el.id}
        />
    ))
  return (
    <div className='books'>
    
     
      {libraries}
    </div>
  )
}
