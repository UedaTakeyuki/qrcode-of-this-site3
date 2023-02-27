<template>
  <div class="d-flex flex-row justify-center">
    <canvas id="qr" class="mx-auto"></canvas>
  </div>
  <div class="d-flex flex-row justify-center">
    <p class="mx-auto text-white mt-2">QR code for this App</p>
  </div>
</template>

<script>
import QRCode from 'qrcode';
export default {
  mounted: function(){
    var currentUrl = window.location.origin;
    console.log(currentUrl);
    QRCode.toCanvas(document.getElementById('qr'),
      currentUrl, { toSJISFunc: QRCode.toSJIS }, function (error) {
      if (error) console.error(error)
      console.log('success!')
    })
  }
}
</script>

<style>
  *  {
    font-size: 16px;
  }
</style>