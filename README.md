<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🌦️ Weather App</title>
</head>
<body>
  <header>
    <h1>🌦️ Weather App</h1>
  </header>
  <section>
    <h2>Features</h2>
    <ul>
      <li>
        <h3>User-friendly interface to enter the location for weather information.</h3>
      </li>
      <li>
        <h3>Displays the current temperature, description, and location.</h3>
      </li>
      <li>
        <h3>Handles loading state while fetching weather data.</h3>
      </li>
      <li>
        <h3>Allows users to provide their name and updates the header dynamically.</h3>
      </li>
    </ul>
  </section>
  <section>
    <h2>Components</h2>
    <article>
  <h3>📜 Header</h3>
  <p>Displays the header of the Weather App.</p>
  <h4>Props:</h4>
  <ul>
    <li><code>userName</code> (string): The name of the user.</li>
  </ul>
</article>

<article>
  <h3>🔍 SearchBar</h3>
  <p>Renders the search bar for entering the location.</p>
  <h4>Props:</h4>
  <ul>
    <li><code>onSearch</code> (function): Callback function to handle the search action.</li>
  </ul>
</article>

<article>
  <h3>⛅ WeatherCard</h3>
  <p>Displays the weather information for a given location.</p>
  <h4>Props:</h4>
  <ul>
    <li><code>weatherData</code> (object): An object containing weather information for a location, including
      temperature, description, and location.</li>
  </ul>
</article>

<article>
  <h3>⚙️ WeatherApp</h3>
  <p>The main component that handles the logic of fetching weather data, user input, and rendering other components.</p>
  <h4>State:</h4>
  <ul>
    <li><code>weatherData</code> (object): Stores the weather data fetched from the API.</li>
    <li><code>location</code> (string): Stores the location entered by the user.</li>
    <li><code>isLoading</code> (boolean): Tracks the loading state while fetching weather data.</li>
    <li><code>userName</code> (string): Stores the user's name.</li>
  </ul>
  <h4>Methods:</h4>
  <ul>
    <li><code>handleSearch(location)</code>: Handles the search action triggered by the user.</li>
    <li><code>handleUserNameChange(event)</code>: Handles the change event for the user's name input.</li>
    <li><code>handleSubmit()</code>: Handles the submit action for the user's name input.</li>
  </ul>
  <h4>Effects:</h4>
  <ul>
    <li>Fetches weather data based on the entered location using the OpenWeather API.</li>
    <li>Updates the weather data and loading state when the location changes.</li>
    <li>Sets the user's name when provided by the user.</li>
  </ul>
</article>
 </section>
  <section>
    <h2>🤝 Contributing</h2>
    <p>Contributions are welcome! If you have any ideas, suggestions, or improvements, please create an issue or submit a pull request.</p>
  </section>
  <section>
    <h2>📄 License</h2>
    <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
  </section>
</body>
</html>
