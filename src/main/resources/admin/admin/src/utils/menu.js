const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"办事类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBanshi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"办事结果管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBanshijieguo"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"补贴活动通告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryButiehuodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"发展类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryDangyuanfazhanjilu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"农业补贴类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNongyebutie"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"土地变更类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryTudibiangeng"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"文化程度管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryWenhua"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"办事记录管理",
                        "menuJump":"列表",
                        "tableName":"banshijilu"
                    }
                ],
                "menu":"办事记录管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "审核",
                            "修改",
                            "删除"
                        ],
                        "menu":"办事申请管理",
                        "menuJump":"列表",
                        "tableName":"banshishenqing"
                    }
                ],
                "menu":"办事申请管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"补贴活动通告管理",
                        "menuJump":"列表",
                        "tableName":"butiehuodong"
                    }
                ],
                "menu":"补贴活动通告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"党员发展管理",
                        "menuJump":"列表",
                        "tableName":"dangyuanfazhanjilu"
                    }
                ],
                "menu":"党员发展管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"留言板管理",
                        "menuJump":"列表",
                        "tableName":"liuyan"
                    }
                ],
                "menu":"留言板管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"农业补贴管理",
                        "menuJump":"列表",
                        "tableName":"nongyebutie"
                    }
                ],
                "menu":"农业补贴管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"土地变更管理",
                        "menuJump":"列表",
                        "tableName":"tudibiangeng"
                    }
                ],
                "menu":"土地变更管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "报表",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"工作人员管理",
                        "menuJump":"列表",
                        "tableName":"gongzuorenyuan"
                    }
                ],
                "menu":"工作人员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
,
{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"办事记录管理",
                        "menuJump":"列表",
                        "tableName":"banshijilu"
                    }
                ],
                "menu":"办事记录管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核"
                        ],
                        "menu":"办事申请管理",
                        "menuJump":"列表",
                        "tableName":"banshishenqing"
                    }
                ],
                "menu":"办事申请管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"补贴活动通告管理",
                        "menuJump":"列表",
                        "tableName":"butiehuodong"
                    }
                ],
                "menu":"补贴活动通告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"党员发展管理",
                        "menuJump":"列表",
                        "tableName":"dangyuanfazhanjilu"
                    }
                ],
                "menu":"党员发展管理"
            }
			,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"留言板管理",
                        "menuJump":"列表",
                        "tableName":"liuyan"
                    }
                ],
                "menu":"留言板管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改"
                        ],
                        "menu":"农业补贴管理",
                        "menuJump":"列表",
                        "tableName":"nongyebutie"
                    }
                ],
                "menu":"农业补贴管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改"
                        ],
                        "menu":"土地变更管理",
                        "menuJump":"列表",
                        "tableName":"tudibiangeng"
                    }
                ],
                "menu":"土地变更管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "报表"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"工作人员",
        "tableName":"gongzuorenyuan"
    }
]
    }
}
export default menu;
