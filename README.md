# openaq-data-format
A description of the data format provided by the OpenAQ platform.

|Field|Type|Required|Description|Example|
|---|---|:---:|---|---|
|parameter|String|✓|The measured parameter; acceptables values are `pm25, pm10, co, bc, so2, no2, o3`|`"pm25"`|
|location|String|✓|Unique location name of the station|`"Escuela E-10"`|
|city|String|✓|City (or regional approximation) containing location|`"Tocopilla"`|
|country|String|✓|Country containing location in two letter ISO format|`"CL"`|
|value|Number|✓|Recorded value|`10.2`|
|unit|String|✓|Unit of measurement, see note about units below; acceptable values are `µg/m³, ppm`|`"µg/m³"`|
|value|Number|✓|Recorded value|`10.2`|
|date|Object|✓|Time of measurement including both local time and UTC time, see note on date below|`{"utc":"2015-10-26T17:00:00.000Z", "local": "2015-10-26T14:00:00-03:00"}`|
|sourceName|String|✓|ID to track measurement to source within the platform|`"Netherlands"`|
|coordinates|Object||Location of measurement|`{"latitude": -22.087, "longitude": -70.193253}`|
|attribution|Array||Data attribution in descending order of prominence|`[{"name": "TCEQ", "url":"http://www.tceq.state.tx.us"}, {"name": "City of Houston Health Department"}]`|
