<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>作业信息查询</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </template>

        <el-collapse v-model="activeNames" style="margin-top: 20px">
            <el-collapse-item title="作业信息列表 " name="1">
                <el-table :data="table" border>
                    <el-table-column prop="stuName" label="学员" width="80"></el-table-column>
                    <el-table-column prop="class" label="班级" width="90"></el-table-column>
                    <el-table-column prop="homeworkTitle" label="作业标题"></el-table-column>
                    <el-table-column prop="homeworkDate" label="布置日期" width="120"></el-table-column>
                    <el-table-column prop="courses" label="课程"></el-table-column>
                    <el-table-column prop="fractions" label="分数" width="80"></el-table-column>
                </el-table>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentPage1: 1,


                activeNames: ['1'],

                table: [{
                    stuOrder: '1	',
                    stuName: '黄冲一',
                    class: 'SD0806',
                    homeworkTitle: 'Oracle常用关键字，函数，表连接的使用。',
                    homeworkDate: '2017-10-01',
                    courses: '阶段性课程总结/经典面试笔试讲解一',
                    fractions:'100.0'
                }],


            }
        },
        methods: {
            selectStudentHomework: function (val) {

                this.$router.push('/studentfiles');
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }

        }

    }
</script>
<style>
    .el_input {
        width: 180px;
        margin-left: 10px;
        margin-top: 20px;
    }

    .el_span {
        margin-left: 10px;
    }

    .select_class {
        margin-left: 10px;
        margin-top: 20px;
        height: 35px;


    }
</style>
