function updateProductNumber (product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNUmber = productInput.value;
    if(isIncreasing == true){
        productNUmber = parseInt(productNUmber) + 1;
    }else if(productNUmber > 0){
        productNUmber = parseInt(productNUmber) - 1;
    }

    productInput.value = productNUmber;
    // update Total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNUmber * price;

    // calculate Total

    calculateTotal ();
}

// get Total value...

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal (){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = parseInt(phoneTotal) + parseInt(caseTotal);
    console.log(subTotal);
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = subTotal;
    document.getElementById('total-price').innerText = subTotal;

}

// Phone increase decrease events

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})


// Handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber ('case', 59, true);
    
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false)
   
})