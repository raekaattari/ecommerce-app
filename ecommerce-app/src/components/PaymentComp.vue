<template>
  <div>
    <div v-if="elementsOptions.clientSecret != null">
      <stripe-element-payment 
      ref="paymentRef" 
      :pk="pk" 
      :elements-options="elementsOptions"
      :confirm-params="confirmParams" />
    <button @click="pay">Pay Now</button>
  </div>
  </div>
</template>

<script>
import { StripeElementPayment } from '@vue-stripe/vue-stripe';
import { apiCallToGeneratePaymentIntent } from '@/services/payment-intent.js';
import { mapGetters } from 'vuex';

export default {
  name: 'PaymentComp',
  components: {
    StripeElementPayment,
  },
  computed: {
    ...mapGetters(['totalCost']),
  },
  data() {
    return {
      pk: '',
      elementsOptions: {
        appearance: {},
        clientSecret: null
      },
      confirmParams: {
        return_url: 'http://localhost:8080/success',
      },
    };
  },
  beforeMount() {
    this.generatePaymentIntent();
  },
  methods: {
    async generatePaymentIntent() {
      this.elementsOptions.clientSecret = await apiCallToGeneratePaymentIntent(this.totalCost);
    },
    pay() {
      console.log("paying")
      this.$refs.paymentRef.submit();
    },
  },
};
</script>