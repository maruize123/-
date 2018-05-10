import axios from 'axios';

let services = 'https://www.easy-mock.com/mock/5ab328aaa242e72bb6af048b/example/';//getSwiper

//获取行业数据 
export function getSwiper() {
    return new Promise((resolve, reject) => {
      let url = `${services}getSwiper`;
      axios.get(url).then(response => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    })
};
//获取行业数据 
export function getSwiperTwo() {
    return new Promise((resolve, reject) => {
      let url = `${services}getSwiperTwo`;
      axios.get(url).then(response => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    })
};
