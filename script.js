document.getElementById("connect-button").addEventListener("click", async () => {
    try {
        // Check if Metamask is installed
        if (typeof window.ethereum !== 'undefined') {
            // Request account access
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected to Metamask:', accounts);
            // You can perform further actions after successful connection
        } else {
            console.log('Metamask is not installed.');
        }
    } catch (error) {
        console.error('Error connecting to Metamask:', error);
    }
});
