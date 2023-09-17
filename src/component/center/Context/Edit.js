import React from 'react'
import { useState,useContext } from 'react';
import './Edit.css';
import ProfileContext from './Profile';
import { Link } from 'react-router-dom';

export default function Edit() {
    const {name,date,fathername,school,month,year,Class,Ambition,contact,image,bio,onSubmit}=useContext(ProfileContext);
    
    const [dname,setname]=useState(name);
    const [dfathername,setfathername]=useState(fathername);
    const [ddate,setdate]=useState(date);
    const [dmonth,setmonth]=useState(month);
    const [dyear,setyear]=useState(year);
    const [selectedFile, setSelectedFile] = useState(image);
    const [dClass,setclass]=useState(Class);
    const [dAmbition,setAmbition]=useState(Ambition);
    const [dschool,setschoolname]=useState(school);
    const [dcontact,setcontact]=useState(contact);
    const [dbio,setbio]=useState(bio);

    const handlename=(event)=>{
        setname(event.target.value);
    }
    const handlefathername=(event)=>{
        setfathername(event.target.value);
    }
    const handleschool=(event)=>{
        setschoolname(event.target.value);
    }
    const handleambition=(event)=>{
        setAmbition(event.target.value);
    }
    const handleC=(event)=>{
        setname(event.target.value);
    }
    const handleClass=(event)=>{
        setclass(event.target.value);
    }
    const handledate=(event)=>{
        
        setdate(event.target.value);
        
    }
    const handlemonth=(event)=>{
        
        setmonth(event.target.value);
        
    }
    const handleyear=(event)=>{
        
        setyear(event.target.value);
        
    }
    const handlecontact=(event)=>{
        setcontact(event.target.value);
    }
    const handlebio=(event)=>{
        setbio(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
   
    onSubmit(dAmbition,dClass,dbio,dfathername,dname,dschool,ddate,dmonth,dyear,dcontact);
    }
   const handlebtn=(event)=>{
    event.preventDefault();

    onSubmit(dAmbition,dClass,dbio,dfathername,dname,dschool,ddate,dmonth,dyear,dcontact,selectedFile);
   }
   const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  return (
    <div className='edit-form'>
      <form onSubmit={handleSubmit}>
      <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileChange} />
      </div>
        <div>
            <span>Name</span>:
            <br />
            <input type="text"  value={dname} onChange={handlename}/>
        </div>
        <div>
            <span>FatherName</span>:
            <br />
            <input type="text" value={dfathername} onChange={handlefathername}/>
        </div>
        <div>
            <span>School</span>:
            <br />
            <input type="text" value={dschool} onChange={handleschool} />
        </div>
        <div>
            <span>Ambition</span>:
            <br />
            <input type="text" value={dAmbition} onChange={handleambition}/>
        </div>
        <div>
            <span>Class</span>:
            <br />
            <input type="number" value={dClass} onChange={handleClass}/>
        </div>
        <div>
            <span>Date</span>:
            <br />
            <input type="number"   value={ddate} onChange={handledate} min={1} max={31} />
        </div>
        <div>
            <span>month</span>:
            <br />
            <input type="text"   value={dmonth} onChange={handlemonth}  />
        </div>
        <div>
            <span>year</span>:
            <br />
            <input type="number"   value={dyear} onChange={handleyear} min={2000}/>
        </div>
        <div>
            <span>contact</span>:
            <br />
            <input type="tel" value={dcontact}  onChange={handlecontact}/>
        </div>
        <div>
            <span>Bio</span>:
            <br />
          <textarea name="bio" id="" cols="30" rows="10" value={dbio} onChange={handlebio}></textarea>
        </div>
        <Link to="/study">
        <button className='button-edit' onClick={handlebtn}> save</button>
        </Link>
      </form>
     
    </div>
  )
}
