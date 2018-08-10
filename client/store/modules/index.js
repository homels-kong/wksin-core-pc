/**
 * @file index module
 */

const SET_INDEX_CONFIG = 'SET_INDEX_CONFIG';

const state = () => {
    return {
        pageConfig: {}
    }
};

const getters = {
    pageConfig: state => state.pageConfig
}

const mutations = {
    [SET_INDEX_CONFIG](state, pageConfig) {
        state.pageConfig = pageConfig;
    }
};

const actions = {
    async initPage({commit}, params) {
        let pageConfig = {};
        try {
            pageConfig = require(`client/config/page/${params.page}.js`);
        } catch(e) {
            console.error('请确定是否存在该页面的配置文件');
        }
        
        commit(SET_INDEX_CONFIG, pageConfig)
    }
}

module.exports = {
    state,
    getters,
    mutations,
    actions
}
