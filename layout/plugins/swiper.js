import Swiper, { Navigation, Pagination } from 'swiper';

export default (_, inject) => {
  Swiper.use([Navigation, Pagination]);
  inject('Swiper', Swiper);
};
