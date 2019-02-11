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

const getSingleRequest = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://localhost:44381/api/run/${id}`)
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
            .delete(`https://localhost:44381/api/run/${id}`)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            })
    })
};

const updateRequest = (id, update) => {
    return new Promise((resolve, reject) => {
        axios
            .put(`https://localhost:44381/api/run/${id}`, update)
            .then(res => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const postRequest = (newTask) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`api/run`, newTask)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};


export default { getRequest, deleteRequest, getSingleRequest, updateRequest, postRequest};