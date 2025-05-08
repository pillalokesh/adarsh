import React, { useState } from 'react';

const Signup = () => {
  const [step, setStep] = useState(1); // 1: Department, 2: Basic Info, 3: Education, 4: Profile Upload
  const [department, setDepartment] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    gender: '',
    dob: '',
    bloodGroup: '',
    phone: '',
    address: '',
    country: '',
    state: '',
    city: ''
  });
 
  const [education, setEducation] = useState({
    tenthSchool: '',
    tenthYear: '',
    tenthPercentage: '',
    twelfthSchool: '',
    twelfthYear: '',
    twelfthPercentage: ''
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleDepartmentNext = () => {
    if (department) {
      setStep(2);
    } else {
      alert('Please select a department');
    }
  };

  const handleFormNext = () => {
    if (formData.firstName && formData.lastName && formData.email && formData.gender && formData.dob && formData.phone){
    setStep(3);}
    else{
        alert('Please fill all the form fields');
  };
  };
  const handleEducationNext = () => {
    if(education.tenthSchool && education.tenthPercentage && education.twelfthSchool && education.twelfthPercentage){
    setStep(4);
  }
  else{
    alert('Please fill all the education fields');
  };
};

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    console.log('Education:', education);
    console.log('Department:', department);
    console.log('Profile Image:', profileImage);
    alert('Form submitted successfully!');
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="reg-container" id='signn'>

      {/* Step 1: Department Selection */}
      {step === 1 && (
        <div className="reg-step">
          <div className="reg-left">
            <img src="/clg.jpg" alt="College Illustration" className="reg-image" />
          </div>
          <div className="reg-right">
            <h2>Welcome to ADARSH DEGREE COLLEGE Registration</h2>
            <p>Please complete the registration form below...</p>
            <select value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="">-- Select a department --</option>
              <option value="B.Sc. Computer Science">B.Sc. Computer Science</option>
              <option value="B.Com">B.Com</option>
              <option value="B.A.">B.A.</option>
            </select>
            <button className="reg-dept-btn" onClick={handleDepartmentNext}>Next</button>
          </div>
        </div>
      )}

      {/* Step 2: Basic Info */}
      {step === 2 && (
        <div className="reg-form-container">
          <div className="reg-form-left">
            <img src="/clg.jpg" alt="Form Illustration" className="reg-form-image" />
          </div>
          <div className="reg-form-right">
            <h2>Registration Form</h2>
            <div className="reg-form-grid">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleFormChange} />
              <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleFormChange} />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleFormChange} />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleFormChange} />
              <select name="gender" value={formData.gender} onChange={handleFormChange}>
                <option value="">--select gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} />
              <input type="date" name="dob" value={formData.dob} onChange={handleFormChange} />
              <select name="bloodGroup" value={formData.bloodGroup} onChange={handleFormChange}>
                <option value="">--select blood--</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
              </select>
              <input type="text" name="address" placeholder="Residential Address" className="reg-full-width" value={formData.address} onChange={handleFormChange} />
              <select name="country" value={formData.country} onChange={handleFormChange}>
                <option value="">--select country--</option>
                <option value="India">India</option>
              </select>
              <select name="state" value={formData.state} onChange={handleFormChange}>
                <option value="">--select state--</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
              </select>
              <select name="city" value={formData.city} onChange={handleFormChange}>
                <option value="">--select city--</option>
                <option value="Visakhapatnam">Visakhapatnam</option>
              </select>
            </div>
            <div className="reg-button-group">
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleFormNext}>Next</button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Educational Details */}
      {step === 3 && (
        <div className="reg-edu-container">
          <div className="reg-edu-left">
            <img src="/clg.jpg" alt="Education Illustration" className="reg-edu-image" />
          </div>
          <div className="reg-edu-right">
            <h2 className="reg-edu-title">Educational Details</h2>
            <p className="reg-edu-subtitle">Enter your education details</p>

            <div className="reg-edu-section">
              <h3>10<sup>th</sup> Education</h3>
              <input type="text" name="tenthSchool" placeholder="10th School Name" value={education.tenthSchool} onChange={handleEducationChange} />
              <div className="reg-edu-row">
                <input type="text" name="tenthYear" placeholder="10th Passing Year" value={education.tenthYear} onChange={handleEducationChange} />
                <input type="text" name="tenthPercentage" placeholder="10th Percentage" value={education.tenthPercentage} onChange={handleEducationChange} />
              </div>
            </div>

            <div className="reg-edu-section">
              <h3>12<sup>th</sup> Education</h3>
              <input type="text" name="twelfthSchool" placeholder="12th College Name" value={education.twelfthSchool} onChange={handleEducationChange} />
              <div className="reg-edu-row">
                <input type="text" name="twelfthYear" placeholder="12th Passing Year" value={education.twelfthYear} onChange={handleEducationChange} />
                <input type="text" name="twelfthPercentage" placeholder="12th Percentage" value={education.twelfthPercentage} onChange={handleEducationChange} />
              </div>
            </div>

            <div className="reg-edu-buttons">
              <button onClick={handlePrevious}>Previous</button>
              <div>
              <button onClick={handleEducationNext}>Next</button></div>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Profile Upload */}
      {step === 4 && (
        <div className="reg-profile-container">
          <div className="reg-profile-left">
            <img src="/clg.jpg" alt="Upload Illustration" className="reg-upload-image" />
          </div>

          <div className="reg-profile-right">
            <h2 className="reg-profile-title">Profile Picture</h2>
            <p className="reg-profile-subtitle">Upload a profile picture which is used for you</p>

            <label htmlFor="fileUpload" className="reg-upload-box">
              <img src={profileImage || '/icons/default-profile.png'} alt="Profile" className="reg-profile-preview" />
              <p className="reg-upload-text">SELECT A FILE</p>
              <p className="reg-upload-subtext">CLICK TO UPLOAD PICTURE</p>
            </label>
            <input
              type="file"
              id="fileUpload"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />

            <div className="reg-button-group">
              <button className="reg-nav-button" onClick={handlePrevious}>Previous</button>
              <button className="reg-nav-button" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Signup;