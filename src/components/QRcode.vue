<template>
  <v-layout>
      <canvas id="qr" class="mx-auto"></canvas>
  </v-layout>
  <v-layout>
    <p class="mx-auto text-white mt-2">QR code for this App</p>
  </v-layout>
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