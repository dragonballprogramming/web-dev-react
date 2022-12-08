
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';



export default function emailForm() {

    const navigate = useNavigate();

  const [values, setValues] = useState({
    emailAddress: '',
    contactReason: '',
  });

  const handleChange = e => {
        e.preventDefault();
        setValues( prevValues => {
    return { ...prevValues,[e.target.name]: e.target.value}
    });
    console.log(values);
    }

const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    navigate('/');
  };


    return (
        <div>
             <form onSubmit={handleSubmit} className="emailForm">
            <div class="row form-group">
                <div class="col">
                    <input 
                        className="form-control" 
                        name="emailAddress" 
                        id="emailAddress" 
                        type="email" 
                        placeholder="Enter email address..." 
                        aria-label="Enter email address..." 
                        required 
                        onChange={handleChange}
                        value={values.emailAddress}
                        />
                </div>
                <div class="col">
                    <input 
                        className="form-control" 
                        name="contactReason" 
                        id="contactReason" 
                        type="text"
                        placeholder="Reason for Contact..." 
                        aria-label="Reason for Contact..." 
                        onChange={handleChange}
                        value={values.contactReason}
                    />
                </div>
            </div>
            <div class="col-auto">
                <button class="btn-1 btn btn-primary" type="submit" name="button">Notify Me!</button>
            </div>
        </form>
        </div>
       
    )
    
}
    