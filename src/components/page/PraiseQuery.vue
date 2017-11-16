<template>
    <div>
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>学员表扬信息查询</el-breadcrumb-item>

                </el-breadcrumb>
            </div>
        </template>
        <el-collapse v-model="activeNames" style="margin-top: 20px">
            <el-collapse-item title="学员表扬信息列表" name="1">
                <el-table :data="table" border >
                    <el-table-column prop="studentName" label="学员" width="150"></el-table-column>
                    <el-table-column prop="classNum" label="班级" width="150"></el-table-column>
                    <el-table-column prop="praiseDate" label="表扬时间"></el-table-column>
                    <el-table-column prop="reason" label="表扬原因"></el-table-column>
                    <el-table-column prop="score" label="表扬加分" width="150"></el-table-column>
                </el-table>
            </el-collapse-item>

        </el-collapse>

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
                activeNames: ['1'],
                table: [],
            }
        },
        created(){
            this.getData();
        },
        methods: {
            getData(){
                let self = this;
                if (process.env.NODE_ENV === 'development') {
                    self.url = 'student/api/parise/list';
                }
                self.$axios.get(self.url).then((res) => {
                    self.table = res.data.result;
                    Date.prototype.toLocaleString = function () {
                        var Month = this.getMonth() + 1;
                        var day=this.getDate()
                        if (Month >= 10 )
                        {
                            Month = Month ;
                        }
                        else
                        {
                            Month = "0" + Month ;
                        }
                        if (day>= 10 )
                        {
                            day = day ;
                        }
                        else
                        {
                            day = "0" + day ;
                        }


                        return this.getFullYear() + "-" + Month + "-" + day ;
                    };
                    for (var i = 0; i < self.table.length; i++) {
                        var unixTimestamp = new Date(self.table[i].praiseDate).toLocaleString();
                        self.table[i].praiseDate = unixTimestamp;
                    }

                })

            },
            selectStudentLeave: function (val) {

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
