// Write your solution in this file!
var  customerName= "bob";// declare customer name using var in the global scope
//function UpperCase.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  // Declare bestCustomer in global scope (but do not assign a value yet)
var bestCustomer;
// Function to set bestCustomer
function setBestCustomer() {
    bestCustomer = "not bob";
  }

//function to overwrite best customer
function overwriteBestCustomer(newBestCustomer){
    bestCustomer="maybe bob";

}
//function leastFavoriteCusstomer
const leastFavoriteCustomer = "some initial value";

// Function to change leastFavoriteCustomer (which should fail)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "new value"; // This should cause an error
}


