# FlashCards
---

### About

 - This repo was written by [Andrew Musselman](https://github.com/Andrew-Musselman)
 - This is a Flash Card game that is run in the command line interface that takes the users input answer and compares it against the game data
 - This Repo is not currently deployable / playable so there are no install instructions
 - The code was all written in JavaScript


 ### Testing
  - The code was written using Test Driven Development: all the implementation code was written after a test suite had been completed for that file, and written to pass the tests
  - All the test suites were written with the Mocha testing framework using the Chai testing library

  <img width="722" alt="Screen Shot 2022-02-03 at 7 44 00 PM" src="https://user-images.githubusercontent.com/92277979/152464007-9067adf9-0388-43fa-99af-2a066d4e3a6c.png">
  <img width="631" alt="Screen Shot 2022-02-03 at 7 47 49 PM" src="https://user-images.githubusercontent.com/92277979/152464102-ed37f2ca-764e-4e36-a5e5-2e43c5f971c9.png">

### Future Steps

  - Make the game playable within the Command Line Interface
  - Add more data sets to allow user to choose what flash card deck to use


### Triumphs and Tribulations

 - While working on this project I utilized GitHub issues and GitHub projects to track my progress
  - This allowed me to stay organized and on top of making sure things got done
  - I did run in to issues with the Automation for these tools

- Writing the test suites was a big point of pain in this project
  - The testing syntax was still very new to me so it would take me longer to figure out what I needed to write
  - There were many times when the tests were not behaving the way that I was expecting so I needed to move or change a few things
    - ex:
    > `expect().equal` vs `expect().eql`
