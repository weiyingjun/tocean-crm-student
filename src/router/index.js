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
            children: [
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
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/sw',
                    component: resolve => require(['../components/page/Submitworld.vue'], resolve)
                },
                {
                    path: '/si',
                    component: resolve => require(['../components/page/Submititem.vue'], resolve)
                },
                {
                    path: '/aj',
                    component: resolve => require(['../components/page/Askjob.vue'], resolve)
                },
                {
                    path: '/studentfiles',
                    component: resolve => require(['../components/page/StudentFiles.vue'], resolve)    // 学员档案
                },
                {
                    path: '/studentmessage',
                    component: resolve => require(['../components/page/StudentMessage.vue'], resolve)    // 基本资料
                },
                {
                    path: '/attendancerecord',
                    component: resolve => require(['../components/page/AttendanceRecord.vue'], resolve)    // 考勤记录
                }, {
                    path: '/disciplinequery',
                    component: resolve => require(['../components/page/DisciplineQuery.vue'], resolve)    // 违纪记录
                }, {
                    path: '/praisequery',
                    component: resolve => require(['../components/page/PraiseQuery.vue'], resolve)    // 表扬记录
                }, {
                    path: '/homeworkquery',
                    component: resolve => require(['../components/page/HomeworkQuery.vue'], resolve)    // 作业完成情况
                }, {
                    path: '/assessment',
                    component: resolve => require(['../components/page/Assessment.vue'], resolve)    // 项目考核情况
                }, {
                    path: '/positivity',
                    component: resolve => require(['../components/page/Positivity.vue'], resolve)    // 班级管理积极性
                }, {
                    path: '/queryspeech',
                    component: resolve => require(['../components/page/Queryspeech.vue'], resolve)    // 班级管理积极性
                }, {
                    path: '/queryspeechmsg',
                    component: resolve => require(['../components/page/QueryspeechMsg.vue'], resolve)    // 班级管理积极性
                }, {
                    path: '/groupquery',
                    component: resolve => require(['../components/page/GroupQuery.vue'], resolve)    // 班级管理积极性
                },
                {
                    path: '/sumscore',
                    component: resolve => require(['../components/page/SumScore.vue'], resolve)    // 班级管理积极性
                },
                {
                    path: '/sumscoremsg',
                    component: resolve => require(['../components/page/SumScoreMsg.vue'], resolve)    // 班级管理积极性
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
