Ext.define('GS.store.userupdateStore',{
    extend:'Ext.data.Store',
    requires:"Ext.data.proxy.LocalStorage",
    config:{
        model:'GS.model.userupdateModel',
        proxy:{
            type: 'LocalStorage',
            id: 'lcstore'
        },
        autoload: true,
        autosync: true

    }
});