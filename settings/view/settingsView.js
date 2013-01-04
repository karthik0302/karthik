Ext.define('GS.view.settingsView',{
	extend:'Ext.Container',
	xtype:'settingsView',
	config:{
		fulscreen:true,
        layout:{
            pack:'center',
            type:'hbox'

        },
		items: [
            {

                xtype: 'panel',
                layout:{
                    pack:'center',
                    type:'vbox'

                },
                items: [

                    {
                        xtype: 'togglefield',
                        name:'AutoUpdate',
                        label:'AutoUpdate:',
                        labelWidth:'55%',
                        id :'cn'
                    }

                ]
            },
            {
                xtype:'panel',
                hidden:true,
                modal:true,
                hideOnMaskTap:true,
                styleHtmlContent: true,
                centered: true,
                scrollable: true,
                width:375,
                height:520,
                id:'buttonPanelx',
                items:[
                    {

                        docked : 'top',
                        xtype: 'toolbar',
                        title: 'Instruction',
                        labelWidth: '60%'
                    },
                    {
                        xtype:'panel',
                        layout:{
                            pack:'center'
                        },
                        html:[
                            "<p></p>"
                            ].join("")



                    }


                ]
            }, {
                xtype:'panel',
                hidden:true,
                modal:true,
                hideOnMaskTap:true,


                styleHtmlContent: true,


                id:'buttonPanel1',
                items:[
                    {
                        xtype : 'panel',
                        dock : 'bottom',
                        layout : {
                            type : 'hbox',
                            align:'end'

                        },

                        items: [
                            {
                                xtype : 'button',
                                iconAlign:'top',
                                iconMask: true,
                                zIndex: 1,
                                width:320,
                                margin:'10 10 10 10',
                                height:55,
                                ui:'darkGray',
                                text:'Change Password',
                                id : 'pwdx',
                                listeners:{
                                    tap:function(){

                                        Ext.Viewport.setActiveItem({
                                            xtype : 'changepwdView'
                                        })
                                    }
                                }
                            }

                        ]
                    },
                    {
                        xtype : 'panel',
                        dock : 'bottom',
                        layout : {
                            type : 'hbox',
                            align:'end'
                        },

                        items: [
                            {
                                xtype : 'button',
                                iconAlign:'top',
                                zIndex: 1,
                                iconMask: true,
                                width: 320,
                                margin:'0 10 10 10',
                                height:55,
                                ui:'darkGray',
                                text:'Change CreditCard Information',
                                id : 'ccix',
                                listeners:{
                                    tap:function(){
                                        Ext.Viewport.setActiveItem({
                                            xtype : 'changecciView'
                                        })
                                    }
                                }
                            }

                        ]
                    }

                ]
            },{
                xtype:'panel',
                hidden:true,
                modal:true,
                hideOnMaskTap:true,
                styleHtmlContent: true,
                id:'buttonPanel2',
                items:[
                    {
                        xtype : 'panel',
                        dock : 'bottom',
                        layout : {
                            type : 'hbox',
                            align:'end'

                        },

                        items: [
                            {
                                xtype : 'button',
                                iconAlign:'top',
                                iconMask: true,
                                zIndex: 1,
                                width:320,
                                margin:'10 10 10 10',
                                height:55,
                                ui:'darkGray',
                                text:'S4o',
                                id : 's4o',
                                listeners:{
                                    tap:function(){

                                    }
                                }
                            }

                        ]
                    },
                    {
                        xtype : 'panel',
                        dock : 'bottom',
                        layout : {
                            type : 'hbox',
                            align:'end'
                        },

                        items: [
                            {
                                xtype : 'button',
                                iconAlign:'top',
                                zIndex: 1,
                                iconMask: true,
                                width: 320,
                                margin:'0 10 10 10',
                                height:55,
                                ui:'darkGray',
                                text:'EULA',
                                id : 'eula',
                                listeners:{
                                    tap:function(){

                                    }
                                }
                            }

                        ]
                    }

                ]
            },
            {
                docked:'top',
                xtype:'toolbar',
                layout:{
                    type:'hbox',
                    pack:'center'
                },
                items:[
                    {
                        xtype:'button',
                        text:'Intention',
                        ui:'round',
                        width:100,
                        id:'menuButtonx'
                    },{
                        xtype:'button',
                        text:'UserUpdate',
                        ui:'round',
                        width:100,
                        id:'menuButton1',
                        listeners:{
                            tap:function(){
                                if (!Ext.getCmp('buttonPanel1').hidden){
                                    Ext.getCmp('buttonPanel1').showBy(Ext.getCmp('menuButton1'));

                               }


                            }
                        }
                    },{
                        xtype:'button',
                        text:'AboutUs',
                        ui:'round',
                        width:100,
                        id:'menuButton3',
                        listeners:{
                            tap:function(){
                                if (!Ext.getCmp('buttonPanel2').hidden){
                                    Ext.getCmp('buttonPanel2').showBy(Ext.getCmp('menuButton3'));
                                }


                            }
                        }
                    },{
                        xtype:'button',
                        text:'Help',
                        ui:'round',
                        width:100,
                        id:'menuButton2',
                        listeners:{
                            tap:function(){
                                if (!Ext.getCmp('buttonPanelx').hidden){
                                    Ext.getCmp('buttonPanelx').showBy(Ext.getCmp('menuButton2'));
                                }


                            }
                        }
                    }
                ]
            },
            {
                docked:'bottom',
                xtype:'toolbar',
                layout:{
                    type:'hbox',
                    pack:'center'
                },
                items:[
                    {
                        xtype: 'button',
                        iconCls:'home',
                        zIndex:1,
                        iconMask:true,
                        width:95,
                        text : 'Home',
                        id :'back'
                    }
                ]
            }
        ]
    }
});
