/**
 * Controller class for the campingList ligthning component.
 * 
 * @author Magnus Kreth <magnus.kreth@capgemini.com>
 */
public with sharing class CampingListController {
    
    @AuraEnabled
    public static List<Camping_Item__c> getItems() {
        Schema.DescribeSObjectResult campingItemDescribeToken = Schema.SObjectType.Camping_Item__c;
        if (!campingItemDescribeToken.isAccessible()) {
            System.debug(System.LoggingLevel.ERROR,
                         CampingListController.class.getName()
                         + '.getItems() - Object not readable by user: '
                         + campingItemDescribeToken.getName());
            
            throw new System.NoAccessException();
        }
        
        String[] fields = new String[] { 'Id', 'Name', 'Price__c', 'Quantity__c', 'Packed__c' };
        Map<String, Schema.SObjectField> fieldDescribeTokens = campingItemDescribeToken.fields.getMap();
        for (String field : fields) {
            if (!fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
                System.debug(System.LoggingLevel.ERROR,
                             CampingListController.class.getName()
                             + '.getItems() - Field not readable by user: ' + field);
                
                throw new System.NoAccessException();
            }
        }
        
        return [SELECT Id, Name, Price__c, Quantity__c, Packed__c FROM Camping_Item__c];
    }
    
    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c item) {
        Schema.DescribeSObjectResult campingItemDescribeToken = Schema.SObjectType.Camping_Item__c;
        if (!campingItemDescribeToken.isUpdateable()) {
            System.debug(System.LoggingLevel.ERROR,
                         CampingListController.class.getName()
                         + '.getItems() - Object not updateable by user: '
                         + campingItemDescribeToken.getName());
            
            throw new System.NoAccessException();
        }
        
        String[] fields = new String[] { 'Name', 'Price__c', 'Quantity__c', 'Packed__c' };
        Map<String, Schema.SObjectField> fieldDescribeTokens = campingItemDescribeToken.fields.getMap();
        for (String field : fields) {
            if (!fieldDescribeTokens.get(field).getDescribe().isUpdateable()) {
                System.debug(System.LoggingLevel.ERROR,
                             CampingListController.class.getName()
                             + '.getItems() - Field not updateable by user: ' + field);
                
                throw new System.NoAccessException();
            }
        }
        
        upsert item;
        
        return item;
    }
    
    public static void crunch(Integer loops) {
        for (Integer i = 0; i < loops; i++) {
            List<Contact> contacts = [SELECT Id, Name, FirstName, LastName FROM Contact WHERE Account.Name = 'Account 12'];
        }
    }
}