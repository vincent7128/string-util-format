# String format

Simple string format for javascript

## Usage

NPM:

```
npm install string-format

var format = require('string-format');
```

CDN:

```
<script src="https://cdn.jsdelivr.net/npm/string-format/index.js"></script>
```

Code example:

```
var test = 'Hello, {0}';
format(test, 'Davie'); // return 'Hello, Davie'

var test = 'Hello, {0} and {1}';
format(test, 'Davie', 'Mary'); // return 'Hello, Davie and Mary'
format(test, ['Davie', 'Mary']); // return 'Hello, Davie and Mary'
format(test, {0: 'Davie', 1: 'Mary'}); // return 'Hello, Davie and Mary'

var test = 'Hello, {gender} {last-name}';
format(test, {gender: 'Mr.', 'last-name': 'Solo'}); // return 'Hello, Mr. Solo'

var format = require('./index');
test = '{year}/{month}/{date} {week} {hour}:{min}:{sec}';
format(test, new Date(1977, 1, 2, 3, 4, 5)); // return '1977/02/02 WED 03:04:05'
```

## License

This project is licensed under the MIT License - see the <LICENSE> file for details
