# Template Flask App
### Running locally

```bash
pip install -r requirements/development.txt
flask run
```

#### Database Initialization (locally)

Once you have installed your DBMS, run the following to create your app's
database tables and perform the initial migration

```bash
flask db init
flask db migrate
flask db upgrade
```
