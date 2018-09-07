import * as type from '../constant/type';
import util from '../../assets/js/util';


export const infoMutations = {
    [type.SHOWPOP](state) {
        state.showpop = true;
    },
    [type.HIDEPOP](state) {
        state.showpop = false;
    },
    [type.SHOWCONFIRM](state) {
        state.confirm = true;
    },
    [type.HIDCONFIRM](state) {
        state.confirm = false;
    },
    //退出登录
    [type.LOGINOUT](state,params){
        console.log(params);
        util.clearLocalStorage();
        //执行 退出登录 操作
    }


}