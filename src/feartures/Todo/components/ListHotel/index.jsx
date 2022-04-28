import React from 'react';
import PropTypes from 'prop-types';
import Hotel from '../Hotel';

ListHotel.propTypes = {
    
};


function ListHotel(props) {
    const HotelList = [
        {
            Name: "khách sạn ở đâu đó",
            Place:"Đà Nẵng",
            Price:"200$",
            Title:"khách sạn sang và đẹp",
            Url:"https://picsum.photos/id/1/200"
        },
        {
            Name: "khách sạn ở đâu đó",
            Place:"TP.HCM",
            Price:"100$",
            Title:"khách sạn sang và đẹp",
            Url:"https://picsum.photos/id/2/200"
        },
        {
            Name: "khách sạn ở đâu đó",
            Place:"Hà Nội",
            Price:"300$",
            Title:"khách sạn sang và đẹp",
            Url:"https://picsum.photos/id/3/200"
        }
    ]
    
    return (
        <div>
            <Hotel data={HotelList} />
        </div>
    );
}

export default ListHotel;