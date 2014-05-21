var express = require('express');
var app     = express();

var sendgrid = require('sendgrid')(
  process.env.SENDGRID_USERNAME,
  process.env.SENDGRID_PASSWORD
);

app.use(require('body-parser')());

app.get('/', function (req, res) {
  res.send([
    '<form method="post" style="width:500px;margin:60px auto 0;" action="/">',
    '<fieldset style="display:block;padding:5px;">',
    '<label for="email" style="width:100px;">To:</label><br>',
    '<input type="text" name="email" placeholder="text@example.com">',
    '</fieldset>',
    '<fieldset style="display:block;padding:5px;">',
    '<label for="subject" style="width:100px;">Subject:</label><br>',
    '<input type="text" name="subject" placeholder="Test Email">',
    '</fieldset>',
    '<fieldset style="display:block;padding:5px;">',
    '<label for="message" style="width:100px;">Message:</label><br>',
    '<textarea style="width:100%;height:80px;padding:2px;" name="message" placeholder="Whoa!"></textarea>',
    '</fieldset>',
    '<p><input type="submit" value="Send" /></p>',
    '</form>'
  ].join(''));
});

app.post('/', function (req, res) {
  sendgrid.send({
    to: req.body.email,
    from: 'test@example.com',
    subject: req.body.subject,
    text: req.body.message
  }, function (err) {
      if (err) {
        return res.send('Invalid format.');
      }

      res.send('Sent!');
    });
});

app.listen(process.env.PORT || 3000);
