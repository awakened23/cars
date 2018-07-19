import axios from "axios";

export function getProductDetails(){
    return axios.get(process.env.REACT_APP_API_PATH ||'http://localhost:3005/product')
    .catch(error => {
        console.log('getProductDetails failed: ', error);
    });
}
