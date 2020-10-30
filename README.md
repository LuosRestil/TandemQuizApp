# Tandem Quiz App

## Explanation

This is a simple quiz app written for an application to Tandem's apprenticeship progam.

### Assumptions

- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose

### Acceptance criteria

- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers. _(Note: Not all questions in the .json file provided for the challenge have four possible answers!)_
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round

## Design philosophy

The submission guidelines say it's best to use as few external dependencies as possible to keep setup simple. Since the requirements of the app are simple, I've taken this to heart, and have decided to build it out with NO dependencies. Just HTML, CSS, and vanilla JavaScript. (Although I am using a CDN to provide two icons to make the UI more attractive, and I guess you could consider this a dependency.)

## To run the app...

### Online

Visit: https://luosrestil.github.io/TandemQuizApp/

### Locally

- Clone or download the repository.
- Open a terminal window and navigate to the project's directory.
- Start a local web server and navigate to localhost at the port specified by said web server.

**How do I start a web server?**

Depending on what you have installed on your machine, you can do this in several ways:
_Node_
Install `http-server` with `npm install -g http-server`, and start the server with `http-server -c-1`.
_Python3_
`python3 -m http.server` (You may need to replace `python3` with `python` depending on your machine's PATH.)
_Python2_
`python -m SimpleHTTPServer`
_PHP_
`php -S localhost:8000`
_Ruby_
`ruby -run -e httpd . -p 8080`

## A note to Tandem

Please understand this does not represent the full scope of my programming knowledge. To see a broader representation of my skill set, visit my website at https://www.briansmithdev.com.
