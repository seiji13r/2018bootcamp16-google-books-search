# NYT Google Search Books

# Overview

This application is intended to serve as a direct search tool of the Google Books API.
With this you'll be able to:
* Search Books by title in the Google Books API.
* View the Books information such as:
  * Title
  * Author
  * Description
  * Image
  * And a Direct Link to the External Book Resource.
* Save Books in the application.
* View the saved Books in the application.

# Live APP

[Google Books Search](https://seiji-books-search.herokuapp.com/)

# Heroku Purge Cache

```
heroku plugins:install heroku-repo
heroku repo:purge_cache -a seiji-books-search
git commit --allow-empty -m "Purge cache"
git push heroku master
```

# Delete Heroku App
```
heroku apps:destroy seiji-books-search
```

