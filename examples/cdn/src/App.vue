<template>
  <v-app>
    <v-main>
      <div class="bg-blue">
        <QRcode />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
  const QRcode = window.QRcode.QRcode
  //import QRcode from 'qrcode-of-this-site3'
</script>
