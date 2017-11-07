<template>
    <div>
        <div class="Table_Title">
            <span class="Little_font">当前功能：</span>就业申请信息
        </div>
        <div class="Menu_Bar">
            <span class="menu">您已经提交了就业申请信息！</span>
        </div>
        <div class="Edit">
            <el-collapse>
                <el-collapse-item title="申请列表（+单击标题栏展开）">
                    <div>
                        <table cellpadding="0" border="1" cellspacing="2" class="Table">
                            <tr>
                                <td>姓名</td>
                                <td>班级</td>
                                <td>期望就业方向</td>
                                <td>期望就业地点</td>
                                <td>期望推荐时间</td>
                                <td>是否需要拓胜推荐</td>
                            </tr>
                            <tr>
                                <td>卢胖子</td>
                                <td>计应一班</td>
                                <td>
                                   <select>
                                       <option>android</option>
                                       <option>java</option>
                                       <option>前端开发</option>
                                       <option>php</option>
                                       <option>c++</option>
                                       <option>c#</option>
                                       <option>测试方向</option>
                                   </select>
                                </td>
                                <td>
                                    <select>
                                        <option>广州</option>
                                        <option>深圳</option>
                                        <option>上海</option>
                                        <option>北京</option>
                                        <option>东莞</option>
                                        <option>佛山</option>
                                        <option>其他地点</option>
                                    </select>
                                </td>
                                <td><input type="text"/></td>
                                <td>
                                    <select>
                                        <option>是</option>
                                        <option>否</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="Table_Submit">
            <input type="button" value="确认提交" class="sp"/>
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
        height:30px;
        margin-top:10px;
        font-weight: bold;
        border: 1px solid #ccc;
    }
  .menu{
      font-size: 15px;
      background-color: #ff0;
      width:20%;
      display: inline-block;
      margin-top:5px;
      margin-left:4px;
   }
    .Edit{
        margin-top: 10px;
        border: 1px solid #ccc;
        height:220px;
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
    }
</style>
