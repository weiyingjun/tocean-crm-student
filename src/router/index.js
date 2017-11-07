import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/readme'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/submitdaily',
                    component: resolve => require(['../components/page/SubmitDaily.vue'], resolve)
                },
                {
                    path: '/writepaper',
                    component: resolve => require(['../components/page/WritePaper.vue'], resolve)
                },
                {
                    path: '/historypaper',
                    component: resolve => require(['../components/page/HistoryPaper.vue'], resolve)
                },

                {
                    path: '/submitweekly',
                    component: resolve => require(['../components/page/SubmitWeekly.vue'], resolve)
                },
                {
                    path: '/historydaily',
                    component: resolve => require(['../components/page/HistoryDaily.vue'], resolve)
                },
                {
                    path: '/historyweekly',
                    component: resolve => require(['../components/page/HistoryWeekly.vue'], resolve)
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/studentfiles',
                    component: resolve => require(['../components/page/StudentFiles.vue'], resolve)    // 拖拽列表组件
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
