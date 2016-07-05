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
|date|Object|✓|Time of measurement including both local time and UTC time. See [note about dates](https://github.com/openaq/openaq-data-format#dates-and-date-ranges).|`{"utc":"2015-10-26T17:00:00.000Z", "local": "2015-10-26T14:00:00-03:00"}`|
|sourceName|String|✓|ID to track measurement to source within the platform|`"Netherlands"`|
|sourceType|String|✓|The [type of source](https://github.com/openaq/openaq-data-format#source-types); acceptable values are: `government, research, other` | `"government"` |
|sourceName|String|✓|ID to track measurement to source within the platform|`"Netherlands"`|
|coordinates|Object||Location of measurement|`{"latitude": -22.087, "longitude": -70.193253}`|
|attribution|Array||Data attribution in descending order of prominence|`[{"name": "TCEQ", "url":"http://www.tceq.state.tx.us"}, {"name": "City of Houston Health Department"}]`|
|averagingPeriod|Object||Information about the time resolution of the measurement|`{"value": 1, "unit": "hours"}`|

### Dates and date ranges
Dates are stored as a javascript date containing both the local time and the UTC time.

```json
"date": {
  "utc": "2015-07-16T20:30:00.000Z",
  "local": "2015-07-17T03:30:00.000+07:00"
}
```

The averages are always backward looking. That means that if a source reports a time range (3 - 4pm), then the latest time is picked (4pm).

## Dealing with multiple measurements
It is possible that a station reports several measurements for the same pollutant per time period. When this occurs, the following measurement is stored:

- the one with the shortest averaging period (1 hour average instead of 24 hour rolling average)
- the one that reports the value in the pollutant's [preferred unit](https://github.com/openaq/openaq-data-format#preferred-units)

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
|O3|ppm|

## Source types
Measurements can be provided by different types of sources:

- `government` - Sensors that are deployed by or on behalf of governmental bodies.
- `research` - Sensors that are deployed by researchers affiliated with universities and/or research organizations.
- `other` - Sensors that are deployed by citizen scientists, often low-cost sensors.
