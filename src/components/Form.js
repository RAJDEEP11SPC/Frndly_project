import React, {useState} from "react";

//import Geo from "./Geo";
//import { useNavigate } from "react-router-dom";



const Form = () => {

  

  const[fname, setFname] = useState('');
  const[lname, setLname] = useState('');
  const[pname, setPname] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[address, setAddress] = useState('');
  const[landmark, setLandmark] = useState('');



  const handleForm = (e) => {
    e.preventDefault();
    let newObj = {
      fname: fname,
      lname: lname,
      petname: pname,
      email: email,
      phone: phone,
      address: address,
      landmark: landmark
    }
    
    console.log(newObj);

    setFname('');
    setLname('');
    setPname('');
    setEmail('');
    setPhone('');
    setAddress('');
    setLandmark('');
  }
  return (
    <div className="form-parent">
      <div className="form">
        <form className="form-body" onSubmit={handleForm}>
          <p>Heading of the Form</p>
          <div className="form-content">
            <p> First Name</p>
            <input type="text" placeholder="First Name" value = {fname} onChange={(e) => setFname(e.target.value)}/>
          </div>

          <br />
          <div className="form-content">
            <p> Last Name</p>
            <input type="text" placeholder="Last Name" value = {lname} onChange={(e) => setLname(e.target.value)}/>
          </div>

          <br />
          <div className="form-content">
            <p> Pet Name</p>
            <input type="text" placeholder="Pet's Name" value = {pname} onChange={(e) => setPname(e.target.value)}/>
          </div>

          <br />
          <div className="form-content">
            <p> Email</p>
            <input type="email" placeholder="Email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <br />
          <div className="form-content">
            <p> Contacts</p>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Phone number"
              value = {phone} onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <br />
          <div className="form-content">
            <p> Address</p>
            {/* <input type="text" placeholder="Address" value = {address} onChange={(e) => setAddress(e.target.value)}/> */}
            {/* <button onClick={getLocation()}>Get Location</button> */}
            <button><a href="/Geo"> Address</a></button>
          </div>

          <br />
          <div className="form-content">
            <p> Landmark</p>
            <input type="text" placeholder="Landmark" value = {landmark} onChange={(e) => setLandmark(e.target.value)}/>
          </div>

          <br />
          <button type="submit"><a href="/Home">Submit</a></button>
        </form>
      </div>
    </div>
  );
};

export default Form;