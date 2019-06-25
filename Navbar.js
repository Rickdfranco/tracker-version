import React, { Component } from 'react'
import './Navbar.css';

class Navbar extends Component {
//   const scrollDown  = (selector , prevElement,elementId)=>  {
//     $(selector).on('click',function(){
//       $(document).scrollTop($(prevElement).offSet().top);
//       $('html, body').animate({
//         scrollTop: $(elementId).offSet().top
//       },'slow');
//       });
//   }
//     scrollDown('#1');
//     scrollDown('#2');
//     scrollDown('#3');
// );
  render() {

  
    return (
      <div>
        <link rel='stylesheet' href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous"></link>
        <div>
          <header>
            <div className='logo'>
              <h3>
                IES Tracker
              </h3>
            </div>
            <nav className='active'>
              <ul>
                <li><a className='active' href='#1'>Home</a></li>
                  <li><a src='./computer.js' href='#2'>Add A User</a></li>
                  <li><a src='./ticket.js' href='#3'>Open A Ticket</a></li>
              </ul>
            </nav>
            <div className='menue-toggle'><i className='fa fa-bars' aria-hidden='true'></i></div>
          </header>
        </div>
      </div>
    )
  }
}
export default Navbar; 