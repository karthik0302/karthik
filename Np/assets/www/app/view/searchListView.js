Ext.define('GS.view.searchListView',{
	extend:'Ext.Container',
	xtype:'searchListView',
	requires:[
	          'Ext.data.Store',
	          'Ext.List',
	          'Ext.field.Search',
	          'Ext.Toolbar'
	          ],
	config:{
		layout:'vbox',
		items:[
		       {
		    	docked:'top',
		    	xtype:'toolbar',
		    	height:45,
		    	title:'Projects',
		    	layout:{
		    		type:'hbox',
		    		pack:'end'
		    	},
		    	items:[
		    	       
		    	       {
		    	    	xtype:'searchfield',
		    	    	width:100,
		   		   		listeners:[
		   		   		           {
		   		   		        	   scope:this,
		   		   		        	   clearicontap:this.onSearchClearIconTap,
		   		   		        	   keyup:this.onSearchKeyUp
		   		   		           }
		   		   		           ]
		    	       }
		    	       ]
		    	
		       },{
		    	   xtype :'list',
		    	   	  id : 'list1',
		    	      height: 150,
		    	      ui:'round',
		    	      border:5,
		    	      scrollable: true,
		    	      disableSelection:true,
		    	      grouped:false,
		    	      loadingText: 'Loading Projects',
		    	      emptyText: '<div>No Projects Found</div>',
		    	      onItemDisclosure: false,
		    	      itemTpl: '<div>{firstLetter}</div>',
		    	      store : 'projectStore',
		    	      listeners:{
		    	    	  itemdoubletap:function(){
		    	    		  Ext.Viewport.setActiveItem({
			    					xtype : 'projectView'
			    				});
		    	    	  }
		    	      }
		    	   
		       }
		       
		       ]
		
	}
	
});