import React from 'react';
import { Card, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Laptop from '../../images/laptop.jpg';
import ProductListItems from './ProductListItems';
import StarRatings from 'react-star-ratings';
import RatingModal from '../modal/RatingModal';



const { TabPane } = Tabs;

const SingleProduct = ({ product }) => {
    const { title, images, description ,_id} = product;

    return (
        <>
            <div className='col-md-7'>
                {images && images.length ? (
                    <Carousel showArrows={true} autoPlay infiniteLoop>
                        {images &&
                            images.map((i) => (
                                <img src={i.url} key={i.public_id} />
                            ))}
                    </Carousel>
                ) : (
                    <Card
                        cover={
                            <img src={Laptop} className='mb-3 card-image' />
                        }></Card>
                )}

                <Tabs type='card'>
                    <TabPane tab='Description' key='1'>
                        {description && description}
                    </TabPane>
                    <TabPane tab='More' key='2'>
                        Call use on xxxx xxx xxx to learn more about this
                        product.
                    </TabPane>
                </Tabs>
            </div>

            <div className='col-md-5'>
                <h1 className='bg-info p-3'>{title}</h1>

                <Card
                    actions={[
                        <>
                            <ShoppingCartOutlined className='text-success' />{' '}
                            <br />
                            Add to Cart
                        </>,
                        <Link to='/'>
                            <HeartOutlined className='text-info' /> <br /> Add
                            to Wishlist
                        </Link>,
                        <RatingModal>
                            <StarRatings
                                name={_id}
                                rating={2}
                                starRatedColor='red'
                                changeRating={(newRating, name) =>
                                    console.log(
                                        'Newrating',
                                        newRating,
                                        'Name',
                                        name
                                    )
                                }
                                numberOfStars={5}
                                isSelectable={true}
                            />
                        </RatingModal>,
                    ]}>
                    <ProductListItems product={product} />
                </Card>
            </div>
        </>
    );
};

export default SingleProduct;
