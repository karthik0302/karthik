Ext.define('GS.controller.donateController',{
	extend :'Ext.app.Controller',
	
	config: {
		control :{
						
			donate: {
				tap: 'goToDonate'
			},
			myProgress :{
				tap: 'goToMyProgress'
			},
            donation: {
                tap: 'goToDonation'
            }
		
		},
	
		refs:{
			
			donate: '#donateNow',
			myProgress: '#myProgress',
            donation: '#donation'
		}
		
	},
	
	views: [
	    	'donateView'
	        ],
	        
	models : ['login'],
	    	
	stores : ['instance'],
	    	
	requires: ['GS.model.login'],
	
	goToDonate : function(){
		Ext.Viewport.setActiveItem({
			xtype: 'donateView'
		});
	},
	
	goToMyProgress : function(){
		//TODO go to myprogress view
	},
    goToDonation : function()
    {
        console.log("saveDonate");
        this.fireEvent("saveDonate", this);
    },

    goToDonation : function()
    {
        console.log("goToDonation");
    // LeadEditorview=donateView;
        //Update the field values in the record.
        var donateView = this.getdonateView();
        var currentDonate = donateView.getRecord();
          var newValues = donateView.getValues();
        this.donateView().updateRecord(currentDonate);

        //Check for validation errors.
        var errors = currentDonate.validate();
        if (!errors.isValid()) {
            var msg = '';
            errors.each(function(error) {
                msg += error.getMessage() + '<br/>';
            });
            console.log('Errors: ' + msg);
            Ext.Msg.alert('Please correct errors!', msg, Ext.emptyFn);
            currentDonate.reject();
            return;
        }

//Get a ref to the store.
        var leadsStore = Ext.getStore("s4o__Inspiration_Type__c");

        //Add new record to the store.
        if (null == donateStore.findRecord('id', currentDonate.data.id)) {
            leadsStore.add(currentDonate);
        }

        //Resync the proxy and activate the list.
    //    leadsStore.sync();
     //   this.activateLeadsList();
    }
});