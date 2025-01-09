const stripe = Stripe('pk_test_51QeSwYDA7JE8PmDVgAqtDorB9BkiZH5NBb2QXoptgqWeE4rXnFUs7nJIztm7CSbk2QG1QdB4O2uuFBoquOw7fg2f00CtQ0quOz');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });