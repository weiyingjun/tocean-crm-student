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
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 上传简历
                },
                {
                    path: '/sw',
                    component: resolve => require(['../components/page/Submitworld.vue'], resolve) //提交作业
                },
                {
                    path: '/si',
                    component: resolve => require(['../components/page/Submititem.vue'], resolve) //提交项目
                },
                {
                    path: '/aj',
                    component: resolve => require(['../components/page/Askjob.vue'], resolve) //就业申请
                },
                {
                    path: '/submitdaily',
                    component: resolve => require(['../components/page/SubmitDaily.vue'], resolve)  //提交日报
                },
                {
                    path: '/submitweekly',
                    component: resolve => require(['../components/page/SubmitWeekly.vue'], resolve)  //提交周报
                },
                {
                    path: '/historydaily',
                    component: resolve => require(['../components/page/HistoryDaily.vue'], resolve)  //历史日报
                },
                {
                    path: '/historyweekly',
                    component: resolve => require(['../components/page/HistoryWeekly.vue'], resolve)  //历史周报
                },
                {
                    path: '/writepaper',
                    component: resolve => require(['../components/page/WritePaper.vue'], resolve)  //填写问卷
                },
                {
                    path: '/historypaper',
                    component: resolve => require(['../components/page/HistoryPaper.vue'], resolve)  //历史问卷
                },
                {
                    path: '/historypaper',
                    component: resolve => require(['../components/page/HistoryPaper.vue'], resolve)  //历史问卷
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
                    component: resolve => require(['../components/page/Queryspeech.vue'], resolve)    // 演讲查询
                }, {
                    path: '/queryspeechmsg',
                    component: resolve => require(['../components/page/QueryspeechMsg.vue'], resolve)    //演讲查询列表
                }, {
                    path: '/groupquery',
                    component: resolve => require(['../components/page/GroupQuery.vue'], resolve)    // 分组讨论查询
                },
                {
                    path: '/sumscore',
                    component: resolve => require(['../components/page/SumScore.vue'], resolve)    // 综合考评分
                },
                {
                    path: '/sumscoremsg',
                    component: resolve => require(['../components/page/SumScoreMsg.vue'], resolve)    // 综合考评分信息
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
