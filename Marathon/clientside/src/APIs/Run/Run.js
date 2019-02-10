import axios from 'axios';

const getRequest = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`api/run`)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
};

const deleteRequest = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`api/run/${id}`)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            })
    })
};
export default { getRequest, deleteRequest};