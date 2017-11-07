<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>学员演讲查询</el-breadcrumb-item>

                </el-breadcrumb>
            </div>
        </template>
        <template>

            <div style="float:right">
                <span class="el_span">班级</span>
                <select v-model="class_selected" class="select_class">
                    <option v-for="option in class_options" v-bind:value="option.class">
                        {{ option.text }}
                    </option>
                </select>
                <span class="el_span">学员</span>
                <el-input class="el_input" v-model="name" type="text"
                          style="width: 100px"></el-input>
                <span class="el_span">项目经理</span>
                <el-input class="el_input" v-model="manager" type="text"
                          style="width: 100px"></el-input>
                <span class="el_span">时间</span>
                <el-input class="el_input" v-model="mTime" type="text"
                          style="width: 180px"></el-input>
                <span class="el_span">至</span>
                <el-input class="el_input" v-model="bTime" type="text"
                          style="width: 180px"></el-input>
                <el-button
                    @click="selectStudentSpeech" style="margin-left: 20px">查询
                </el-button>
            </div>
        </template>
        <template>
            <div>
                <el-collapse v-model="activeNames" style="margin-top: 70px;margin-left: 25px">
                    <el-collapse-item title="学员演讲信息列表" name="1">
                        <el-table :data="table" height="500" border style="width: 100%;margin-top: 10px" @cell-click="stuMessage">
                            <el-table-column type="selection" width="55"></el-table-column>
                            <el-table-column
                                prop="stuOrder"
                                label="序号"
                                width="80">
                            </el-table-column>
                            <el-table-column
                                prop="class"
                                label="班级"
                                width="100">
                            </el-table-column>
                            <el-table-column
                                prop="stuName"
                                label="学员"
                                width="100">
                            </el-table-column>
                            <el-table-column
                                prop="speechTimes"
                                label="演讲日期"
                                width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="speech"
                                label="演讲内容"
                                width="200"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="manager"
                                label="项目经理"
                                width="90">
                            </el-table-column>
                            <el-table-column
                                prop="appraise"
                                label="评价">
                            </el-table-column>
                            <el-table-column
                                prop="score"
                                label="评分"
                                width="80">
                            </el-table-column>

                        </el-table>
                    </el-collapse-item>

                </el-collapse>
            </div>
        </template>
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
        width: 100px;
    }
</style>
<script>
    export default {
        data() {
            return {
                checkAll: false,

                isIndeterminate: true,
                currentPage1: 1,
                name: '',
                manager: '',
                mTime: '',
                bTime: '',
                activeNames: ['1'],

                class_selected: '',
                class_options: [
                    {text: '', class: ''},
                    {text: 'ASD08061', class: '1'},
                    {text: 'ASD08063', class: '2'},
                    {text: 'ASD08062', class: '3'},
                    {text: 'ASD0807', class: '4'},
                ],

                table: [{
                    stuOrder: '1',

                    class: 'ASD0904',
                    stuName: '唐华嶓',
                    speechTimes: '2009-08-12',
                    speech: 'corejava的相关知识',
                    manager: '陈才秀',
                    appraise: '准备充分,表达思路清晰,但是时间的把握还有待提高,没有把准备的内容讲完.',
                    score: '2'

                }, {
                    stuOrder: '2',
                    class: 'ASD0907',
                    stuName: '刘君煌',
                    speechTimes: '2009-08-12',
                    speech: 'java基础',
                    manager: '杨丽娟',
                    appraise: '准备较充分，吐字清晰，演讲过程较流畅，时间控制较好!',
                    score: '4'

                }],


            }
        },
        methods: {
            selectStudentSpeech: function (val) {

                this.$router.push('/studentfiles');
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            stuMessage: function (val) {
                console.log(`当前页`);
                this.$router.push('/queryspeechmsg');
            }

        }

    }
</script>
