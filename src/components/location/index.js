import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

        <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.130352393046!2d-73.99910352543945!3d40.75030943422137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33df10e49762f8e4!2sMadison%20Square%20Garden!5e0!3m2!1sen!2sus!4v1567473680361!5m2!1sen!2sus" 
                width="100%" 
                height="500px" 
                frameBorder="0"  
                allowFullScreen
                
                ></iframe> 
            
    

        <div className="location_tag">

        <div>Location </div>
        
        </div>

        </div>



    );
};

export default Location;