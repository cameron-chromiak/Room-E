import React, { Component } from 'react';
import './styles/DashboardStyle.css'
export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div>
        <div className="landing-container">
          <div className="landing-text">
            <h1 className="ui header-lg">Welcome</h1>
            <p className="ui header-md">This is RoomE. A way to simplify life with your roomates</p>
          </div>
        </div>

        // <section className='section section about'>
        //   <div className='about-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //   Vel autem numquam architecto veniam! Facere ipsa similique aperiam,
        //    labore non assumenda sunt quibusdam earum cupiditate nemo ad. Saepe
        //     laboriosam dolorem, repudiandae id aperiam iusto earum accusamus
        //      aliquid autem quas perspiciatis cupiditate, explicabo! Velit vel
        //       ab facilis, consequatur id itaque dicta, reprehenderit.</div>
        // </section>
        //
        // <footer className='footer'>
        //   A Lazy Footer
        // </footer>
      </div>
    );
  }
}
