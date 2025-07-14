function showPayment() {
  document.getElementById('reservationForm').style.display = 'none';
  document.getElementById('paymentStep').style.display = 'block';
}
function showWeChat() {
  document.getElementById('paymentStep').style.display = 'none';
  document.getElementById('wechatStep').style.display = 'block';
}
function showActivity() {
  document.getElementById('reservationForm').style.display = 'none';
  document.getElementById('activityStep').style.display = 'block';
}
function showBooking() {
  document.getElementById('activityStep').style.display = 'none';
  document.getElementById('bookingStep').style.display = 'block';
}
function showPaymentInfo() {
  document.getElementById('bookingStep').style.display = 'none';
  document.getElementById('paymentStep').style.display = 'block';
} 