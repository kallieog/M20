import React, { useState } from 'react'
import "./style.css"

const Contact = () => {
  const [form, setForm] = useState('Submit')

  const onFormSubmit = (e) => {
    e.preventDefault()
    setForm('Submitting ...')
    const { name, email, message } = e.target.elements
    let contactForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    }

    console.log(contactForm)
  }
  return (
    <div className="container">
      <h2 className="mb-2">Get in touch!</h2>
      <form onSubmit={onFormSubmit}>
        <div className="mb-2">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <div className="d-grid">
          <button className="btn btn-success" type="submit">
            {form}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact