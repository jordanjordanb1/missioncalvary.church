const express = require('express'),
  router = express.Router(),
  nodemailer = require('nodemailer'),
  config = require('../../config')


// NODEMAILER CONFIG (TODO: REPLACE WITH SOMETHING OTHER THAN ETHEREAL)
const main = async ({ name, phone, message }, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jordansbarbosa01@gmail.com',
      pass: config.gmail_pass
    }
  })

  const formated_message = `Name: ${name} \nPhone: ${phone} \nMessage: ${message}`

  return await transporter.sendMail({
    to: 'jordansbarbosa01@gmail.com',
    subject: `Contact form @ MissionCalvary.Church | ${name}`,
    text: formated_message
  }, err => {
    if (err) {
      console.log(err)
      return res.json({ success: false })
    }
    else {
      return res.json({ success: true })
    }
  })
}

router.post('/', (req, res) => {
  const { body } = req

  main(body, res).catch(e => console.error(e))
})

module.exports = router;
