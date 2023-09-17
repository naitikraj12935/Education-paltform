import React from 'react'
import {createContext,useState } from 'react';
const ProfileContext=createContext();
 function Provider({children}) {
    const [name, setname] = useState('myname');
    const [fathername, setfathername] = useState('fathername');
    const [date,setdate]=useState(0);
    const [image,setimage]=useState('');
      const [month,setmonth]=useState('month');
      const [year,setyear]=useState(0);
    const [Class, setclass] = useState(0);
    const [Ambition, setAmbition] = useState('I.A.S');
    const [school, setschoolname] = useState('xxx public school');
    const [contact, setcontact] = useState('');
    const [bio, setbio] = useState('now a days i am in god mode my son');
    const [stream,setstream]=useState('select course');
    
  const onSubmit = (
  
    dAmbition,
    dClass,
    dbio,
    dfathername,
    dname,
    dschool,
    ddate,
    dmonth,dyear,
    dcontact,
    selectedFile
  ) => {
    setbio(dbio);
    setcontact(dcontact);
    
    setclass(dClass);
    setfathername(dfathername);
    setname(dname);
    setdate(ddate);
    setmonth(dmonth);
    setyear(dyear);
    setAmbition(dAmbition);
    setschoolname(dschool);
    setimage(selectedFile);
  };
  const coursesubmit=(coursevalue)=>{
     setstream(coursevalue);
  }
  const valueToShare={
    name,date,fathername,school,image,month,year,Class,Ambition,contact,bio,onSubmit,coursesubmit,stream

    
  }
  return (
    <ProfileContext.Provider value={valueToShare}>
            {children}
        </ProfileContext.Provider>
  )
}
export {Provider};
export default ProfileContext;
