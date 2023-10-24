import QRCode from 'react-qr-code';
import './qrcode.css';


export const Qrcode = () => {
    return(
    <div className='container'>
      <h1> Scan para cadastro</h1>
      <QRCode 
        value='http:192.168.15.162:3000/userregister'
      />
    </div>
    )
  }