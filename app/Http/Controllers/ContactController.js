'use strict'

const Mail = use('Mail')

class ContactController {

    * sendMail (request, response) {
        let msg = request.param('message')
        // TODO: check message

        yield Mail.raw(msg, message => {
            message.from('Contact Form')
            message.to('sarah.sauseng@me.com', 'Sarah')
        })

        response.status(200).send('Mail sent.')

        /*
        yield Mail.send('emails.welcome', user, (message) => {
            message.to(user.email, user.firstname)
            message.from('awesome@adonisjs.com')
            message.subject()
        })*/
    }
}

module.exports = new ContactController()