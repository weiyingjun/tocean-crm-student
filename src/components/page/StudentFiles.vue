<template>
    <div class="nav">
        <template>
            <div>
                <el-breadcrumb separator=":">
                    <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item>学员信息</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </template>
        <template>
            <div>
                <el-collapse v-model="activeNames" style="margin-top: 20px">
                    <el-collapse-item title="基本资料" name="1">
                        <table border="1">
                            <tr>
                                <th>姓名</th>
                                <td>{{table.studentName}}</td>
                                <th>学号</th>
                                <td>{{table.id}}</td>
                            </tr>
                            <tr>
                                <th>班级</th>
                                <td>{{table.classNum}}</td>
                                <th>性别</th>
                                <td>{{table.sex}}</td>
                            </tr>
                            <tr>
                                <th>学历</th>
                                <td>{{table.schoolRecord}}</td>
                                <th>专业</th>
                                <td>{{table.collegeMajor}}</td>
                            </tr>
                            <tr>
                                <th>出生日期</th>
                                <td>{{table.birthDay}}</td>
                                <th>籍贯</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>院系</th>
                                <td>{{table.department}}</td>
                                <th>学生类型</th>
                                <td>{{table.studentType}}</td>
                            </tr>
                        </table>
                    </el-collapse-item>

                </el-collapse>


            </div>
        </template>
        <template>
            <div>
                <el-collapse v-model="activeNames" style="margin-top: 20px">
                    <el-collapse-item title="联系方式" name="1">
                        <table border="1">
                            <tr>
                                <th>联系电话</th>
                                <td>{{table.telephone}}</td>
                                <th>邮箱</th>
                                <td>{{table.email}}</td>
                            </tr>
                            <tr>
                                <th>家庭地址</th>
                                <td>{{table.homeAddress}}</td>
                                <th>QQ</th>
                                <td>{{table.qq}}</td>
                            </tr>
                            <tr>
                                <th>监护人</th>
                                <td>{{table.guardian}}</td>
                                <th>监护人电话</th>
                                <td>{{table.guardianphone}}</td>
                            </tr>
                            <tr>
                                <th>证件号码</th>
                                <td>{{table.credentialNum}}</td>
                                <th></th>
                                <td></td>
                            </tr>

                        </table>


                    </el-collapse-item>

                </el-collapse>


            </div>
        </template>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                table: {},
                currentPage1: 1,
                activeNames: ['1'],


            }
        },
        created(){
            this.getData();
        },
        methods: {
            getData(){
                let self = this;
                if (process.env.NODE_ENV === 'development') {
                    self.url = 'student/api/info/list';
                }

                self.$axios.get(self.url).then((res) => {
                    self.table = res.data.result;
                    if (self.table.sex = 1) {
                        self.table.sex = '男';
                    } else {
                        self.table.sex = '女';
                    }
                    if (self.table.schoolRecord = 1) {
                        self.table.schoolRecord = '本科'
                    }
                    if (self.table.studentType = 1) {
                        self.table.studentType = 'SD'
                    }
                    Date.prototype.toLocaleString = function () {
                        var Month = this.getMonth() + 1;
                        var day=this.getDate();
                        if (Month >= 10 ) {
                            Month = Month ;
                        }
                        else {
                            Month = "0" + Month ;
                        }
                        if (day>= 10 ) {
                            day = day ;
                        }
                        else {
                            day = "0" + day ;
                        }
                        return this.getFullYear() + "-" + Month + "-" + day ;
                    };

                        var unixTimestamp = new Date(self.table.birthDay).toLocaleString();
                        self.table.birthDay = unixTimestamp;

                })

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
<style>
    .el_input {
        width: 100px;
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
        width: auto;
    }

    table {
        width: 100%;
        text-align: center;
        border-collapse: collapse;
    }

    th {
        width: 25%;
        height: 50px;
    }

    td {
        width: 25%;
        height: 50px;
    }
</style>
