(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{507:function(e,t,a){"use strict";a.r(t);var n=a(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sensors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[e._v("#")]),e._v(" Sensors")]),e._v(" "),t("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),t("p",[t("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),t("h3",{attrs:{id:"adc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adc"}},[e._v("#")]),e._v(" ADC")]),e._v(" "),t("p",[e._v("The value is between 0 and 1024 and is transmitted via MQTT when it changes.\n"),t("code",[e._v('home/OpenMQTTGateway/ADCtoMQTT {"value":543}')])]),e._v(" "),t("h3",{attrs:{id:"dht"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dht"}},[e._v("#")]),e._v(" DHT")]),e._v(" "),t("p",[e._v("You will receive every TimeBetweenReadingDHT (set into config_DHT.h) the DHT measurement (30s per default).")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/DHTtoMQTT {"tempc":21,"tempf":69.8,"hum":51}')])]),e._v(" "),t("p",[e._v("If you want to don't resend value when it is the same you can set dht_always = false in config_DHT.h")]),e._v(" "),t("h3",{attrs:{id:"htu21"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#htu21"}},[e._v("#")]),e._v(" HTU21")]),e._v(" "),t("p",[e._v("You will receive the HTU21 sensor readings every TimeBetweenReadinghtu21 (set into config_HTU21.h) (30s by default).")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/CLIMAtoMQTT/htu {"tempc":25.34064,"tempf":77.61314,"hum":56.53052}')])]),e._v(" "),t("p",[e._v("If you don't want to resend values that haven't changed you can set htu21_always = false in config_HTU21.h")]),e._v(" "),t("h3",{attrs:{id:"ahtx0-aht10-and-aht20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ahtx0-aht10-and-aht20"}},[e._v("#")]),e._v(" AHTx0 (AHT10 and AHT20)")]),e._v(" "),t("p",[e._v("You will receive the AHT sensor readings every TimeBetweenReadingAHTx0 (set into config_AHTx0.h) (30s by default).")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/CLIMAtoMQTT/aht { "tempc": 27.48108, "tempf": 81.46594, "hum": 48.90614 }')])]),e._v(" "),t("p",[e._v("If you don't want to resend values that haven't changed you can set AHTx0_always = false in config_AHTx0.h")]),e._v(" "),t("h3",{attrs:{id:"ds18x20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ds18x20"}},[e._v("#")]),e._v(" DS18x20")]),e._v(" "),t("p",[e._v("You will receive the DS18x20 sensor readings every DS1820_INTERVAL_SEC (set into config_DS1820.h) (60s by default).\nEach sensor will be published under the following topic using each sensors' address.")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/CLIMAtoMQTT/ds1820/0x0000000000000000 {"tempc":27.8, "tempf":82.04, "type":"DS18B20","res":"12bit\\n","addr":"0x28616411907650bc"}')])]),e._v(" "),t("p",[e._v("The units for temperature readings are sent in Celsius by default can be changed to Fahrenheit by setting DS1820_FAHRENHEIT = true in in config_DS1820.h")]),e._v(" "),t("p",[e._v("If you don't want to resend values that haven't changed you can set DS1820_ALWAYS = false in config_DS1820.h")]),e._v(" "),t("h3",{attrs:{id:"hcsr501"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hcsr501"}},[e._v("#")]),e._v(" HCSR501")]),e._v(" "),t("p",[e._v("A boolean value of the PIR sensors state is sent when a state change occurs. The length of time that the PIR stays in a triggered state depends on the PIR hardware and is not changed by OpenMQTTGateway.")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/HCSR501toMQTT {"presence":"false"}')])]),e._v(" "),t("p",[e._v("You can have another PIN mirror the value of the PIR sensor output by adding the following to config_HCSR501.h\nThis can be useful if you would like to connect an LED to turn on when motion is detected.")]),e._v(" "),t("p",[t("code",[e._v("#define HCSR501_LED_NOTIFY_GPIO 4")])]),e._v(" "),t("p",[e._v("This notification pin can be inverted if driving directly or through a transistor/mosfet.\n"),t("code",[e._v("#define INVERT_LED_NOTIFY true")])]),e._v(" "),t("h3",{attrs:{id:"rn8209"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rn8209"}},[e._v("#")]),e._v(" RN8209")]),e._v(" "),t("p",[e._v("You will receive every "),t("code",[e._v("TimeBetweenPublishingRN8209")]),e._v(" (set into config_RN8209.h) the RN8209 measurements (every 60s per default), or if the difference between the previous current reading and the new reading is more than 0.1A.\nOne reading is done every 0.5s.")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/RN8209toMQTT {"volt":120.34,"current":7.92,"power":954.61}')])]),e._v(" "),t("h3",{attrs:{id:"touch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#touch"}},[e._v("#")]),e._v(" Touch")]),e._v(" "),t("p",[e._v("This sensor is only for ESP32, using the touch sensing peripheral. Up to 10 touch buttons can be defined, linked to 10 ESP32 pins that support touch sensing (GPIOs 0, 2, 4, 12, 13, 14, 15, 27, 32, 33) by defining TOUCH_GPIO, or TOUCH_GPIO_0 through TOUCH_GPIO_9. For example:")]),e._v(" "),t("p",[t("code",[e._v("#define TOUCH_GPIO 4")])]),e._v(" "),t("p",[e._v("The default is one sensor on GPIO 4.")]),e._v(" "),t("p",[e._v('When a touch is detected, a message is sent indicating the number of the button ("id"), the fact that a touch button was pressed ("on" is 1) and the value measured by the esp32 ("value").')]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/touchToMQTT {"id":0,"on":1,"value":10}')])]),e._v(" "),t("p",[e._v('When the button stops being touched (e.g., the finger is lifted off the button), a message is sent indicating that the button was released ("on" is 0), as well as the duration of the button press in milliseconds ("onDuration").')]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/touchToMQTT {"id":0,"on":0,"value":70,"onDuration":320}')])])])}),[],!1,null,null,null);t.default=s.exports}}]);