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
        let pageConfig =  {
            uniqueId: 'container',
            children: [
                {
                    uniqueId: 'tips',
                },
                {
                    uniqueId: 'table',
                }
            ]
        };
        commit(SET_INDEX_CONFIG, pageConfig)
    }
}

module.exports = {
    state,
    getters,
    mutations,
    actions
}
