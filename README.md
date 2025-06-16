# Random Cat Facts

A static web application built with Vanilla JavaScript, HTML, and CSS that displays random cat facts from the Cat Facts API.

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Technologies: HTML, CSS, JS](https://img.shields.io/badge/technologies-HTML%20%7C%20CSS%20%7C%20JS-orange.svg)

## Features

* Display a random cat fact
* Fetch multiple cat facts on demand
* Responsive, mobile-friendly design

## Prerequisites

No build tools or frameworks required. A modern web browser is sufficient.

## Installation

```bash
# Clone the repository
git clone https://github.com/smlmxrk/Cat-Fact-Generator
cd random-cat-facts
```

## Usage

1. Open `index.html` in your web browser.
2. The page will fetch and display a random cat fact.
3. Click the "Load More" button to fetch additional facts.

Alternatively, serve the folder with a static server:

```bash
# Install http-server globally (optional)
npm install -g http-server

# Serve the directory
http-server .
```

Then navigate to `http://localhost:8080` (or the port whatever port it's beinig hosted on) in your browser.

## Configuration

By default, the app fetches one fact per request. In the future, I plan on adding functionality to retrieve several facts in one click!

## API Reference

This project uses the [Cat Facts API](https://catfact.ninja).

* **GET** `/fact`
  Returns a single random cat fact.
* **GET** `/facts?limit=<number>`
  Returns an array of cat facts of length `<number>`.

## Demo

![image](https://github.com/user-attachments/assets/69686176-517d-4c8b-8f79-94f27f098673)


## Contributing

1. Fork the repository
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please ensure any new code includes tests (if applicable) and follows existing style guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

[Mark](https://github.com/smlmxrk) — feel free to reach out to me at any time!
