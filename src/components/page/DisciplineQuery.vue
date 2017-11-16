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
                <el-table :data="table"border style="width: 100%;margin-top: 10px">
                    <el-table-column prop="studentName" label="学员" width="120"></el-table-column>
                    <el-table-column prop="classNum" label="班级"></el-table-column>
                    <el-table-column prop="viloationDate" label="违纪时间"></el-table-column>
                    <el-table-column prop="violationSituation" label="违纪情况"></el-table-column>
                    <el-table-column prop="studentAttribute" label="学员违纪态度"></el-table-column>
                </el-table>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>
<style>

</style>
<script>


    export default {
        data() {
            return {
                currentPage1: 1,

                activeNames: ['1'],
                table: [],
                tables: {},



            }
        },
        created(){
            this.getData();
        },
        computed: {
            username(){
                let name = localStorage.getItem('USERNAME');
                return name;
            }
        },
        methods: {
            getData(){
                let self = this;
                if (process.env.NODE_ENV === 'development') {
                    self.url = 'student/api/violation/list';
                }
                self.$axios.get(self.url).then((res) => {
                    self.table = res.data.result;
                    Date.prototype.toLocaleString = function () {
                        var Month = this.getMonth() + 1;
                        var day = this.getDate()
                        if (Month >= 10) {
                            Month = Month;
                        }
                        else {
                            Month = "0" + Month;
                        }
                        if (day >= 10) {
                            day = day;
                        }
                        else {
                            day = "0" + day;
                        }


                        return this.getFullYear() + "-" + Month + "-" + day;
                    };
                    for (var i = 0; i < self.table.length; i++) {
                        var unixTimestamp = new Date(self.table[i].viloationDate).toLocaleString();
                        self.table[i].viloationDate = unixTimestamp;
                    }
                })
            },

            disciplineMsg() {

            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },


        },


    }
</script>
<style>

</style>
