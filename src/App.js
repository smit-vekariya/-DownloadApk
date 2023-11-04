import './App.css';
import app from './Spotify-8.7.48.1062_SpotifyGeek.Com.apk'
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import prlogo from './prlogo.png'


function App() {

  const downloadAPK = () =>{
    const link = document.createElement("a");
    link.href = app;
    link.download = "Premier.apk"
    link.click()
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='text_div'>
          <img className="pr_logo" src={prlogo} alt='Premie logo'/>
          <h1 className='p1'>Download any movies & series for <b className='free_class'>FREE</b></h1>
          <p>Watch your favourite movies & series <br/> any where, any time</p>
          <p>Ready to Download ? <br/> Click download button to get <b>Premier</b></p>
          <Button className='download_btn' onClick={downloadAPK} shape="round">
              <b>Download</b>
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
