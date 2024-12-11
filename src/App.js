import React from "react";
import "./style.css";
//--- imporing useRef that helps us to clear the input boxes after we hit submit
import React, { useRef } from 'react';

export default function App() {
//--- works together with useRef
  const sign= useRef(null);
  //-- preventing default screen clearing after refreshing the age
  function signUp(event) {
    event.preventDefault()

    //--- collecting our data from the input boxes and storing in all data variable
    const formEl=event.currentTarget
    const formData=new FormData(formEl)
    const data=Object.fromEntries(formData)
    const country=formData.getAll("eduStatus")
    const allData={

      ...data,
      country
    }
    console.log(allData)
    // const email = formData.get("email")
    // const password = formData.get("password")
    // const description=formData.get("description")
    // const empStatus=formData.get("empStatus")
    // const eduStatus=formData.getAll("eduStatus")
    // const country=formData.getAll("country")
    // console.log(password)
    // console.log(description)
    // console.log(empStatus)
    //console.log(eduStatus)


    //--- works together with useRef
     sign.current.reset()
  }

  return (
<section>
      <h1>Signup form</h1>
      {/* setting onSubmit function*/}
      <form onSubmit={signUp} ref={sign}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" required/>

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description" >Description:</label>
        <textarea id="description"  name="description" defaultValue="Describe yourself"></textarea>

        {/* using field set */}
        <fieldset>
<legend>Employment Status</legend>
<label>
<input type="radio"  name="empStatus" value="Not employed"/>
Not employed


</label>
<label>
<input type="radio"  name="empStatus"   value="Self Employed" />
Self Employed


</label>

<label>
<input type="radio"  name="empStatus"  value="Student"/>
Student


</label>


        </fieldset>
        
        <fieldset>
<legend>Level of education</legend>
<label>
<input type="checkbox"  name="eduStatus" value="Primary"/>
Primary


</label>
<label>
<input type="checkbox"  name="eduStatus"  value="Secondary" />
Secondary


</label>

<label>
<input type="checkbox"  name="eduStatus" value="University"/>
University


</label>


        </fieldset>

  <lebel htmlFor="Country">Choose your Country</lebel>
  <select name="country" id="Country" defaultValue="" required>
  <option value="" disabled>-- choose your country --</option> 
  <option value="kenya" >Kenya</option>
<option value="Uganda">Uganda</option>
<option value="Tanzania">Tanzania</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Somalia">Somalia</option>




    </select>
        
        

        
        <button>Submit</button>

      </form>
    </section>
  




  )
}