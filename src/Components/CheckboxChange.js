import React, { useState } from "react";
export default function CheckboxChange() {
    const [hobby, setHobby] = useState({
        Hobbies: []});
    const handleChange = (e) => {      
        const { value, checked } = e.target;
        const { Hobbies } = hobby;
              if (checked) {
            setHobby({
                Hobbies: [...Hobbies, value],            
            });
        }
        else {
            setHobby({
                Hobbies: Hobbies.filter(
                    (e) => e !== value
                ),             
            });
        }
    };
    return (
        <div >
        <h3>Check box show and hide Assignment 4</h3>
<label>Sports</label> 
<input type="checkbox" value="Sports"  onChange={handleChange } /><br></br>
<label>Travel</label> 
<input type="checkbox" value="Travel"  onChange={handleChange } /> <br></br>
<label>Music</label> 
<input type="checkbox" value="Music"  onChange={handleChange } /><br></br>
<label>Reading</label> 
<input type="checkbox" value="Reading"  onChange={handleChange } /><br></br>
<fieldset>
<h3>My Hobbies Includes:</h3><br></br>
{"You are interestd in !! "+hobby.Hobbies +"\n"} 
</fieldset>                                                                                       
</div>                                                                                                  
    );
}

