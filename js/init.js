//初始化字典
function initDict()
{
    gDictData = [];
    for(var i = 0; i < gDictNum + 1; i++)
        gDictData[i] = [];

    $.ajax({
        async: true,
        url: "com/getDictDataList",
        type: "POST",
        success: function(data)
        {
            for(var i in data)
            {
                for(var j = 1; j < gDictNum + 1; j++)
                {
                    if(data[i]['dict_Id'] == j)
                        gDictData[j].push(data[i]);
                }
            }
        }
    });
}
