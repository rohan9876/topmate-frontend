import React from 'react';
import './footer.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaFacebook, FaInstagram, FaLinkedin, FaVoicemail } from 'react-icons/fa';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn className='footer-icons' tag='a' color='none' href='https://www.instagram.com/'>
            <FaInstagram />
          </MDBBtn>
          <MDBBtn className='footer-icons' tag='a' color='none' href='https://www.facebook.com/'>
            <FaFacebook />
          </MDBBtn>
          <MDBBtn className='footer-icons' tag='a' color='none' href='https://www.linkedin.com/'>
            <FaLinkedin />
          </MDBBtn>
          <MDBBtn className='footer-icons' tag='a' color='none' href='mailto:example@example.com'>
            <FaVoicemail />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://stockmate.com/'>
          stockmate.com
        </a>
      </div> 
    </MDBFooter>
  );
}
