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
        <template>

            <div>
                <span class="el_span">班级</span>
                <select v-model="class_selected" class="select_class">
                    <option v-for="option in class_options" v-bind:value="option.class">
                        {{ option.text }}
                    </option>
                </select>
                <span class="el_span">课程</span>
                <select v-model="courses_selected" class="select_class" style="width: auto">
                    <option v-for="option in courses_options" v-bind:value="option.courses">
                        {{ option.text }}
                    </option>
                </select>
                <span class="el_span">学员</span>
                <el-input class="el_input" v-model="name" type="text"
                          style="width: 200px"></el-input>


                <el-button
                    @click="selectStudentHomework"  style="margin-left: 20px">查询</el-button>
            </div>
        </template>
        <el-collapse v-model="activeNames" style="margin-top: 20px">
            <el-collapse-item title="作业信息列表 " name="1">
                <el-table
                    :data="table"
                    height="500"
                    border
                    style="width: 100%;margin-top: 10px">


                    <el-table-column
                        prop="stuOrder"
                        label="序号"
                        width="70">
                    </el-table-column>
                    <el-table-column
                        prop="stuName"
                        label="学员"
                        width="80"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="class"
                        label="班级" width="90">
                    </el-table-column>
                    <el-table-column
                        prop="homeworkTitle"
                        label="作业标题"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="homeworkDate"
                        label="布置日期" width="120"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="courses"
                        label="课程">
                    </el-table-column>
                    <el-table-column
                        prop="fractions"
                        label="分数" width="80">
                    </el-table-column>

                </el-table>
            </el-collapse-item>

        </el-collapse>
        <template>
            <div>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage1"
                    :page-sizes="[10,20,50]"
                    :page-size="10"
                    layout=" ->,prev,pager,next, jumper,sizes,total,slot"
                    :total="1000">
                </el-pagination>
            </div>
        </template>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentPage1: 1,
                name: '',

                activeNames: ['1'],
                class_options: [
                    {text: '', class: ''},
                    {text: 'ASD08061', class: '1'},
                    {text: 'ASD08063', class: '2'},
                    {text: 'ASD08062', class: '3'},
                    {text: 'ASD0807', class: '4'},
                ],
                courses_options:[
                    {text:'',courses:''},
                    {text:'开学典礼及虚拟企业运作流程',courses:'1'},
                    {text:'Unix操作系统',courses:'2'},
                    {text:'CVS版本控制',courses:'3'},
                    {text:'Core Java',courses:'4'},
                    {text:'Java 语言基础',courses:'5'},
                ],
                class_selected: '',
                courses_selected: '',
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
