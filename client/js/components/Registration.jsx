import React from 'react';

import { Input } from 'react-bootstrap';

class Registration extends React.Component{
  render() {
    return(
      <div>
        <div className="col-md-6 col-md-offset-3">
        <h2>Create Account</h2>
        <p>Once a week, you'll receive an email to say which days you're available, and then be randomly paired with another alum for lunch. Meet new people, learn new things, and have fun!</p>
        <br />
        <p>Filling this out is <strong>not</strong> a commitment: You're just signing up to get asked what days work for you.</p>
        <br />
        <form>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="email" placeholder="Email" />
          <Input type="select" defaultValue="onsite">
            <option value="onsite">On-Site</option>
            <option value="remote">Remote</option>
          </Input>
          <Input type="number" placeholder="Cohort Number" addonBefore="HR" maxlength="2" />
          <Input type="text" placeholder="What's your work address?" />
          <Input type="textarea" placeholder="What programming-related topics are you passionate about?" />
          <Input type="textarea" placeholder="What do you like to do outside of work?" />
        </form>
        </div>
      </div>
    )
  }
}

export default Registration;
