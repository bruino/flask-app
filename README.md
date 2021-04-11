# Template Flask App
### Running locally

```bash
pip install -r requirements/development.txt
yarn install
yarn build
flask run
```

#### Database Initialization (locally)

Run the following to create your app database tables and perform the initial migration.

```bash
flask db init
flask db migrate
flask db upgrade
```

### Running Tests/Linter

To run all test, run
```bash
flask test
```

To run the linter, run
```bash
flask lint
```
The lint command will attempt to fix any linting/style errors in the code, using [black](https://github.com/psf/black).

### Asset Management
Files placed inside the `assets` directory and its subdirectories (excluding `js` and `css`) will be copied by webpack's
`file-loader` into the `static/build` directory.