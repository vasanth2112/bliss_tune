import { Padding } from '@mui/icons-material';
import '../../components/Services/Service.scss';
import { SERVICES } from '../../ListConstant';
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import service from "../../../public/AboutUs/service.json";

export default function Service() {
    const serviceAnimation = useRef(null);

    useEffect(() => {
      const svcAnimation = Lottie.loadAnimation({
        container: serviceAnimation.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: service,
      });
  
      return () => {
        svcAnimation.destroy();
      };
    }, []);

    return (<>
        <div id='service' className='aboutus_container_commitment'>
        <div ref={serviceAnimation} className="serviceAnime"></div>
            <div className='aboutus_container_commitment_flex'>
                <h1><span className='letter_color'>O</span>ur <span className='letter_color'>S</span>ervices</h1>

                <div className='commitment_cards'>

                    {SERVICES.map((content, index) => (
                        <div className="card">
                            <div className="card_img">
                                <img src={content.image}></img>
                            </div>
                            <div style={{ paddingBottom: '20px' }}>
                                <h3>{content.title}</h3>
                                <p>{content.description}</p>
                                <a href="https://api.whatsapp.com/send?phone=919047770020">
                                    <Button className="Button" variant="contained" endIcon={<ArrowForwardIcon  />} >
                                        Know More
                                    </Button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>)
}