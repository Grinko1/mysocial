import SideMenu from '../../Components/SideMenu/SideMenu';
import './Video.scss';

const Video = () => {
    return (
        <>
           
            <div className="video">
 <SideMenu/>
 <div className="video__wrapper">
     <h1 className='video__head'>Recently added videos</h1>
     <div className="video__container">
         <div className="video__item">
         <iframe src="https://giphy.com/embed/R0jWWtH1CtFEk" width="300" height="265" frameBorder="0" className='video__item-animate' allowFullScreen></iframe>

         <div className='video__item-author'>Janell Shrum <span>12 min ago</span> </div>
         </div>

         <div className="video__item">
         <iframe src="https://giphy.com/embed/YOq12jBof8KUEhmJsI" width="300" height="265" frameBorder="0"  className='video__item-animate'   allowFullScreen></iframe>
         <div className='video__item-author'>Kristen Thomas <span>1 hour ago</span> </div>
         </div>

         <div className="video__item">
         <iframe src="https://giphy.com/embed/JUekyDHjITsgroea2n" width="300" height="265" frameBorder="0"  className='video__item-animate'  allowFullScreen></iframe>
         <div className='video__item-author'>Kristen Thomas <span>1 hour ago</span> </div>
         </div>

         <div className="video__item">
         <iframe src="https://giphy.com/embed/g0QRK2qcWDR6ziD9F7"  width="300" height="265"  className='video__item-animate'  frameBorder="0"  allowFullScreen></iframe>
         <div className='video__item-author'>Gary Duty <span>2 hour ago</span> </div>
         </div>

         <div className="video__item">
         <iframe src="https://giphy.com/embed/wofyg8nxsWEmtR7eOK" width="300" height="265" frameBorder="0" className='video__item-animate' allowFullScreen></iframe>
         <div className='video__item-author'>Safak Kocaoglu <span>2 hour ago</span> </div>
         </div>

         <div className="video__item">
         <iframe src="https://giphy.com/embed/R6gvnAxj2ISzJdbA63" width="300" height="265" frameBorder="0" className='video__item-animate' allowFullScreen></iframe>
         <div className='video__item-author'>Janell Shrum <span>3 hour  ago</span> </div>
         </div>
     </div>
 </div>
            </div>
            

            </>
           
            
       
    );
};

export default Video;