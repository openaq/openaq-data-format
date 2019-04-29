
# Location Schema

```
```

Schema defining metadata for OpenAQ locations

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | No | Experimental | No | Forbidden | Permitted | [location.json](location.json) |

# Location Properties

| Property | Type | Required | Nullable | Defined by |
|----------|------|----------|----------|------------|
| [activationDate](#activationdate) | `string` | Optional  | No | Location (this schema) |
| [active](#active) | `boolean` | Optional  | No | Location (this schema) |
| [altitude](#altitude) | `integer` | Optional  | No | Location (this schema) |
| [attribution](#attribution) | `object[]` | Optional  | No | Location (this schema) |
| [city](#city) | `string` | Optional  | No | Location (this schema) |
| [coordinates](#coordinates) | `object` | Optional  | No | Location (this schema) |
| [country](#country) | `string` | Optional  | No | Location (this schema) |
| [deactivationDate](#deactivationdate) | `string` | Optional  | No | Location (this schema) |
| [id](#id) | `string` | **Required**  | No | Location (this schema) |
| [instruments](#instruments) | `object[]` | **Required**  | No | Location (this schema) |
| [name](#name) | `string` | **Required**  | No | Location (this schema) |
| [notes](#notes) | `string` | Optional  | No | Location (this schema) |
| [pollutants](#pollutants) | `enum[]` | Optional  | No | Location (this schema) |
| [sourceType](#sourcetype) | `enum` | Optional  | No | Location (this schema) |
| `*` | any | Additional | Yes | this schema *allows* additional properties |

## activationDate
### Activation date

Date the instruments were activated at this location, stored as an ISO timestamp

`activationDate`

* is optional
* type: `string`
* defined in this schema

### activationDate Type


`string`







## active
### Active

Whether the location is currently active

`active`

* is optional
* type: `boolean`
* defined in this schema

### active Type


`boolean`





## altitude
### Altitude

The altitude of the location in meters

`altitude`

* is optional
* type: `integer`
* defined in this schema

### altitude Type


`integer`







## attribution
### Attributions

Data attribution in descending order of prominence

`attribution`

* is optional
* type: `object[]`
* defined in this schema

### attribution Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `name`| string | Optional |
| `url`| string | Optional |



#### name
##### Attribution Name


`name`

* is optional
* type: `string`

##### name Type


`string`









#### url
##### Attribution Url


`url`

* is optional
* type: `string`

##### url Type


`string`















## city
### City

The city of the location

`city`

* is optional
* type: `string`
* defined in this schema

### city Type


`string`






### city Example

```json
"Seattle"
```


## coordinates
### Coordinates

Lat/Lon coordinates

`coordinates`

* is optional
* type: `object`
* defined in this schema

### coordinates Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `latitude`| number | **Required** |
| `longitude`| number | **Required** |



#### latitude
##### Latitude


`latitude`

* is **required**
* type: `number`

##### latitude Type


`number`









#### longitude
##### Longitude


`longitude`

* is **required**
* type: `number`

##### longitude Type


`number`












## country
### Country

The country of the location

`country`

* is optional
* type: `string`
* defined in this schema

### country Type


`string`






### country Example

```json
"US"
```


## deactivationDate
### Deactivation date

Date the instruments were deactivated at this location, stored as an ISO timestamp

`deactivationDate`

* is optional
* type: `string`
* defined in this schema

### deactivationDate Type


`string`







## id
### ID

ID for a location

`id`

* is **required**
* type: `string`
* defined in this schema

### id Type


`string`



All instances must conform to this regular expression 
```regex
^(.*)$
```






## instruments
### Instruments

An array of instruments installed at this location

`instruments`

* is **required**
* type: `object[]`
* defined in this schema

### instruments Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `activationDate`| string | Optional |
| `active`| boolean | Optional |
| `calibrationProcedures`| string | Optional |
| `deactivationDate`| string | Optional |
| `inletHeight`| integer | Optional |
| `manufacturer`| string | Optional |
| `measurementStyle`| string | Optional |
| `modelName`| string | Optional |
| `notes`| string | Optional |
| `pollutants`| array | **Required** |
| `rawFrequency`| integer | Optional |
| `reportingFrequency`| integer | Optional |
| `serialNumber`| string | **Required** |
| `type`| string | **Required** |



#### activationDate
##### Instrument activation date

Date the instrument was activated at this location, stored as an ISO timestamp

`activationDate`

* is optional
* type: `string`

##### activationDate Type


`string`









#### active
##### Active

Whether the location is currently active

`active`

* is optional
* type: `boolean`

##### active Type


`boolean`







#### calibrationProcedures
##### Calibration procedures

Instrument-specific calibration procedures

`calibrationProcedures`

* is optional
* type: `string`

##### calibrationProcedures Type


`string`









#### deactivationDate
##### Instrument deactivation date

Date the instrument was deactivated at this location, stored as an ISO timestamp

`deactivationDate`

* is optional
* type: `string`

##### deactivationDate Type


`string`









#### inletHeight
##### Inlet height

Height of intake inlet in meters

`inletHeight`

* is optional
* type: `integer`

##### inletHeight Type


`integer`









#### manufacturer
##### Manufacturer

Manufacturer of the instrument

`manufacturer`

* is optional
* type: `string`

##### manufacturer Type


`string`









#### measurementStyle
##### Measurement style

How measurements are taken

`measurementStyle`

* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#instruments-known-values).

##### measurementStyle Known Values
| Value | Description |
|-------|-------------|
| `automated` |  |
| `manual` |  |
| `unknown` |  |






#### modelName
##### Model name

Model name of the instrument

`modelName`

* is optional
* type: `string`

##### modelName Type


`string`









#### notes
##### Notes

Any relevant notes about the instrument

`notes`

* is optional
* type: `string`

##### notes Type


`string`









#### pollutants
##### Pollutants

Pollutants measured by this instrument

`pollutants`

* is **required**
* type: `enum[]`


##### pollutants Type


Array type: `enum[]`

All items must be of the type:
`string`












#### rawFrequency
##### Raw frequency

The raw sampling frequency of the instrument in milliseconds

`rawFrequency`

* is optional
* type: `integer`

##### rawFrequency Type


`integer`









#### reportingFrequency
##### Reporting frequency

The reporting sampling frequency of the instrument in milliseconds

`reportingFrequency`

* is optional
* type: `integer`

##### reportingFrequency Type


`integer`









#### serialNumber
##### Serial number

Serial number of the instrument

`serialNumber`

* is **required**
* type: `string`

##### serialNumber Type


`string`









#### type
##### Type

The type of instrument

`type`

* is **required**
* type: `string`

##### type Type


`string`















## name
### Name

Name of a location

`name`

* is **required**
* type: `string`
* defined in this schema

### name Type


`string`







## notes
### Notes

Any relevant notes about the location

`notes`

* is optional
* type: `string`
* defined in this schema

### notes Type


`string`







## pollutants
### Pollutants

Pollutants measured at a location

`pollutants`

* is optional
* type: `enum[]`
* defined in this schema

### pollutants Type


Array type: `enum[]`

All items must be of the type:
`string`










## sourceType
### Source type

The source of the instruments at the location. Government instruments are deployed by or on behalf of governmental bodies. Research instruments are deployed by researchers affiliated with universities and/or research organizations. Other instruments are deployed by citizen scientists, often low-cost instruments

`sourceType`

* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#sourcetype-known-values).

### sourceType Known Values
| Value | Description |
|-------|-------------|
| `government` |  |
| `research` |  |
| `other` |  |



### sourceType Example

```json
"government"
```

