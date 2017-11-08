<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>录入学员演讲信息</el-breadcrumb-item>

                </el-breadcrumb>
            </div>
        </template>
        <template>
            <div style="float:right">
                <el-button
                    @click="selectStudentPositivity" style="margin-left: 20px">返回
                </el-button>
            </div>
        </template>
        <el-collapse v-model="activeNames" style="margin-top: 70px;margin-left: 25px">
            <el-collapse-item title="基本资料 " name="1">
                <table border="1px" cellspacing="0px" cellpadding="0px">
                    <tr>
                        <th class="left">
                            <span class="mdiv">学员</span>
                        </th>
                        <th class="right">
                            <div>
                                <select v-model="class_selected" class="select_class">
                                    <option v-for="option in class_options" v-bind:value="option.class">
                                        {{ option.text }}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <select v-model="class_selected" class="select_class">
                                    <option v-for="option in class_options" v-bind:value="option.class">
                                        {{ option.text }}
                                    </option>
                                </select>
                            </div>
                        </th>
                        <th class="left"><span class="mdiv">演讲日期</span></th>
                        <th class="right"><span v-model="date">{{date}}</span></th>
                    </tr>
                    <tr>
                        <th class="left">
                            <span class="mdiv">演讲内容</span>
                        </th>
                        <th class="right">
                            <textarea v-model="textarea_content">{{textarea_content}}</textarea>
                        </th>
                        <th class="left"></th>
                        <th class="right"></th>
                    </tr>
                    <tr>
                        <th class="left">
                            <span class="mdiv">项目经理</span>
                        </th>

                        <th class="right"><span v-model="manager">{{manager}}</span></th>

                        <th class="left">
                            <span class="mdiv">评分</span>
                        </th>

                        <th class="right"><div>
                                <select v-model="scoring" class="select_class">
                                    <option v-for="option in scoring_options" v-bind:value="option.scoring">
                                        {{ option.text }}
                                    </option>
                                </select>
                            </div></th>
                    </tr>
                    <tr>
                        <th class="left">
                            <span class="mdiv">评价</span>
                        </th>
                        <th class="right">
                            <textarea v-model="textarea_appraise">{{textarea_appraise}}</textarea>
                        </th>
                    </tr>
                    <tr>
                        <th class="left">
                            <span class="mdiv">建议</span>
                        </th>
                        <th class="right">
                            <textarea v-model="textarea_suggest">{{textarea_suggest}}</textarea>
                        </th>
                    </tr>
                </table>


            </el-collapse-item>
        </el-collapse>

    </div>
</template>
<style>
    .mdiv {
        text-align: center;
        font-size: 15px;
    }

    .left {
        height: 50px;
        width: 300px;
        border-left: 0px;
        border-right: 0px;
        border-top: 0px;


    }

    .right {
        width: 500px;
        border-top: 0px;
    }

    .select_class {
        width: 400px
    }
    textarea{
        width: 300px;height: 80px;padding: 20px;margin-top: 10px
    }
    table{

        width: 1100px;height: 500px
    }

</style>
<script>
    export default {
        data() {
            return {
                currentPage1: 1,
                name: '',
                mTime: '',
                bTime: '',
                activeNames: ['1'],
                date: '2010-10-10',
                textarea_content:'Struts知识回顾',
                textarea_appraise:'准备充分，条理清楚，与观众沟通较多，较有吸引力',
                textarea_suggest:'继续加油',
                manager:'李一',
                class_selected: '',
                scoring:'',
                scoring_options:[
                    {text: '', scoring: ''},
                    {text: '1', scoring: '1'},
                    {text: '2', scoring: '2'},
                    {text: '3', scoring: '3'},
                    {text: '4', scoring: '4'},
                ],
                class_options: [
                    {text: '', class: ''},
                    {text: 'ASD08061', class: '1'},
                    {text: 'ASD08063', class: '2'},
                    {text: 'ASD08062', class: '3'},
                    {text: 'ASD0807', class: '4'},
                ],

                table: [{
                    stuOrder: '1	',
                    stuName: '吴良飞',
                    class: 'SD0806',
                    takeTimes: '1',
                    validityTimes: '1',
                    score: '2'

                }],


            }
        },
        methods: {
            selectStudentPositivity: function (val) {

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
                this.$router.push('/studentmessage');
            }

        }

    }
</script>
