export async function apiCallToGeneratePaymentIntent(cost) {
    try {
        console.log('in api call' + cost)
        const response = await fetch('/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: 1000,
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was failure.');
        }

        const data = await response.json();
        return data.clientSecret;
    } catch (error) {
        console.error('Error fetching client secret:', error);
    }
}