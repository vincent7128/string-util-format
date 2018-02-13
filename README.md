# String format

Simple string format for javascript

## Usage

NPM:

```
npm install string-util-format

var format = require('string-util-format');
```

CDN:

```
<script src="https://cdn.jsdelivr.net/npm/string-util-format/index.js"></script>
```

Code example:

```
var arrayTest1 = 'Hello, {0}';
format(arrayTest1, 'Davie'); // return 'Hello, Davie'

var arrayTest2 = 'Hello, {0} and {1}';
format(arrayTest2, 'Davie', 'Mary'); // return 'Hello, Davie and Mary'
format(arrayTest2, ['Davie', 'Mary']); // return 'Hello, Davie and Mary'
format(arrayTest2, {0: 'Davie', 1: 'Mary'}); // return 'Hello, Davie and Mary'

var keyTest = 'Hello, {gender} {last-name}';
format(keyTest, {gender: 'Mr.', 'last-name': 'Solo'}); // return 'Hello, Mr. Solo'

var dateTest = '{year}/{month}/{day} {week} {hour}:{min}:{sec}';
format(dateTest, new Date(1977, 1, 2, 3, 4, 5)); // return '1977/02/02 WED 03:04:05'
```

## License

This project is licensed under the MIT License - see the <LICENSE> file for details
