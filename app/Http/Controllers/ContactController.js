'use strict'

const Mail = use('Mail')

class ContactController {

    * sendMail (request, response) {
        let params = request.params
        let msg = params['message']
        // TODO: check message

        yield Mail.raw(msg, message => {
            message.from('sarah.sauseng@gmail.com')
            message.to('sarah.sauseng@me.com', 'Sarah')
            message.subject('Contact Form')
        })

        response.status(200).send('Mail sent.')
    }
}

module.exports = new ContactController()