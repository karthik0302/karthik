Ext.define('GS.model.userupdateModel',{
    extend:'Ext.data.Model',
    config:{
        idProperty:'id',
        fields:[
            {name:'dept__Credit_Card_Name__c',type:'string'},
            {name:'dept__Credit_Card_Type__c',type:'string'},
            {name:'dept__Credit_Card_Number__c',type:'string'},
            {name:'dept__Expiration__c',type:'string'}

            ]
    }
});