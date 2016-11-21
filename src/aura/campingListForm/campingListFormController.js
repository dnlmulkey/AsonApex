({
    submitForm : function(component, event, helper) {
        var validItem = true;
        
        var nameField = component.find("itemname");
        var itemName = nameField.get("v.value");
        if ($A.util.isEmpty(itemName)) {
            validItem = false;
            nameField.set("v.errors", [{message: "Item name can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }
        
        var priceField = component.find("itemprice");
        var itemPrice = priceField.get("v.value");
        if ($A.util.isEmpty(itemPrice)) {
            validItem = false;
            priceField.set("v.errors", [{message: "Item price can't be blank."}]);
        }
        else {
            priceField.set("v.errors", null);
        }
        
        var quantityField = component.find("itemquantity");
        var itemQuantity = quantityField.get("v.value");
        if ($A.util.isEmpty(itemQuantity)) {
            validItem = false;
            quantityField.set("v.errors", [{message: "Item quantity can't be blank."}]);
        }
        else {
            quantityField.set("v.errors", null);
        }
        
        if (validItem) {
            var newItem = component.get("v.newItem");
            helper.createItem(component, newItem);
        }
    }
})