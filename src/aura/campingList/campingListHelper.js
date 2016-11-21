({
    saveItem : function(component, item) {
        showSpinner();
        
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
                
                var toast = $A.get("e.force:showToast");
                if (toast) {
                    toast.setParams({
                        "title": "Camping item saved",
                    });
                }
            }
            else {
                console.log("SaveItem() failed with state: " + state);
                console.log("Error response: " + response.getError());
            }
            
            hideSpinner();
        });
        $A.enqueueAction(action);
    },
    showSpinner : function(component) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible: true });
        evt.fire();
    },
    hideSpinner : function(component) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible: false });
        evt.fire();
    },
})