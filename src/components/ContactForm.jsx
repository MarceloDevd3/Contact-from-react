import React, {useState, useId} from "react"
import SucessSMS from "./popUp-sucesso";

export default function FormContact() {

    const Id = useId()

    const [isContactForm, setIsContactForm] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        QueryType: "",
        comments: "",
        beingContacted: false
    })

    const [showSms, setShowSms] = useState(false);

    function hundleChange(event) {
     const {name, type, value, checked} = event.target;
     setIsContactForm(prevFormValue => {
        return {
            ...prevFormValue,
            [name] : type === 'checkbox' ? checked : value 
        }
     })
    }

    function validation() {
    const {FirstName,LastName,Email,QueryType,comments, beingContacted} = isContactForm;

    let input1 = document.querySelector('.firstName');
    let input2 = document.querySelector('.lastName');
    let input3 = document.querySelector('.email');
    let textArea = document.querySelector('textarea');

   

    let sp1 = document.querySelector('.D1');
    let sp2 = document.querySelector('.D2');
    let sp3 = document.querySelector('.D4');
    let sp4 = document.querySelector('.D3');
    let sp5 = document.querySelector('.D5');
    let sp6 = document.querySelector('.D6');
    let sp7 = document.querySelector('.D7');

    if(FirstName === "") {
        input1.style.outlineColor =   "hsl(0, 66%, 54%)"
        sp1.innerText = "This field is required"
    }else {
        sp1.innerText = ""
        input1.style.outlineColor =   "hsl(169, 82%, 27%)"
    }

    if(LastName === "") {
        input2.style.outlineColor =   "hsl(0, 66%, 54%)"
        sp2.innerText = "This field is required"
    }else {
        sp2.innerText = ""
        input2.style.outlineColor =   "hsl(169, 82%, 27%)"
    }

    if(QueryType === ""){
        sp5.innerText =  "Please select a query type"
     }else {
         sp5.innerText = ""
     }

     if(comments === "") {
       textArea.style.outlineColor =   "hsl(0, 66%, 54%)"
        sp6.innerText = "This field is required"
     }else {
        sp6.innerText = ""
        textArea.style.outlineColor =   "hsl(169, 82%, 27%)"
     }

     if(!beingContacted) {
       sp7.innerText = "To submit this form, please consent to being contacted"
     }else {
        sp7.innerText = ""
     }

    let pattern = /@hotmail.com$|@gmail.com$/i;

    if(Email === '') {
        sp3.innerText = "This field is required"
        input3.style.outlineColor =   "hsl(0, 66%, 54%)"
       }else {
           sp3.innerText = ""
           input3.style.outlineColor =   "hsl(169, 82%, 27%)"
           if(!pattern.test(Email)) {
            sp4.innerText = " Please enter a valid email address"
            input3.style.outlineColor =   "hsl(0, 66%, 54%)"
            return
           }else {
               sp4.innerText = ""
               input3.style.outlineColor =   "hsl(169, 82%, 27%)"
           }
       }

       if(FirstName && LastName && Email && QueryType && comments && beingContacted ) { 
        setShowSms(prevState => !prevState)
    }

 

      

     



    
  
    }


    function hundleForm(e) {
    e.preventDefault( )
    validation() 
    }

    return (
       <>
    
        <div className="container">
        {showSms && <SucessSMS/> }
         <h1 className="contact--title">Contact Us</h1>
         <form className="form--container" onSubmit={hundleForm}>
         <div className="gridArea1">
         <lable htmlFor={Id + "FirstName"}> First Name *</lable>
            <input type="text" name="FirstName" className="firstName" onChange={hundleChange} value={isContactForm.FirstName} id={Id + "FirstName"} />
            <span className="small D1"></span>
         </div>
         <div className="gridArea2">
         <lable htmlFor={Id + "LastName"}> Last Name *</lable>
            <input type="text" name="LastName" className="lastName" onChange={hundleChange} value={isContactForm.LastName} id={Id + "LastName"} />
            <span className="small D2"></span>
         </div>
        <div className="gridArea3">
        <lable htmlFor={Id + "Email"}> Email Address *</lable>
            <input type="email" name="Email" className="email" onChange={hundleChange} value={isContactForm.Email} id={Id + "Email"} />
            <span className="small D3"></span>
            <span className="small D4"></span>
        </div>


            <fieldset className="gridArea4">
             <legend>Query Type*</legend>
             <div className="left">
             <label htmlFor={Id + "General Enquiry"}>General Enquiry</label>
              <input type="radio" className="" id={Id + "General Enquiry"} onChange={hundleChange} value="General Enquiry" checked={isContactForm.QueryType === "General Enquiry"} name="QueryType"/>
             </div>
             <div className="right">
             <label htmlFor={Id + "Support Request"}>Support Request</label>
              <input type="radio" id={Id + "Support Request"} onChange={hundleChange} value="Support Request" checked={isContactForm.QueryType === "Support Request"} name="QueryType"/>
             </div>
             <span className="small D5"></span>
            </fieldset>



            <div className="gridArea5">
            <label htmlFor={Id + "comments"}>Message*</label>
            <textarea type="text" name="comments" onChange={hundleChange} value={isContactForm.comments} id={Id + "comments"}/>
            <span className="small D6"></span>
            </div>
            <div className="gridArea6">
           
            <input type="checkbox" name="beingContacted" onChange={hundleChange} id={Id + "beingContacted"} checked={isContactForm.beingContacted}  />
            <label htmlFor={Id + "beingContacted"}>I consent to being contacted by the team</label>
            <span className="small D7"></span>
            </div>
           
            <button >Submit</button>
        </form>
       </div>
       </>
    )
}