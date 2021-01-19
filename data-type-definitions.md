# OpenAQ Data Type Definitions 


## Grade
### **Reference-grade**
**Definition:** These data are produced by reference-grade instrumentation that is typically capable of achieving higher precision and accuracy than lower-cost instruments.

**Accuracy and Precision:** Instruments considered reference-grade have not necessarily been deployed or managed in ways that guarantee attainment of a manufacturer specified measurement quality, nor has data necessarily undergone quality control and assurance procedures, unless specified in other metadata.

**How the source is verified by OpenAQ:** OpenAQ only tags data as reference-grade when it can be shown to source from a government source, e.g. the open-source adapter that pulls the data pulls from a government agency website or API.

### **Low-cost sensor** 
**Definition:** Low-cost sensor data refer to all non-reference-grade data that is produced by a wide variety of sources, from individuals in their communities,  researchers, to government actors. Low-cost sensor data does not refer directly to specific cost bands, as what counts as “low-cost” varies based on socioeconomic and regional variables. Sensors in this category use technology components that are typically less expensive to manufacture than reference sensors or use reference-grade components in an atypical configuration and as a consequence may generate less robust data with lower accuracy and precision.  

**Accuracy and Precision:** These data are produced by variety of instrumentation operated by individuals, community groups, researchers, government officials and others with varied levels of experience, so instruments considered lower cost have not necessarily been deployed or managed in ways that guarantee attainment of a manufacturer specified measurement quality, nor has data necessarily undergone quality control and assurance procedures, unless specified in other metadata.

**How the source is verified by OpenAQ:** The provenance of this data can be verified ensuring the data provider is someone with a viable hardware product that aggregates sensor data from its users who agree to allow their data to be shared with them. 
<br/><br/>

## Entity 
### **Government** 
The data is sponsored and/or managed by a government entity, (ex: city authority, national government) 

### **Research**
The data is sponsored and/or managed by a research entity such as a research institution or academic institution

### **Community**
The data is sponsored and/or managed by a community entity such as a community-led organization or student activist group 

NOTE: These tags are used to help delineate the _primary_ managing entity of the  sensor network. We recognize that many reference-grade and low-cost sensor networks are collaborative, multi stakeholder engagements, and these tags do not omit the other partners involved. 
<br/><br/>

## Mobility
### **Stationary**
Ground-monitoring air quality equipment that is anchored to the ground and immobile

### **Mobile** 
Air quality data that is collected by attaching sensors to moving objects or vehicles (ex: bikes, buses, taxis) 
