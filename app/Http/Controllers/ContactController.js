'use strict'

const Mail = use('Mail')

class ContactController {

    * sendMail (request, response) {
        let params = request.params()
        let msg = params['message']
        let subj = params['subject']
        // TODO: check message

        yield Mail.raw(msg, message => {
            message.from('purrpurrpurr42@gmail.com')
            message.to('purrpurrpurr42@gmail.com')
            message.subject('Contact Form')
        })

        response.status(200).send('Mail sent.')
    }
}

module.exports = new ContactController()