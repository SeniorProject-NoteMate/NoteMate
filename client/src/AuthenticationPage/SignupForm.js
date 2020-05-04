import React, { Component ,useState} from 'react';
import { HashRouter as Router, NavLink, Link } from 'react-router-dom';
import { tsConstructorType } from '@babel/types';

//class SignupForm extends Component {
  export default function SignupForm(){
  
  const [username] = useState('');
  const [password] = useState('');
  const [email] = useState('');

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  const handleSubmit =(event) => {
    event.preventDefault();
  };

    return (
    <Router basename="/home/">
        <div className="SignupForm">
            <div className="FormCenter">
                <form className="FormFields" onSubmit={()=> this.handleSubmit()} >
                        <div className="FormField">
                            <label className="FormField__Label" >UserName</label>
                            <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={username} onChange={()=> this.handleChange()} />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" >Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={password} onChange={()=> this.handleChange()} />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" >Email Address</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={email} onChange={()=> this.handleChange()} />
                        </div>
                        <div className = "FormField__Label" >
                            <form action="" method="post">
                              <input type="radio" name="teacher" value="teacher" checked /> Teacher<br></br><br></br> 
                              <input type="radio" name="teacher" value="student" /> Student<br></br><br></br> 
                            </form>
                        </div>
                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign Up</button> <Link to="/signin" className="FormField__Link">Already member</Link>
                        </div>
                </form>
            </div>
        </div>
    </Router>
    );
  }


// export default SignupForm;

// class SignupForm extends Component {
//   constructor(){
//       super();
//       this.state={
//           username:'',
//           password:'',
//           email:''

//       };
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//   }
//   render() {
//     return (
//     <Router basename="/react-auth-ui/">
//         <div className="SignupForm">
//             <div className="FormCenter">
//                 <form className="FormFields" onSubmit={this.handleSubmit} >
//                         <div className="FormField">
//                             <label className="FormField__Label" >UserName</label>
//                             <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange}/>
//                         </div>

//                         <div className="FormField">
//                             <label className="FormField__Label" >Password</label>
//                             <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
//                         </div>

//                         <div className="FormField">
//                             <label className="FormField__Label" >Email Address</label>
//                             <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange}/>
//                         </div>

//                         <div className="FormField">
//                             <button className="FormField__Button mr-20">Sign Up</button> <Link to="/signin" className="FormField__Link">Already member</Link>
//                         </div>
//                 </form>
//             </div>
//         </div>
//     </Router>
//     );
//   }
// }

// export default SignupForm;
