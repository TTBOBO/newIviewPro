import axios from 'axios';
import env from '../../config/dev.env';
import request from './api';
import otherurl from './baseUrl';
import util from '../assets/js/util'

axios.defaults.timeout = 5000;
//api.isxuan.com  http://api.isxuan.com/   http://hyhapi.52qingqiyun.com
axios.defaults.baseURL = env.NODE_ENV == "\"development\"" ? otherurl.payurl : otherurl.payurl; //http://123.207.114.48:86
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
/**
 * 请求配置
 */
axios.interceptors.request.use(
        config => {
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
            return config;
        },
        err => {
            return Promise.reject(err);
        }
    )
    /**
     * 请求拦截
     */
axios.interceptors.response.use(
    response => {
        if (response.data.code == 400) {
            // Vue.$Message.error('操作失败')
            return response.data;
        } else if (response.data.code == 501) {
            util.clearLocalStorage();
            var u = navigator.userAgent;
            var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isAndroid) {
                window.bjsLauncher.logoff();
            } else if (isiOS) {
                window.location.href = "exit";
            } else {}
        } else
            return response.data;
    },
    err => {
        return Promise.reject(err.response.data);
    }
)

/**
 *
 * @param {*String} url api地址
 * @param {*Object} params   参数
 */

export function ajaxGet(url, params = {}) {
    return new Promise((resolve, reject) => {
        if (!params.token) {
            params.token = util.getLocalStorage('token');
        }

        axios.get(request[url], {
            params: params
        }).then(response => {
            resolve(response);
        }).catch(err => {
            reject(err);
        })
    })
}

/**
 *
 * @param {*String} url api地址
 * @param {*Object} params   参数
 */
export function ajaxPost(url, params = {}) {
    params.token = util.getLocalStorage('token') || '268f646f213d5446dc9f9d57423635e9';
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: request[url],
            data: params,
            transformRequest: [function(data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                return ret;
            }]
        }).then(response => {
            resolve(response);
        }).catch(err => {

            reject(err);
        });
    })
}
export default {
    axios
}