<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template >
                <el-menu-item :index="items[0].index">
                    <i :class="items[0].icon"></i>{{ items[0].title }}
                </el-menu-item>
            </template>
            <template v-if="!!username" v-for="item in items2">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title
                            }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>

        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {

            return {
                ok: true,

                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '自述'
                    },
                    {
<<<<<<< HEAD
                        icon: 'el-icon-setting ',
                        index: '',
                        title: '提交作业'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '表格',
                        subs: [
                            {
                                index: 'basetable',
                                title: '基础表格'
                            },
                            {
                                index: 'vuetable',
                                title: 'Vue表格组件'
                            }, {
                                index: 'basetable',
                                title: '基础表格'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '提交报告',
                        subs: [
                            {
                                index: 'submitdaily',
                                title: '提交日报'
                            },
                            {
                                index: 'submitweekly',
                                title: '提交周报'
                            },
                            {
                                index: 'historydaily',
                                title: '历史日报'
                            },
                            {
                                index: 'historyweekly',
                                title: '历史周报'
                            }
                        ]
                    },

                    {
                        icon: 'el-icon-star-on',
                        index: 'basecharts',
                        title: '问卷调查',
                        subs: [
                                {
                                    index: 'writepaper',
                                    title: '填写问卷'
                                },
                                {
                                    index: 'historypaper',
                                    title: '历史问卷'
                                }
                            ]
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'drag',
                        title: '上传简历'
                    }, {
=======
                        icon: 'el-icon-setting',
                        index: 'sw',
                        title: '提交作业'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'si',
                        title: '提交项目'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'aj',
                        title: '就业申请'
                    },
                    {
>>>>>>> 5ce0807ade6eb095ede14c4af5adf851f19ecc97
                        icon: 'el-icon-document',
                        index: '4',
                        title: '学生信息查询',
                        subs: [

                            {
                                index: 'studentfiles',
                                title: '学员档案'
                            },
                            {
<<<<<<< HEAD
                                index: 'basecharts',
                                title: '学生信息2'
                            }, {
                                index: 'upload',
                                title: '学生信息3'
=======
                                index: 'attendancerecord',
                                title: '考勤记录'
                            }, {
                                index: 'disciplinequery',
                                title: '违纪记录'

                            }, {
                                index: 'praisequery',
                                title: '表扬记录'
>>>>>>> 5ce0807ade6eb095ede14c4af5adf851f19ecc97

                            }]

                    }
                ]
            }
        },
        computed: {
            onRoutes(){
                return this.$route.path.replace('/', '');
            },
            username(){
                let username = localStorage.getItem('ms_username');
                return username;
            },
            items2(){
                return this.items.splice(1);
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom: 0;
        background: #2E363F;
    }

    .sidebar > ul {
        height: 100%;
    }
</style>
