//get outlet name
var getOutlet = function() {
    var url = "https://mulahpoints.com";
    url += '/third_party';

    return fetch('https://mulahpoints.com/third_party', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Token':'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjBmYTVkOWQ3LWVkMzMtNGMwZC04YjkyLTJhNjg2YjlkZDEyMiJ9.giT5aU2EuipdhD3Ms-48Tx93UQFxbvcXOoi0vpGYS24'
        },
        data: '{"operation_name": "accessibleBrands", "var {}}'

    })
        .then(function(response) {
            return response.text();
        })
        .then(function(data){
            console.log(data); //this will just be text
            var data_obj = JSON.parse(data);
            return data_obj;
        })

}
getOutlet();

var name = data_obj.data.thirdParty.brands[0].name;
var shared_id =data_obj.data.thirdParty.brands[0].sharedId;

//getCustomer
const getCustomer = function () {
    var url = "https://mulahpoints.com";
    url += '/third_party';

    return fetch('https://mulahpoints.com/third_party', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Token': 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjBmYTVkOWQ3LWVkMzMtNGMwZC04YjkyLTJhNjg2YjlkZDEyMiJ9.giT5aU2EuipdhD3Ms-48Tx93UQFxbvcXOoi0vpGYS24'
        },
        data: '{"operation_name": "customersInfo","variables": {"phoneNumbers": ["60123123123"],"extension": "MY","brandId": shared_id}'
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log(data); //this will just be text
            var data_customer = JSON.parse(data);
            return data_obj;
        })

};
getCustomer();

var customer_number = data_customer.data.thirdParty.brands[0].phonenumber;
var total_visit=data_customer.data.thirdParty.brands[0].totalVisits;
var total_Point_Redemptions = data_customer.data.thirdParty.brands[0].totalPointRedemptions;
var total_SMS_Redemptions = data_customer.data.thirdParty.brands[0].totalSmsRedemptions;
var collected_Points = data_customer.data.thirdParty.brands[0].collectedPoints;
var available_Points =data_customer.data.thirdParty.brands[0].availablePoints;
var total_points = collected_Points + available_Points;

//Collect Points
const collect_points = function () {
    var url = "https://mulahpoints.com";
    url += '/third_party';

    return fetch('https://mulahpoints.com/third_party', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Token': 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjBmYTVkOWQ3LWVkMzMtNGMwZC04YjkyLTJhNjg2YjlkZDEyMiJ9.giT5aU2EuipdhD3Ms-48Tx93UQFxbvcXOoi0vpGYS24'
        },
        data: '{"operation_name:"collectPoints","variables": {"phoneNumbers": "60123123123","extension": "MY","brandId": shared_id ,outletName:name,"points": total_Points}'
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log(data); //this will just be text
            var data_customer = JSON.parse(data);
            return data_obj;
        })
        .catch(err =>alert(err));


};