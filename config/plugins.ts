
module.exports = ({ env }) => ({
    
    email: {
      config: {
        provider: 'sendgrid', 
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'baruch.partners@gmail.com',
          defaultReplyTo: 'baruch.partners@gmail.com'
        },
      },
    },
    
  });