
# CSV to JSON Converter

A simple Node.js script to convert CSV files to JSON format.

## Installation

1. Clone this repository:
```bash
git clone https://github.com/Damijohnson/csv-to-json-converter.git
cd csv-to-json-converter
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Place your CSV file in the root directory and name it `dataset.csv`

2. Run the converter:
```bash
node csvToJson.js
```

3. Find your converted data in `dataset.json`

## Example

Input (`dataset.csv`):
```csv
name,age,city
John Doe,30,New York
Jane Smith,25,Los Angeles
```

Output (`dataset.json`):
```json
[
  {
    "name": "John Doe",
    "age": "30",
    "city": "New York"
  },
  {
    "name": "Jane Smith",
    "age": "25",
    "city": "Los Angeles"
  }
]
```

## Dependencies

- [csv-parser](https://www.npmjs.com/package/csv-parser)
- Node.js

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
