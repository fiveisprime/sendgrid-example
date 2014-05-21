sendgrid-example
================

An example app that sends emails using [Sendgrid](https://sendgrid.com) on
[Modulus](https://modulus.io).

# Usage

Create a new project, provision the Sendgrid add-on for your project, then
deploy this application.

    $ modulus project create sendgrid
    $ modulus addons add sendgrid:free
    $ modulus deploy
