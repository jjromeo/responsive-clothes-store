var shopServices = angular.module('shopServices', [])

shopServices.factory('Items', function($resource) {
    return {
            shelf: $resource('inventory/products.json', {}, {
            query: {method:'GET', isArray:true}
        })
 ,
        invoice: [
        ]
    }
});

shopServices.factory('Alerts', function(){
    return {
        alerts: [],
            }
})

