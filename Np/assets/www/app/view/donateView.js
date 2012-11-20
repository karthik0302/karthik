Ext.define('GS.view.donateView',{
    extend: 'Ext.Container',
    xtype: 'donateView',


    config: {
        xtype: 'formpanel',
        fullscreen : true,

        layout: 'vbox',

        items: [
            {
                xtype: 'toolbar',
                title: 'Donate',
                //  html: '<img src ="resources/images/image001.jpg">',

                items:[
                    {
                        xtype: 'button',
                        iconCls:'home',
                        zIndex:1,
                        iconMask:true,
                        text : 'Back',
                        id :'back'
                    }


                ]
            },{
                xtype: 'fieldset',
                //  xtype: 'formpanel',
                title: 'Donar form',
                defaults :
                {   required: true,
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                scrollable: true,
                xtype: 'panel',
                //layout: 'hbox',
                height: 375,
                margin: 5,
                width: 350,
                items: [
                    {
                        xtype: 'textfield',
                        name:'Name',
                        label:'Name',
                        placeHolder:'Enter yor name',
                        id :'doname'
                    }


                ]
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
                        text:'Donate Now',
                        scrollable: true,
                        id:'donation'
                    }
               ]
            },
            {
            xtype: 'panel',
            listeners:{
                init: function() {
                    this.callParent(arguments);
                    console.log("init");
                    Ext.data.proxy.Direct.prototype.createRequestCallback =
                        function(request, operation, callback, scope){
                            var me = this;
                            return function(data, event){
                                console.log('createRequestCallback: ' + operation);
                                me.processResponse(event.status, operation, request, data, callback, scope);
                            };
                        };

                    //Listen for exceptions observed by the proxy so we can report them and clean up.
              /*      Ext.getStore('s4o__Inspiration_Type__c').getProxy().addListener('exception', function (proxy, response, operation, options) {
                        // only certain kinds of errors seem to have useful information returned from the server
                        if (response.data) {
                            if (response.data.errorMessage) {
                                Ext.Msg.alert('Error', response.data.errorMessage);
                            } else {
                                Ext.Msg.alert('Error', operation.action + ' failed: ' + response.data.message);
                            }
                        } else {
                            Ext.Msg.alert('Error', operation.action + ' failed for an unknown reason');
                        }
                    });   */
                }
            }
            },



            {
                xtype:'panel',
                hidden:true,
                modal:true,
                hideOnMaskTap:true,
                width:320,
                height:150,
                id:'buttonPanel',
                items:[
                    {
                        xtype : 'panel',
                        dock : 'bottom',
                        layout : {
                            type : 'hbox',
                            align:'end'

                        },
                        width: 320,
                        items: [
                            {
                                xtype : 'button',
                                iconAlign:'top',
                                iconMask: true,
                                html:'<img style="height:25px" src="resources/icons/quote.png"/><div style="height:16px;font-family:calibri;font-size:12px">Inspire</div>',
                                zIndex: 1,
                                width:75,
                                margin:'10 10 10 10',
                                height:55,
                                ui:'darkGray',
                                text:'Inspire',
                                id : 'inspire'
                            },{
                                xtype : 'button',
                                iconAlign:'top',
                                zIndex: 1,
                                iconMask: true,
                                html:'<img style="height:25px" src="resources/icons/onebit_11.png"/><div style="height:16px;font-family:calibri;font-size:12px">Calendar</div>',
                                width: 75,
                                margin:'0 10 10 10',
                                height:55,
                                ui:'darkGray',
                                id : 'calendar'
                            },{
                                xtype : 'button',
                                iconAlign:'top',
                                html:'<img style="height:25px" src="resources/icons/onebit_10.png"/><div style="height:16px;font-family:calibri;font-size:12px">Chat</div>',
                                zIndex: 1,
                                iconMask: true,
                                width: 75,
                                margin:'0 10 10 10',
                                height:55,
                                ui:'darkGray',
                                id : 'chat'
                            }

                        ]
                    },{
                        xtype : 'panel',
                        dock : 'bottom',
                        layout : {
                            type : 'hbox',
                            align:'end'
                        },
                        width: 320,
                        items: [
                            {
                                xtype : 'button',
                                iconAlign:'top',
                                html:'<img style="height:25px" src="resources/icons/onebit_16.png"/><div style="height:16px;font-family:calibri;font-size:12px">Fundrasing</div>',
                                zIndex: 1,
                                iconMask: true,
                                width: 75,
                                margin:'0 10 10 10',
                                height:55,
                                ui:'darkGray',
                                id : 'fundraise'
                            },{
                                xtype : 'button',
                                iconAlign:'top',
                                html:'<img style="height:25px" src="resources/icons/onebit_27.png"/><div style="height:16px;font-family:calibri;font-size:12px">Volunteer</div>',
                                zIndex: 1,
                                iconMask: true,
                                width: 75,
                                margin:'0 10 10 10',
                                height:55,
                                ui:'darkGray',
                                id : 'volunteer'
                            },{
                                xtype : 'button',
                                iconAlign:'top',
                                html:'<img style="height:25px" src="resources/icons/moneyjar_by_Artdesigner.lv.png"/><div style="height:16px;font-family:calibri;font-size:12px">Progress</div>',
                                zIndex: 1,
                                iconMask: true,
                                width: 75,
                                margin:'0 10 10 10',
                                height:55,
                                ui:'darkGray',
                                id : 'progress'
                            }
                        ]
                    }

                ]
            },{
                docked:'bottom',
                xtype:'toolbar',
                layout:{
                    type:'hbox',
                    pack:'center'
                },
                items:[
                    {
                        xtype:'button',
                        text:'Menu',
                        ui:'lightBlue',
                        width:100,
                        id:'menuButton',
                        listeners:{
                            tap:function(){
                                if (!Ext.getCmp('buttonPanel').hidden){
                                    Ext.getCmp('buttonPanel').showBy(Ext.getCmp('menuButton'));
                                }


                            }
                        }
                    }
                ]
            }
        ]
    }
});