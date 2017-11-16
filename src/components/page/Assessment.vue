<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>项目考核信息查询</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </template>

        <el-collapse v-model="activeNames" style="margin-top: 20px">
            <el-collapse-item title="项目考核信息列表" name="1" >
                <el-table :data="table" border>
                    <el-table-column prop="stuName" label="学员" width="100"></el-table-column>
                    <el-table-column prop="class" label="班级" width="100"></el-table-column>
                    <el-table-column prop="project" label="项目"></el-table-column>
                    <el-table-column prop="appraisalDate" label="考核日期"  width="100"></el-table-column>
                    <el-table-column prop="assessmentType" label="考核类型"  width="120"></el-table-column>
                    <el-table-column prop="fractions" label="分数" width="100"></el-table-column>
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
                    project: '	DMS',
                    appraisalDate: '2017-10-01',
                    assessmentType: '	初次考核',
                    fractions:'100.0'
                }],


            }
        },
        methods: {
            selectStudentAssessment: function (val) {

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
