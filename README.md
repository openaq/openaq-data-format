# openaq-data-format
A description of the data format provided by the OpenAQ platform.

|Field|Type|Required|Description|Example|
|---|---|:---:|---|---|
|parameter|String|✓|The measured parameter; acceptables values are `pm25, pm10, co, bc, so2, no2, o3`|`"pm25"`|
|location|String|✓|Unique location name of the station|`"Escuela E-10"`|
|city|String|✓|City (or regional approximation) containing location|`"Tocopilla"`|
|country|String|✓|Country containing location in two letter ISO format|`"CL"`|
|value|Number|✓|Recorded value|`10.2`|
|unit|String|✓|Unit of measurement, see [note about units](https://github.com/openaq/openaq-data-format/blob/master/README.md#preferred-units) below; acceptable values are `µg/m³, ppm`|`"µg/m³"`|
|date|Object|✓|Time of measurement including both local time and UTC time, see note on date below|`{"utc":"2015-10-26T17:00:00.000Z", "local": "2015-10-26T14:00:00-03:00"}`|
|sourceName|String|✓|ID to track measurement to source within the platform|`"Netherlands"`|
|coordinates|Object||Location of measurement|`{"latitude": -22.087, "longitude": -70.193253}`|
|attribution|Array||Data attribution in descending order of prominence|`[{"name": "TCEQ", "url":"http://www.tceq.state.tx.us"}, {"name": "City of Houston Health Department"}]`|

## Preferred Units
OpenAQ only accepts measurements in `µg/m³` and `ppm`. This means that volumetric concentrations reported in ppb are converted to ppm before being stored to the database. We do not convert between volumetric and mass concentrations (`µg/m³` <-> `ppm`) to avoid making assumptions.

The platform also has a preferred unit of measurement per pollutant, but this is not strictly enforced. The Dutch locations, for example, report all their values in µg/m3.

|Pollutant|Preferred unit|
|---|---|
|PM 2.5|µg/m³|
|PM 10|µg/m³|
|BC|µg/m³|
|CO|ppm|
|NO2|ppm|
|SO2|ppm|
