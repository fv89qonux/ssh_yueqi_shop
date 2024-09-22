## 本项目实现的最终作用是基于SSH艺术课程购买网站
## 分为2个角色
### 第1个角色为管理员角色，实现了如下功能：
 - 修改个人密码
 - 公告管理
 - 添加公告
 - 用户管理
 - 留言管理
 - 管理员登录
 - 订单管理
 - 课程添加
 - 课程管理
### 第2个角色为用户角色，实现了如下功能：
 - 修改个人信息
 - 提交留言
 - 提交订单
 - 查看我的订单
 - 查看我的购物车
 - 查看特价课程
 - 查看系统公告
 - 查看首页
 - 购买课程
## 数据库设计如下：
# 数据库设计文档

**数据库名：** ssh_yueqi_shop

**文档版本：** 


| 表名                  | 说明       |
| :---: | :---: |
| [admininfo](#admininfo) |  |
| [catelog](#catelog) |  |
| [courseinfo](#courseinfo) |  |
| [courselist](#courselist) |  |
| [gonggao](#gonggao) | 公告信息表 |
| [liuyan](#liuyan) |  |
| [orderinfo](#orderinfo) |  |
| [studentinfo](#studentinfo) |  |
| [teacherinfo](#teacherinfo) |  |

**表名：** <a id="admininfo">admininfo</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  1   | UserId |   int   | 10 |   0    |    N     |  Y   |       | 用户ID  |
|  2   | username |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 用户名  |
|  3   | userPw |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 密码  |

**表名：** <a id="catelog">catelog</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  1   | catelog_id |   int   | 10 |   0    |    N     |  Y   |       |   |
|  2   | catelog_name |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  3   | catelog_del |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |

**表名：** <a id="courseinfo">courseinfo</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  1   | goods_id |   int   | 10 |   0    |    N     |  Y   |       | 商品ID  |
|  2   | goods_name |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  3   | goods_miaoshu |   text   | 65535 |   0    |    Y     |  N   |   NULL    |   |
|  4   | goods_pic |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 商品图片  |
|  5   | goods_ISBN |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  6   | goods_shichangjia |   int   | 10 |   0    |    Y     |  N   |   NULL    | 市场价  |
|  7   | goods_tejia |   int   | 10 |   0    |    Y     |  N   |   NULL    | 特价  |
|  8   | goods_isnottejia |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 正常价  |
|  9   | goods_isnottuijian |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 是否推荐  |
|  10   | goods_catelog_id |   int   | 10 |   0    |    Y     |  N   |   NULL    |   |
|  11   | goods_kucun |   int   | 10 |   0    |    Y     |  N   |   NULL    |   |
|  12   | goods_Del |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 是否删除  |

**表名：** <a id="courselist">courselist</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  1   | orderItem_id |   int   | 10 |   0    |    N     |  Y   |       |   |
|  2   | order_id |   int   | 10 |   0    |    Y     |  N   |   NULL    | 订单ID  |
|  3   | goods_id |   int   | 10 |   0    |    Y     |  N   |   NULL    | 商品ID  |
|  4   | goods_quantity |   int   | 10 |   0    |    Y     |  N   |   NULL    |   |

**表名：** <a id="gonggao">gonggao</a>

**说明：** 公告信息表

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  1   | gonggao_id |   int   | 10 |   0    |    N     |  Y   |       | 公告ID  |
|  2   | gonggao_title |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 公告标题  |
|  3   | gonggao_content |   text   | 65535 |   0    |    Y     |  N   |   NULL    | 公告内容  |
|  4   | gonggao_data |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 公告日期  |

**表名：** <a id="liuyan">liuyan</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  1   | liuyan_id |   int   | 10 |   0    |    N     |  Y   |       |   |
|  2   | liuyan_title |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  3   | liuyan_content |   text   | 65535 |   0    |    Y     |  N   |   NULL    |   |
|  4   | liuyan_date |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  5   | liuyan_user |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |

**表名：** <a id="orderinfo">orderinfo</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  1   | order_id |   int   | 10 |   0    |    N     |  Y   |       | 订单ID  |
|  2   | order_bianhao |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  3   | order_date |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  4   | order_zhuangtai |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  5   | order_fukuangfangshi |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  6   | order_jine |   int   | 10 |   0    |    Y     |  N   |   NULL    |   |
|  7   | order_user_id |   int   | 10 |   0    |    Y     |  N   |   NULL    |   |
|  8   | order_songhuodizhi |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |

**表名：** <a id="studentinfo">studentinfo</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  1   | user_id |   int   | 10 |   0    |    N     |  Y   |       | 用户ID  |
|  2   | user_name |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 用户名  |
|  3   | user_pw |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 用户密码  |
|  4   | user_realname |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 用户真实名字  |
|  5   | user_sex |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 用户性别  |
|  6   | user_age |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 用户年龄  |
|  7   | user_address |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 用户地址  |
|  8   | user_tel |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 用户电话  |
|  9   | user_email |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 用户邮箱  |
|  10   | user_del |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 是否删除  |

**表名：** <a id="teacherinfo">teacherinfo</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  1   | tid |   int   | 10 |   0    |    N     |  Y   |   0    |   |
|  2   | userName |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 用户名  |
|  3   | password |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 密码  |
|  4   | tname |   varchar   | 255 |   0    |    Y     |  N   |   NULL    | 真实名字  |
|  5   | tgender |   varchar   | 2 |   0    |    Y     |  N   |   NULL    |   |
|  6   | tage |   int   | 10 |   0    |    Y     |  N   |   NULL    |   |
|  7   | tqq |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  8   | temail |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  9   | tmajor |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |
|  10   | tstatus |   varchar   | 255 |   0    |    Y     |  N   |   NULL    |   |

