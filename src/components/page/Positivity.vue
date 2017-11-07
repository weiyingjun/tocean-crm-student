<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>班级考评积极性查询</el-breadcrumb-item>

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
                          style="width: 180px"></el-input>

                <el-button
                    @click="selectStudentPositivity"  style="margin-left: 20px">查询</el-button>
            </div>
        </template>
        <el-collapse v-model="activeNames" style="margin-top: 70px;margin-left: 25px">
            <el-collapse-item title="班级考评积极性列表 " name="1">
                <el-table
                    :data="table"
                    height="500"
                    border
                    style="width: 100%;margin-top: 10px"

                >
                    <el-table-column
                        prop="stuOrder"
                        label="序号"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="stuName"
                        label="学员"

                    >
                    </el-table-column>

                    <el-table-column
                        prop="class"
                        label="班级" >
                    </el-table-column>
                    <el-table-column
                        prop="takeTimes"
                        label="参与考评次数"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="validityTimes"
                        label="有效次数"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="score"
                        label="得分">
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
                currentPage1: 1,
                name: '',
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
                    stuOrder: '1	',
                    stuName: '吴良飞',
                    class: 'SD0806',
                    takeTimes:'1',
                    validityTimes:'1',
                    score:'2'

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
            stuMessage:function(val){
                console.log(`当前页`);
                this.$router.push('/studentmessage');
            }

        }

    }
</script>
