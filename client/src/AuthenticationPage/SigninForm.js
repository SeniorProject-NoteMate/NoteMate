import React, { Component ,useState} from 'react';
import { HashRouter as Router, NavLink, Link } from 'react-router-dom';

//class SigninForm extends Component {
    export default function SigninForm(){

    const [username] = useState('');
    const [password] = useState('');
    const [email] = useState('');

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
          [name]: value
        });
    };

    const handleSubmit = (event) => {
            event.preventDefault();
        };
    
    return (
    <Router basename="/react-auth-ui/">
        <div className="SigninForm">
            <div className="FormCenter">
                <form className="FormFields"onSubmit={()=> this.handleSubmit()} >
                        <div className="FormField">
                            <label className="FormField__Label" >E-Mail Address</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={email} onChange={()=> this.handleChange()}  />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" >Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={password} onChange={()=> this.handleChange()} />
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                        </div>
                </form>
            </div>
        </div>
    </Router>
    );
  }

//export default SigninForm;

// class SigninForm extends Component {
//     constructor(){
//         super();
//         this.state ={
//             email: '',
//             password: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
    
//         this.setState({
//           [name]: value
//         });
//     }

//     handleSubmit(event) {
//             event.preventDefault();
//         }
    
//   render() {
//     return (
//     <Router basename="/react-auth-ui/">
//         <div className="SigninForm">
//             <div className="FormCenter">
//                 <form className="FormFields" onSubmit={this.handleSubmit    } >
//                         <div className="FormField">
//                             <label className="FormField__Label" >E-Mail Address</label>
//                             <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
//                         </div>

//                         <div className="FormField">
//                             <label className="FormField__Label" >Password</label>
//                             <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
//                         </div>

//                         <div className="FormField">
//                             <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
//                         </div>
//                 </form>
//             </div>
//         </div>
//     </Router>
//     );
//   }
// }

// export default SigninForm;

