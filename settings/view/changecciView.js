
Ext.define('GS.view.changecciView',{
    extend:'Ext.Container',
    xtype:'changecciView',
    config:{
        fulscreen:true,
        layout:{
            pack:'center',
            type:'hbox'

        },
        items: [
            {
                title: 'User Update',
                xtype: 'fieldset',
                instructions: 'Enter valid Information',
                defaults :
                {   required: true,
                    labelAlign: 'left',
                    labelWidth: '50%'
                },

                xtype: 'panel',
                layout:{
                    pack:'center',
                    type:'vbox'

                },
                height: 375,
                margin:5,
                width: 450,
                items: [
                    {
                        xtype: 'textfield',
                        name:'Name as appears on Card',
                        label:'Name as appears on Card:',
                        id :'nac'
                    },{
                        xtype: 'selectfield',
                        name:'Debit/Credit',
                        label:'Debit/Credit:',
                        options: [
                            {text: 'Credit', value: 'credit'},
                            {text: 'Debit', value: 'debit'}
                        ],
                        id :'cd'

                    },
                    {
                        xtype: 'passwordfield',
                        name:'Card Number',
                        placeHolder:'Enter 4 digit pin ',
                        label:'Card Number:',
                        id :'cn'
                    },
                    {
                        xtype: 'datepickerfield',
                        name:'Expiration Date',
                        label:'Expiration Date:',
                        id :'ed'
                    },
                    {
                        xtype: 'container',
                        height: 20
                    },

                    {
                        xtype:'panel',
                        html:'</br></br>',
                        layout:{
                            pack:'center',
                            type:'hbox'

                        },

                        items:[
                            {
                                xtype:'button',
                                padding:10,
                                width: 185,
                                height: 55,
                                text:'Update',
                                ui:'confirm',
                                id:'con',
                                listeners:{
                                    tap:function(){
                                        var url = 'http://karthik123-developer-edition.ap1.force.com/demo';


                                         var form = this.getChangecciViewView(),
                                             update = Ext.create('GS.model.userupdateModel', form.getValue()),
                                             store =  Ext.getStore('update');

                                        if(form.getRecord() != null){
                                            var record = store.findRecord('id', form.getRecord().getId());
                                            record.set(form.getValue());
                                        }

                                        else

                                        store.add(update);

                                    }

                                }


                            }
                        ]
                    }

                ]
            },
            {
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
