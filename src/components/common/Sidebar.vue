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
                        icon: 'el-icon-document',
                        index: '4',
                        title: '学生信息查询',
                        subs: [

                            {
                                index: 'studentfiles',
                                title: '学员档案'
                            },
                            {
                                index: 'attendancerecord',
                                title: '学员考勤信息查询'
                            }, {
                                index: 'upload',
                                title: '学生信息3'

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
