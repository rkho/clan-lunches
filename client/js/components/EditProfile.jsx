var React = require('react');

var Input = require('react-bootstrap').Input;

var EditProfile = React.createClass({
  render: function() {
    return(
      <div>
        <div className="col-md-6 col-md-offset-3">
        <h2>Edit Profile</h2>
        <form>
          <Input type="text" value="First Name" disabled="true" />
          <Input type="text" value="Last Name" disabled="true" />
          <Input type="email" placeholder="Email" />
          <Input type="select" defaultValue="onsite">
            <option value="onsite">On Site</option>
            <option value="remote">Remote</option>
          </Input>
          <Input type="number" placeholder="Cohort" addonBefore="HR" maxlength="2" placeholder="Cohort Number" disabled="true" />
          <Input type="textarea" placeholder="What programming-related topics are you passionate about?" />
          <Input type="textarea" placeholder="What do you like to do outside of work?" />
        </form>
        </div>
      </div>
    )
  }
})

module.exports = EditProfile;
