/**
 * Created with JetBrains WebStorm.
 * User: user
 * Date: 11/20/12
 * Time: 7:18 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('GS.store.donateStore',{
    extend:'Ext.data.Store',
    requires:"Ext.data.proxy.LocalStorage",

    config:{
        model:'GS.model.donateModel',
         data: '{!s4o__Inspiration_Type__c}',
         autoLoad: true,
          pageSize: 50,
        groupField: "Status",
        groupDir: "ASC"



    }
});