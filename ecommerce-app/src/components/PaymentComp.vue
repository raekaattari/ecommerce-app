<template>
  <div>
    <div v-if="elementsOptions.clientSecret != null">
      <stripe-element-payment 
        ref="paymentRef" 
        :pk="pk" 
        :elements-options="elementsOptions"
        :confirmParams="confirmParams"
      />
      <button :disabled="isLoading" @click="handlePayClick">Pay Now</button>
    </div>
    <div v-if="paymentMessage" class="message">
      {{ paymentMessage }}
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
      pk: process.env.VUE_APP_PK,
      elementsOptions: {
        appearance: {},
        clientSecret: null
      },
      confirmParams: {
        return_url: process.env.VUE_APP_BASE_URL + '/success',
      },
      paymentMessage: null,
      isLoading: false,
    };
  },
  beforeMount() {
    this.generatePaymentIntent();
  },
  methods: {
    async generatePaymentIntent() {
      this.elementsOptions.clientSecret = await apiCallToGeneratePaymentIntent(this.totalCost);
    },
    handlePayClick(event) {
      event.preventDefault(); 
      this.paymentMessage = null; 
      this.isLoading = true;
      this.processPayment();
    },
    async processPayment() {
      try {
        const { paymentIntent } = await this.submitPayment();

        if (paymentIntent && paymentIntent.status === 'succeeded') {
          this.$emit("payment-success");
        } else {
          this.paymentMessage = "Payment was not completed.";
        }
      } catch (error) {
        this.paymentMessage = "Payment was unsuccesful";
      } finally {
        this.isLoading = false;
      }
    },
    async submitPayment() {
      const stripe = this.$refs.paymentRef.stripe;
      const elements = this.$refs.paymentRef.elements;

      return stripe.confirmPayment({
        elements,
        confirmParams: this.confirmParams
      });
    },
  },
};
</script>