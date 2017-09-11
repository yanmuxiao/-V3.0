
/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.params params参数
 * @return {Promise}               Promise
 */
export function _get({ url, params }) {
    return axios.get(url, { params: params }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.data
        }
        return Promise.reject(new Error(response.status))
    }).catch(response => {
        console.log("error!!!!!!!!!!!")
    })
}

/**
 * post请求
 * @param  {String} options.url   api地址
 * @param  {String} options.params params参数 使用formData
 * @return {Promise}               Promise
 */
export function _post({ url, params }) {
    return axios.post(url, params, {
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.data
        }
        return Promise.reject(new Error(response.status))
    })
}







