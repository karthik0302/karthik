
Ext.define('GS.controller.buttons',{
	extend: 'Ext.app.Controller',
	
	config :{
		views : [
		         	'loginView',
		         	'projectListView',
		         	'inspireView',
		         	'calendarView',
		         	'chatView',
		         	'fundView',
		         	'volunteerView',
		         	'progressView',
		         	'TouchCalendarView',
		         	'settingsView'
		         ],
		         
		models : ['login','progressModel','projectModel'],
		
		stores : ['instance','progressStore','projectStore'],
		
		requires: ['GS.model.login','GS.model.projectModel'],
		
		control :{
			loginButton : {
				tap : 'doLogin'
			},
			inspire :{
				tap : 'goToInspire'
			},
			calendar : {
				tap: 'goToCalendar'
			},
			chat :{
				tap: 'goToChat'
			},
			fundraise: {
				tap: 'goToFundraise'
			},
			volunteer: {
				tap : 'goToVolunteer'
			},
			progress : {
				tap : 'goToProgress'
			},
			backButton :{
				tap: 'goBack'
			},
			settings:{
				tap:'goSettings'
			}
		},
		
		refs : {
			loginButton : '#loginButton',
			inspire : '#inspire',
			calendar: '#calendar',
			chat :'#chat',
			fundraise : '#fundraise',
			volunteer : '#volunteer',
			progress : '#progress',
			backButton : '#back',
			settings:'#settings'
		}
	},
	
	
	
		
	
	doLogin : function(){
			
		   var username = 'wmorfin';
		   var psswd = 'EnTransform1';
		   
		   
		  
		   
			   var url = 'http://s4o-developer-edition.na11.force.com/demo';
			  
			   //var url = 'http://entransform-myinfo-developer-edition.na9.force.com/Users';
			    var queryWhere = username + '-' + psswd;
			    console.debug(queryWhere);
				query = 'beta';
				console.debug(url+'?queryString='+query+'&where='+queryWhere+'&callback=?');
				jQuery.getJSON(url+'?queryString='+query+'&where='+queryWhere+'&callback=?',function(data){
					
					console.debug(data);
					
					if(data == true){
						 Ext.Viewport.setActiveItem({
								xtype : 'projectListView'
							});
					}
					else{
						Ext.Msg.alert('Failure','Invalid Credentials',Ext.emptyFn);
					}
										
				});
			  
		  
		   
		 
		  
		  
		
	},
	
		
	goToInspire : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'inspireView'
		});
	},
	
	goToCalendar : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'calendarView'
		});
	},
	
	goToChat : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'chatView'
		});
	},
	
	goToFundraise : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'fundView'
		});
	},
	
	goToVolunteer : function(){
		
		Ext.Viewport.setActiveItem({
			xtype : 'volunteerView'
		});
	},
	
	goToProgress : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'progressView'
		});
	},
	
	goBack : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'projectListView'
		});
	},
	
	goSettings:function(){
		Ext.Viewport.setActiveItem({
			xtype : 'settingsView'
		});
	}
	
});