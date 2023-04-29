import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import moment from 'moment';


const NewsCard = ({ news }) => {
    const { title, thumbnail_url, image_url, details, author, _id, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center gap-3 px-3 py-2'>
                <Image src={author.img} style={{ width: "40px", height: "40px" }} roundedCircle />
                <div className="flex-grow-1">
                    <p className='m-0 p-0 fw-semibold fs-6'>{author?.name}</p>
                    <p className='m-0 p-0'>{moment(author?.published_date).format('YYYY-MM-D')}</p>
                </div>
                <div className="d-flex gap-3">
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={image_url} alt="Card image" />

                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className="flex-grow-1">
                    <Rating className='m-0 p-0'
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                 />
                 <span className='m-0 p-0'>{rating?.number}</span>
                    
                </div>
                <div className=" d-flex align-items-center gap-2">
                    <FaRegEye></FaRegEye><span>{total_view}</span>
                </div>

            </Card.Footer>
        </Card>
    );
};

export default NewsCard;