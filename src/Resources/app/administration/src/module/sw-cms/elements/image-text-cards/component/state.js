export default {
    namespaced: true,
    
    state() {
        return {
            defaultFolder: null,
            element: {},
            cmsPageState: null
        };
    },

    mutations: {
        setElementObject(state, element) {
            state.element = element;
        },

        setDefaultFolder(state, defaultFolder) {
            state.defaultFolder = defaultFolder;
        },
        
        setCmsPageState(state, cmsPageState) {
            state.cmsPageState = cmsPageState;
        },
    }

}
