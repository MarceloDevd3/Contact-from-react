import React from "react"
import sucessImg  from '../assets/icon-success-check.svg'

export default function SucessSMS() {
     return (
        <article className="sucess--popUp">
          <div className="row">
          <img src={sucessImg} alt="sucess-img"/>
          <h2 className="sucess-sms">Message Sent!</h2>
          </div>
          <p className="Thanks--sms">Thanks for completing the form. We'll be in touch soon!</p>
        </article>
     )
}