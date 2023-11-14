(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{350:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_devices_rf1.97b46f9c.png"},351:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_devices_rf2.26da8a3a.png"},352:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_devices_rf3.85e5cb30.png"},353:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_devices_ble.eccdbc5d.png"},413:function(t,e,a){"use strict";a.r(e);var r=a(14),i=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"devices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#devices"}},[t._v("#")]),t._v(" Devices")]),t._v(" "),e("p",[t._v("You can take a look to the "),e("a",{attrs:{href:"https://compatible.openmqttgateway.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenMQTTGateway compatible website"),e("OutboundLink")],1),t._v(" to have a view of the "),e("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/devices/",target:"_blank",rel:"noopener noreferrer"}},[t._v("supported devices"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Added to that is an overview of devices supported by OpenMQTTGateway:")]),t._v(" "),e("h2",{attrs:{id:"for-radio-frequency-devices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-radio-frequency-devices"}},[t._v("#")]),t._v(" For radio frequency devices")]),t._v(" "),e("p",[t._v("OpenMQTTGateway can support a wide range of 433mhz/315mhz devices, all the ones with SC5262 / SC5272, HX2262 / HX2272, PT2262 / PT2272, EV1527, RT1527, FP1527, HS1527 chipsets are supported by the RF gateway. Added to that RF2 support Kaku and Pilight an "),e("a",{attrs:{href:"https://wiki.pilight.org/devices",target:"_blank",rel:"noopener noreferrer"}},[t._v("huge list"),e("OutboundLink")],1),t._v(".\nNote that for the moment RF, RF2 and Pilight can not be activated on the same boards together.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(350),alt:"boards",title:":size=250%"}}),t._v(" "),e("img",{attrs:{src:a(351),alt:"boards",title:":size=250%"}}),t._v(" "),e("img",{attrs:{src:a(352),alt:"boards",title:":size=250%"}})]),t._v(" "),e("h2",{attrs:{id:"for-ble-devices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-ble-devices"}},[t._v("#")]),t._v(" For BLE devices")]),t._v(" "),e("p",[t._v("OpenMQTTGateway is able to scan all the BLE devices that advertise their data so as to do presence detection.\nAdded to that it retrieves the measures from the devices below. By default the data are read from the advertisements (no impact on device battery life). When a (c) is present after the model name, this means that the gateway connects to it so as to retrieve data or control the device. For some devices we may connect only to retrieve one or several parameters (the rest being advertised), in this case the (c) is placed with the parameter.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Devices")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Model")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Measurements")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Amazfit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Smart Watch, Band")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("steps, activity heart rate (when activated in the Zepp Life settings)")])]),t._v(" "),e("tr",[e("td",[t._v("April Brother")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("ABTemp")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("uuid, mfid, major, txpower @ 1 m, temperature, battery")])]),t._v(" "),e("tr",[e("td",[t._v("April Brother")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N03")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, luminance, battery")])]),t._v(" "),e("tr",[e("td",[t._v("April Brother")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N07")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery, packet ID")])]),t._v(" "),e("tr",[e("td",[t._v("ATorch Battery Capacity Monitor (c)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("DT24")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("voltage, amp, watt")])]),t._v(" "),e("tr",[e("td",[t._v("BLE watches with fixed MAC")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("rssi for presence detection")])]),t._v(" "),e("tr",[e("td",[t._v("BLE beacons keychains")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("rssi for presence detection")])]),t._v(" "),e("tr",[e("td",[t._v("BlueCharm")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("BC08")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("acceleration x, y, z-axis, voltage, temperature")])]),t._v(" "),e("tr",[e("td",[t._v("BlueCharm")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("BC04P")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("acceleration x, y, z-axis, voltage, temperature")])]),t._v(" "),e("tr",[e("td",[t._v("BlueCharm")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("BC021")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("acceleration x, y, z-axis, voltage, temperature")])]),t._v(" "),e("tr",[e("td",[t._v("BlueMaestro")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TempoDisc 1 in 1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, battery")])]),t._v(" "),e("tr",[e("td",[t._v("BlueMaestro")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TempoDisc 3 in 1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, dew point, battery")])]),t._v(" "),e("tr",[e("td",[t._v("BlueMaestro")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TempoDisc 4 in 1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, pressure, battery")])]),t._v(" "),e("tr",[e("td",[t._v("BM2 Battery Monitor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("BM2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("battery, volt(c)")])]),t._v(" "),e("tr",[e("td",[t._v("BM6 Battery Monitor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("BM6")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("battery")])]),t._v(" "),e("tr",[e("td",[t._v("ClearGrass")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("CGG1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery, voltage (depending on which CGG1 firmware is installed)")])]),t._v(" "),e("tr",[e("td",[t._v("ClearGrass alarm clock")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("CGD1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("ClearGrass alarm clock")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("CGC1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("ClearGrass with atmospheric pressure")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("CGP1W")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, air pressure")])]),t._v(" "),e("tr",[e("td",[t._v("ClearGrass Clock")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("LYWSD02")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5055")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature1, temperature2, temperature3, temperature4, temperature5, temperature6, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5074")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5075")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5072")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5100")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5101")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5102")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5104")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5106")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PM2.5, temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5174")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5177")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("GOVEE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H5179")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("HONEYWELL")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("JQJCY01YM")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("formaldehyde, temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("Hydractiva Digital")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Amphiro, Oras")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("sessions, time, litres, temperature, energy")])]),t._v(" "),e("tr",[e("td",[t._v("iBeacon")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("protocol")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("uuid, mfid, major, minor, txpower @ 1 m, voltage")])]),t._v(" "),e("tr",[e("td",[t._v("Jaalee")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("JHT F525")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("INKBIRD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("IBS-TH1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("INKBIRD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("IBS-TH12S")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("INKBIRD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("IBS-TH2, P01B")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, battery")])]),t._v(" "),e("tr",[e("td",[t._v("INKBIRD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("IBT-2X")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature1, temperature2")])]),t._v(" "),e("tr",[e("td",[t._v("INKBIRD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("IBT-4X(S, C)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature1, temperature2, temperature3, temperature4")])]),t._v(" "),e("tr",[e("td",[t._v("INKBIRD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("IBT-6XS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature1, temperature2, temperature3, temperature4, temperature5, temperature6")])]),t._v(" "),e("tr",[e("td",[t._v("iNode")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Energy Meter")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Current average and aggregate kW(h), m³, battery")])]),t._v(" "),e("tr",[e("td",[t._v("KKM")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("K6P")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, voltage")])]),t._v(" "),e("tr",[e("td",[t._v("KKM")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("K9")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, voltage, acceleration x, y, z-axis (optional - without recognised as K6P)")])]),t._v(" "),e("tr",[e("td",[t._v("Oral B")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Toothbrush")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("state, mode, sector, pressure, time")])]),t._v(" "),e("tr",[e("td",[t._v("Oria, Brifit, SigmaWit, SensorPro")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TH Sensor T201")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("Oria, Brifit, SigmaWit, SensorPro")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TH Sensor T301")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("Mokosmart")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("M1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("acceleration x, y, z-axis, battery")])]),t._v(" "),e("tr",[e("td",[t._v("Mokosmart")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, voltage")])]),t._v(" "),e("tr",[e("td",[t._v("Mopeka")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Pro")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, level, sync status, voltage, battery, reading quality, acceleration x, y-axis")])]),t._v(" "),e("tr",[e("td",[t._v("Lippert")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("BottleCheck")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, level, sync status, voltage, battery, reading quality, acceleration x, y-axis")])]),t._v(" "),e("tr",[e("td",[t._v("Otio, BeeWi")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Door & Window Sensor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("contact, battery")])]),t._v(" "),e("tr",[e("td",[t._v("Polar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("H10 Chest strap")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("activity heart rate")])]),t._v(" "),e("tr",[e("td",[t._v("Qingping")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("CGDK2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity")])]),t._v(" "),e("tr",[e("td",[t._v("Qingping")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("CGH1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("open")])]),t._v(" "),e("tr",[e("td",[t._v("Qingping")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("CGPR1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("presence, luminance, battery")])]),t._v(" "),e("tr",[e("td",[t._v("Qingping")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("CGDN1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, PM2.5, PM10, carbon dioxide")])]),t._v(" "),e("tr",[e("td",[t._v("RDL52832")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("mfid, uuid, minor, major, txpower @ 1 m, temperature, humidity, acceleration x, y, z-axis")])]),t._v(" "),e("tr",[e("td",[t._v("RBaron")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("b-parasite")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("moisture, temperature, humidity, luminance (v1.1.0+), voltage")])]),t._v(" "),e("tr",[e("td",[t._v("RuuviTag Raw V1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("RuuviTag")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, pressure, acceleration x, y, z-axis, voltage")])]),t._v(" "),e("tr",[e("td",[t._v("RuuviTag Raw V2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("RuuviTag")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, pressure, acceleration x, y, z-axis, voltage, TX power, movement, counter, sequence number")])]),t._v(" "),e("tr",[e("td",[t._v("SmartDry")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Laundry Sensor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, shake, voltage, wake")])]),t._v(" "),e("tr",[e("td",[t._v("Sensirion")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("MyCO₂, CO₂ Gadget")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, carbon dioxide")])]),t._v(" "),e("tr",[e("td",[t._v("Sensirion")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SHT4X TH sensor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity")])]),t._v(" "),e("tr",[e("td",[t._v("ShellyBlu")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Button1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("button press type, battery, packet ID")])]),t._v(" "),e("tr",[e("td",[t._v("ShellyBlu")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Door, Window")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("contact, rotation, battery, packet ID")])]),t._v(" "),e("tr",[e("td",[t._v("ShellyBlu")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Motion")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("motion, illuminance, battery, packet ID")])]),t._v(" "),e("tr",[e("td",[t._v("Switchbot")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Bot (c)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("mode, state, battery")])]),t._v(" "),e("tr",[e("td",[t._v("Switchbot")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Motion Sensor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("movement, light level, sensing distance, led, scope tested, battery")])]),t._v(" "),e("tr",[e("td",[t._v("Switchbot")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Contact Sensor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("contact, movement, scope tested, light level, in count, out count, push count, battery")])]),t._v(" "),e("tr",[e("td",[t._v("Switchbot")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Curtain")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("motion state, position, light level, battery, calibration state")])]),t._v(" "),e("tr",[e("td",[t._v("Switchbot")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Meter (Plus)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("Switchbot")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Outdoor Meter")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("Thermobeacon")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("WS02")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, voltage, timestamp, maximum temperature, maximum temperature timestamp, minimum temperature, minimum temperature timestamp")])]),t._v(" "),e("tr",[e("td",[t._v("Thermobeacon")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("WS08")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, voltage, timestamp, maximum temperature, maximum temperature timestamp, minimum temperature, minimum temperature timestamp")])]),t._v(" "),e("tr",[e("td",[t._v("ThermoPro")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TP357")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity")])]),t._v(" "),e("tr",[e("td",[t._v("ThermoPro")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TP357s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity")])]),t._v(" "),e("tr",[e("td",[t._v("ThermoPro")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TP358")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity")])]),t._v(" "),e("tr",[e("td",[t._v("ThermoPro")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TP359")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity")])]),t._v(" "),e("tr",[e("td",[t._v("ThermoPro")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TP393")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity")])]),t._v(" "),e("tr",[e("td",[t._v("TPMS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TPMS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, pressure, battery, alarm, count")])]),t._v(" "),e("tr",[e("td",[t._v("Vegtrug")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, moisture, luminance, fertility")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Mi Flora")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("HHCCJCY01HHCC")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, moisture, luminance, fertility, battery(c) firmware >3.1.8")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Ropot")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("HHCCPOT002")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, moisture, fertility")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Mi Jia")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("LYWSDCGO")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Mi Jia")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("LYWSD02")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Mi Jia 2(c)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("LYWSD03MMC")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery, voltage")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Mi Jia 2 custom firmware (2)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("LYWSD03MMC ATC")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery, voltage")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Mi Jia 2 custom firmware (3)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("LYWSD03MMC PVVX (encrypted or not)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery, voltage")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Mi Lamp")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("MUE4094RT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("presence")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Mi Smart Scale")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("XMTZC01HM, XMTZC04HM")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("weighing mode, unit, weight")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Mi Body Composition Scale")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("XMTZC02HM, XMTZC05HM")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("weighing mode, unit, weight, impedance")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Mi Temp, Humidity v1(c)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("MHO-C401")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery, voltage")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI Mi Temp, Humidity v2(c)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("XMWSDJ04MMC")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temperature, humidity, battery, voltage")])]),t._v(" "),e("tr",[e("td",[t._v("XIAOMI")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Mi band")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("steps, activity heart rate (when activated in the Zepp Life settings)")])])])]),t._v(" "),e("p",[t._v("Exhaustive list "),e("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/devices/ble-devices/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("ul",[e("li",[t._v("(2) See https://github.com/atc1441/ATC_MiThermometer")]),t._v(" "),e("li",[t._v("(3) See https://github.com/pvvx/ATC_MiThermometer")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(353),alt:"devices",title:":size=250%"}})]),t._v(" "),e("h2",{attrs:{id:"for-infrared-ir-devices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-infrared-ir-devices"}},[t._v("#")]),t._v(" For infrared IR devices")]),t._v(" "),e("p",[t._v("The list of supported devices for ESP is "),e("a",{attrs:{href:"https://github.com/crankyoldgit/IRremoteESP8266/blob/master/SupportedProtocols.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(", and "),e("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/6f73160d1421bebf2c1bbc9b8017978ff5b16520/main/config_IR.h#L123",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(" for Arduino boards, as there is also the possibility of using raw and global cache (ESP) sending possibilities of this gateway is huge!")]),t._v(" "),e("h2",{attrs:{id:"lora"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lora"}},[t._v("#")]),t._v(" LORA")]),t._v(" "),e("p",[t._v("LORA is more dedicated at this moment for tinkering and DIY and there is no Off the shelves devices compatible to my knowledge with this gateway.")])])}),[],!1,null,null,null);e.default=i.exports}}]);