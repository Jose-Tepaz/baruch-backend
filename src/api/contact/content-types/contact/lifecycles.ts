export default {
    async afterCreate(event: any) {
        const { result } = event;
        try {
            await strapi.plugin('email').service('email').send({
                to: 'josetepaz28@gmail.com',
                from: 'baruch.partners@gmail.com',
                subject: 'New Contact Form Submission',
                text: `A new contact form submission has been received:\n\n` +
                    `Name: ${result.client_name || ''}\n` +
                    `Email: ${result.email_address || ''}\n` +
                    `Phone: ${result.phone || ''}\n` +
                    `Interested in: ${result.interested_in || ''}\n` +
                    `Message: ${result.message || ''}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${result.client_name || ''}</p>
                    <p><strong>Email:</strong> ${result.email_address || ''}</p>
                    <p><strong>Phone:</strong> ${result.phone || ''}</p>
                    <p><strong>Interested in:</strong> ${result.interested_in || ''}</p>
                    <p><strong>Message:</strong><br/>${(result.message || '').replace(/\n/g, '<br/>')}</p>
                `,
            });
            strapi.log.info('Contact notification email sent');
        } catch (error) {
            strapi.log.error('Error sending contact notification email', error);
        }
    },
};


