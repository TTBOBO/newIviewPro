import * as type from '../constant/type';



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
    }


}