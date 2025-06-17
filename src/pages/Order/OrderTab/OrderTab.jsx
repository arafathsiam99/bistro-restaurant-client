import FoodCard from '../../../components/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {
    const itemsPerPage = 6;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {Array.from({ length: totalPages }).map((_, pageIndex) => {
                    const startIndex = pageIndex * itemsPerPage;
                    const pageItems = items.slice(startIndex, startIndex + itemsPerPage);

                    return (
                        <SwiperSlide key={pageIndex}>
                            <div className="grid md:grid-cols-3 gap-10">
                                {pageItems.map(item => (
                                    <FoodCard key={item._id} item={item} />
                                ))}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default OrderTab;