<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>学员违纪信息查询</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </template>
        <el-collapse v-model="activeNames" style="margin-top: 20px">
            <el-collapse-item title="学员违纪信息查询 " name="1">
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
                        width="120"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="class"
                        label="班级">
                    </el-table-column>
                    <el-table-column
                        prop="disciplineTime"
                        label="违纪时间"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="disciplineSituation"
                        label="违纪情况"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="attitude"
                        label="学员违纪态度">
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

</style>
<script>
    export default {
        data() {
            return {
                currentPage1: 1,
                name: '',

                activeNames: ['1'],

                class_selected: '',
                class_leave: '',
                table: [{
                    stuOrder: '1	',
                    stuName: '郭子尧',
                    class: 'SD0902',
                    disciplineTime: '2009-07-22',
                    disciplineSituation: '早上迟到',
                    attitude: '态度良好'
                }, {
                    stuOrder: '2	',
                    stuName: '	曾耀钧',
                    class: 'SD0902',
                    disciplineTime: '2009-07-21',
                    disciplineSituation: '迟到',
                    attitude: '态度恶劣'
                }],


            }
        },
        methods: {

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }

        }

    }
</script>
