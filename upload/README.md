# OpenAQ Data Upload Tool format

A description of the data format for uploading data using the OpenAQ Data Upload tool

The live tool can be found at [upload.openaq.org](https://upload.openaq.org)

|Column Name|Type|Required|Description|Example|
|---|---|:---:|---|---|
|parameter|String|✓|The measured parameter; acceptable values are `pm25, pm10, co, bc, so2, no2, o3`|`pm25`|
|location|String|✓|Unique location name of the station|`Escuela E-10`|
|city|String||City (or regional approximation) containing location|`Tocopilla`|
|country|String|✓|Country containing location in two letter ISO format|`CL`|
|value|Number|✓|Recorded value|`10.2`|
|unit|String|✓|Unit of measurement, see [note about units](https://github.com/openaq/openaq-data-format#preferred-units) below; acceptable values are `µg/m³, ppm`|`µg/m³`|
|date_utc|String|✓|Time of measurement for UTC time. See [note about dates](https://github.com/openaq/openaq-data-format#dates-and-date-ranges).|`2015-10-26T17:00:00.000Z`|
|date_local|String|✓|Time of measurement for local time time. See [note about dates](https://github.com/openaq/openaq-data-format#dates-and-date-ranges).|`2015-10-26T14:00:00-03:00`|
|sourceType|String|✓|The [type of source](https://github.com/openaq/openaq-data-format#source-types); acceptable values are: `government, research` | `government` |
|mobile|Boolean|✓|Indicates whether the measuring station is stationary or mobile|`false`|
|coordinates_latitude|Number|✓|Latitude of measurement|`-22.087`|
|coordinates_longitude|Number|✓|Longitude of measurement|`-70.193253`|
|attribution_name|String|✓|Name for the  is the entity that is responsible for the data.|`TCEQ`|
|attribution_url|String|✓|URL for the entity that is responsible for the data.|`"http://www.tceq.state.tx.us`|
|averagingPeriod_value|Number|✓|Information about the time resolution value|`1`|
|averagingPeriod_unit|String|✓|Information about the time resolution unit of the measurement|`hours`|


### Dates and date ranges
Dates are sent as a string date containing a local time and a UTC time.

UTC

```json
"2015-07-16T20:30:00.000Z"
```

Local

```json
"2015-07-17T03:30:00.000+07:00"
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

## Attributions

This is to give credit to the entity responsible for producing the data. For example, AirNow (airnow.gov). If you have more than 1 attribution, you must create new columns and label them as `attribution_name_2`, `attribution_url_2` and `attribution_name_3`, `attribution_url_3` onwards.

|Column Name|Type|Required|Description|Example|
|---|---|:---:|---|---|
|attribution|Array|✓|Data attribution in descending order of prominence (**note**: if adding more than one attribution, you need to upload an Array) |`[{"name": "TCEQ", "url":"http://www.tceq.state.tx.us"}, {"name": "City of Houston Health Department"}]`|

#### Example of one attributions being sent

Column: `attribution_name`, Value: `"TCEQ"`
Column: `attribution_url`, Value: `"http://www.tceq.state.tx.us`

#### Example of multiple attributions being sent using the `attribution_name_2` or `attribution_url_2` method. **note** the number starts on "2" for additional attributes.

First attribute: 

Column: `attribution_name`, Value: `"TCEQ"`
Column: `attribution_url`, Value: `"http://www.tceq.state.tx.us`


Second attribute: 

Column: `attribution_name_2`, Value: `"TCEQ 2"`
Column: `attribution_url_2`, Value: `"http://www.tceq.state.tx.us/2`

Third attribute:

Column: `attribution_name_3`, Value: `"TCEQ 3"`
Column: `attribution_url_3`, Value: `"http://www.tceq.state.tx.us/3`


