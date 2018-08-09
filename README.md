# panOpen Developer Assignment - Rails/ReactJS App

### Overview

The goal of this assignment is to gauge your ability of quickly prototyping a useful tool for a realistic scenario in panOpen using Ruby and Javascript.

### The Problem

panOpen's sales team uses demo courses to show off the experience, features, and tools available to users. These courses are created using fake data: instructor, students, books, assignments, presentations, etc. Due to a lot of the data involved being time-sensitive (e.g. an instructor can see the last time one of their students read/opened their book), the data must be updated on a regular basis to keep the demos making sense the week they're being presented.

### Instructions

You will be solving a simplified version of this problem by creating a simple one page Ruby/Rails/ReactJS application. The app will populate the database with random (but realistic) values via a weekly cron job script as well as allow for manually changing the name of a user on a page. You will NOT be required to make a user session for logging in/out and are free to use any Rails Gems you'd like to accomplish the task.

1. Connect a local git instance to this repo and create a new branch for commiting your code and eventually submitting with a Pull Request.
2. Create a new Rails application and install any Gems you'd like to get started. *Note: panOpen uses Postgresql for its database, but feel free to use whichever SQL framework you're most comfortable with.*
3. To simulate a simplified version of panOpen's course scenario, you will need the following available in the database with these properties (how you handle organizing or associating these tables/objects is up to you):
   * User - should have a name, email, and role (student or instructor). Whether you'd like the role be its own table or not is up to your descrection.
   * Course - should have a name. Each user should also belong to a course (just like an instructor runs the course and has many students).
   * Book - should have a title and some content (i.e. some kind of dummy text that would simulate reading a book). *Note: you will not need to be able to read the content for this assignment.*
   * ReadingTime - should contain an amount a given user has read a book. Students should have reading times.

4. Write a Cron Job for populating the database with **1 Course that contains 1 Book, 1 Instructor, and 15 Students. Each Student should have a ReadingTime associated with the Book.** The data created in the Cron Job should be different each time it runs.
5. Output the data on the page so it's at least readable.
6. Create a basic ReactJS build that hooks into the Rails application.
7. Using ReactJS, allow the visitor to the page to manually change the name of a User when given that user's email.

You should spend 3-6 hours completing this task and submitting a pull request. If you don't finish in that timeframe, submit what you have. There are multiple ways of accomplishing this task, so don't worry if it's not complete in the time.

*Note: We encourage TDD, but do not require it. Do what you feel comfortable with.*

Please contact Roger (rblancarte@panopen.com) if you have any questions at all about the assignment.

Environment Setup
=================

```bash
# install ruby deps
bundle install

# create db, establish schema, and populate the seed data
rake db:migrate
rake db:seed
```

Load the app by running `rails server` on the command line and visiting `localhost:3000` in your browser.

### How to review the application

- When visiting the root page, the course info is displayed (Course name, instructor, the first couse book and the student list).

- Students table shows a list of course users. The name, email and the book reading time are displayed

- Edit button allow update the user name. Current email user must be entered (which is a kind of validation). A console log is written in the console log when the update fails. A message in the application would have been better, but is missing.

- There a cron job for populating the database, it is shcheduled to run once a week.

For including this cronjob in the server crontab file, you'll need to do this in order for your jobs to execute:

```sh
$ whenever --update-crontab
```