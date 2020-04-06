xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":100,
                        "min":50,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":450
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":50,
                        "min":20,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":150,
                        "min":10,
                        "locked":false,
                        "folded":true,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":530
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":120,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setWidth("66.66666666666667em")
                .setHeight("37.5em")
                .setType("horizontal"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setRotate(359)
                .setLeft("3.892857142857143em")
                .setTop("6.071428571428571em")
                .setWidth("7.5em")
                .setHeight("3.0357142857142856em")
                .setCaption("yfgfgc")
                .setCustomStyle({
                    "KEY":{
                        "font-size":"28px"
                    }
                }),
                "main"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});