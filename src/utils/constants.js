export const ALPHABET =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export const LANDING_PAGE_HTML = `
<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CF URL Shortener</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/15181efa86.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
    <link rel="stylesheet" type="text/css" href="../css/register.css">
  </head>

  <body>
    <section class="container">
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2 register">
          <div class="columns">
            <div class="column left">
              <h1 class="title is-1">CF URL Shortener</h1>
              <h2 class="subtitle colored is-4">A URL shortener POC built using Cloudflare Worker.</h2>
              <p>Designing a URL shortener such as TinyURL and Bitly is one of the most common System Design interview questions in software engineering.</p>
              <p>While meddling around with Cloudflare Worker, it gave me an idea to build an actual URL shortener that can be used by anyone.</p>
              <p>This is a proof of concept (POC) of how one builds an actual URL shortener service using serverless computing.</p>
            </div>
            <div class="column right has-text-centered">
              <h1 class="title is-4">Shorten A URL</h1>
              <p class="description">Enter a valid URL to shorten</p>
              <form action="/api/url" method="POST">
                <div class="field">
                  <div class="control">
                    <input class="input is-medium" type="url" placeholder="https://jerrynsh.com/" name="originalUrl" required>
                  </div>
                </div>
                <button class="button is-block is-primary is-fullwidth is-medium" type="submit">Shorten</button>
                <br />
                <small><em>Created by Jerry Ng</em></small>
              </form>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2">
          <br>
          <nav class="level">
            <div class="level-right">
              <small class="level-item" style="color: var(--textLight)">
                &copy; CF URL Shortener. All Rights Reserved.
              </small>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </body>
  <style>
    :root {
      --brandColor: hsl(166, 67%, 51%);
      --background: rgb(247, 247, 247);
      --textDark: hsla(0, 0%, 0%, 0.66);
      --textLight: hsla(0, 0%, 0%, 0.33);
    }

    body {
      background: var(--background);
      height: 100vh;
      color: var(--textDark);
    }

    .field:not(:last-child) {
      margin-bottom: 1rem;
    }

    .register {
      margin-top: 10rem;
      background: white;
      border-radius: 10px;
    }

    .left,
    .right {
      padding: 4.5rem;
    }

    .left {
      border-right: 5px solid var(--background);
    }

    .left .title {
      font-weight: 800;
      letter-spacing: -2px;
    }

    .left .colored {
      color: var(--brandColor);
      font-weight: 500;
      margin-top: 1rem !important;
      letter-spacing: -1px;
    }

    .left p {
      color: var(--textLight);
      font-size: 1.15rem;
    }

    .right .title {
      font-weight: 800;
      letter-spacing: -1px;
    }

    .right .description {
      margin-top: 1rem;
      margin-bottom: 1rem !important;
      color: var(--textLight);
      font-size: 1.15rem;
    }

    .right small {
      color: var(--textLight);
    }

    input {
      font-size: 1rem;
    }

    input:focus {
      border-color: var(--brandColor) !important;
      box-shadow: 0 0 0 1px var(--brandColor) !important;
    }

    .fab,
    .fas {
      color: var(--textLight);
      margin-right: 1rem;
    }

  </style>

</html>
`
