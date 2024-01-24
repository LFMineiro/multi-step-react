import './styles.css'

export const PersonalInfo = () => {
  return (
    <div className="formContainer">
      <div className="formTitle">
        <h1>Personal Info</h1>
        <p>Plese provide your name, email adress and phone number</p>
      </div>
      <div className="personalInfoContainer">
        <div className="formControl">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="formControl">
          <label htmlFor="email">Email Adress:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="formControl">
          <label htmlFor="number">Phone Number:</label>
          <input type="number" name="number" id="number" />
        </div>
        <button type="submit">Next Step</button>
      </div>
    </div>
  )
}
