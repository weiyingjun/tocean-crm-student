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
        <template>

            <div>
                <span class="el_span">班级</span>
                <select v-model="class_selected" class="select_class">
                    <option v-for="option in class_options" v-bind:value="option.class">
                        {{ option.text }}
                    </option>
                </select>

                <span class="el_span">学员</span>
                <el-input class="el_input" v-model="name" type="text"
                          style="width: 200px"></el-input>

                <span class="el_span">考评类型</span>
                <select v-model="assessmentType_selected" class="select_class" style="width: 100px;margin-left: 20px">
                    <option v-for="option in assessmentType_options" v-bind:value="option.assessmentType">
                        {{ option.text }}
                    </option>
                </select>

                <span class="el_span">项目</span>
                <select v-model="projects_selected" class="select_class" style="width: 300px;margin-left: 20px">
                    <option v-for="option in projects_options" v-bind:value="option.projects">
                        {{ option.text }}
                    </option>
                </select>
                <br/>
                <span class="el_span">时间</span>
                <el-input class="el_input" v-model="mTime" type="text"
                          style="width: 180px"></el-input>
                <span class="el_span">至</span>
                <el-input class="el_input" v-model="bTime" type="text"
                          style="width: 180px"></el-input>

                <span class="el_span">得分</span>
                <el-input class="el_input" v-model="mScore" type="text"
                          style="width: 180px"></el-input>
                <span class="el_span">至</span>
                <el-input class="el_input" v-model="bScore" type="text"
                          style="width: 180px"></el-input>
                <el-button
                    @click="selectStudentAssessment"  style="margin-left: 20px">查询</el-button>
            </div>
        </template>
        <el-collapse v-model="activeNames" style="margin-top: 20px">
            <el-collapse-item title="项目考核信息列表" name="1">
                <el-table
                    :data="table"
                    height="500"
                    border
                    style="width: 100%;margin-top: 10px">


                    <el-table-column
                        prop="stuOrder"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="stuName"
                        label="学员"
                        width="100"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="class"
                        label="班级" width="100">
                    </el-table-column>
                    <el-table-column
                        prop="project"
                        label="项目"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="appraisalDate"
                        label="考核日期"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="assessmentType"
                        label="考核类型"  width="120">
                    </el-table-column>
                    <el-table-column
                        prop="fractions"
                        label="分数" width="100">
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
                mTime:'',
                bTime:'',
                mScore:'',
                bScore:'',
                activeNames: ['1'],
                class_options: [
                    {text: '', class: ''},
                    {text: 'ASD08061', class: '1'},
                    {text: 'ASD08063', class: '2'},
                    {text: 'ASD08062', class: '3'},
                    {text: 'ASD0807', class: '4'},
                ],
                assessmentType_options:[
                    {text:'',courses:''},
                    {text:'	初次考核',assessmentType:'1'},
                    {text:'	最终考核',assessmentType:'2'},

                ],
                projects_options:[
                    {text:'',projects:''},
                    {text:'DMS',projects:'1'},
                    {text:'	GWAP1.0',projects:'2'},
                    {text:'	GWAP2.0',projects:'3'},
                    {text:'GWAP3.0',projects:'4'},
                    {text:'	电信计费项目',projects:'5'},
                ],
                class_selected: '',
                assessmentType_selected: '',
                projects_selected:'',
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
