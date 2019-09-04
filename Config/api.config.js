baseurl = {
    url: 'http://154.70.32.171:99/api/',
}
endpoints = {
    auth: {
        signIn: baseurl.url + 'auth/signIn.aspx',
        signUp: baseurl.url + 'auth/signUp.aspx',
    },
    payment: {
        makepayment: baseurl.url + 'payment/make-payment.aspx',
        fetch: baseurl.url + 'payment/fetch.aspx'
    }
}