({
    doInit : function(component, event, helper) {
        helper.showSpinner();
        
        var action = component.get("c.getItems");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("GetItems() failed with state: " + state);
                console.log("Error response: " + response.getError());
            }
            
            helper.hideSpinner();
        });
        $A.enqueueAction(action);
    },
    handleAddItem : function(component, event, helper) {
        var item = event.getParam("item");
        helper.saveItem(item);
    },
})