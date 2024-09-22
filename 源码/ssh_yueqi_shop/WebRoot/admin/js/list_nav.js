var t;


t=outlookbar.addtitle('修改密码')
outlookbar.additem('密码修改',t,'/ssh_yueqi_shop/admin/userinfo/userPw.jsp')


t=outlookbar.addtitle('用户管理')
outlookbar.additem('用户管理',t,'/ssh_yueqi_shop/admin/userMana.action')

t=outlookbar.addtitle('课程类别')
outlookbar.additem('类别管理',t,'/ssh_yueqi_shop/admin/catelogMana.action')
outlookbar.additem('添加类别',t,'/ssh_yueqi_shop/admin/catelog/catelogAdd.jsp')

t=outlookbar.addtitle('课程管理')
outlookbar.additem('课程管理',t,'/ssh_yueqi_shop/admin/goodsMana.action')
outlookbar.additem('添加课程',t,'/ssh_yueqi_shop/admin/goods/goodsAdd.jsp')


t=outlookbar.addtitle('订单管理')
outlookbar.additem('订单管理',t,'/ssh_yueqi_shop/admin/orderMana.action')

t=outlookbar.addtitle('网站论坛')
outlookbar.additem('网站论坛',t,'/ssh_yueqi_shop/admin/liuyanMana.action')


t=outlookbar.addtitle('公告管理')
outlookbar.additem('公告管理',t,'/ssh_yueqi_shop/admin/gonggaoMana.action')
outlookbar.additem('公告添加',t,'/ssh_yueqi_shop/admin/gonggao/gonggaoAdd.jsp')


t=outlookbar.addtitle('退出系统') 
outlookbar.additem('安全退出',t,'/ssh_yueqi_shop/admin/login.jsp')