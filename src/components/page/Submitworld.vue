<template>
    <div>
        <div class="Table_Title">
        <span class="Little_font">当前功能：</span>提交作业
        </div>
        <div class="Menu_Bar">
            <input type="submit" value="提交" class="Menu_input"/>
        </div>
        <div class="Edit">
            <el-collapse>
                <el-collapse-item title="基本资料（+单击标题栏展开）">
                    <div>
                        <span class="sucess_msg">您不是学员，不能提交作业！</span>
                    </div>
                    <div>
                        <table cellpadding="0" border="1" cellspacing="2" class="Table">
                            <tr>
                                <td>标题：</td>
                                <td><input type="text" class="Table_in"/></td>
                                <td>学员：</td>
                                <td><input type="text" class="Table_in"/></td>
                            </tr>
                            <tr>
                                <td>源代码和文档：</td>
                                <td colspan="3"><input type="file"/></td>
                            </tr>
                            <tr></tr>
                        </table>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="Table_Submit">
            <input type="button" value="确认提交" class="sp"/>
            <input type="reset" value="重新输入" class="sp"/>
        </div>
    </div>

</template>
<style>
    .Table_Title{
        background-color: #EEF7FF;
        height:40px;
        color:blue;
        font-weight: bold;
        border: 1px solid #ccc;

    }
    .Little_font{
        display: inline-block;
        font-size:0.8em;
        color: #1A438E;
        margin-top: 10px;
        margin-left:4px;
    }
    .Menu_Bar{
        background-color: #EEF7FF;
        height:50px;
        margin-top:10px;
        font-weight: bold;
        border: 1px solid #ccc;
    }
    .Menu_input{
        position: absolute;
        right: 50px;
        top:110px;
    }
    .Edit{
        margin-top: 10px;
        border: 1px solid #ccc;
        height:180px;
    }
    .sucess_msg {
        font-size: 13px;
        background-color: #FFEE00;
        width: 40%;
    }
    .Table_Submit{
        border: 1px solid #ccc;
        margin-top: 10px;
        text-align: center;
        height: 30px;
        background-color:#DCE9F7 ;
    }
    .sp{
        display: inline-block;
        margin-top: 5px;
    }
    .Table{
        width:80%;
        margin-left:100px;
        margin-top:10px;
        font-size:13px;
        background-color:#DCE9F7 ;
        color:#1A438E;
        border-collapse: collapse;
        text-align: left;
    }
    .Table_in{
        width: 70%;
    }
</style>
