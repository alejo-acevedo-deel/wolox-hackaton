#include <Redis.h>
#include <ESP8266WiFi.h>
#include <string.h>

#define WIFI_SSID       "Red Prueba"  // configurar con la red wifi de wolox arg 
#define WIFI_PASSWORD   "prueba1234"

#define REDIS_ADDR      "192.168.1.3" // configurar con la ip de la máquina donde esté instalado redis (raspi)
#define REDIS_PORT      6379 
#define REDIS_PASSWORD  "" 

#define LDR_PIN A0 // pin del ADC para leer el ldr
#define LED_PIN 13 // configurar con el pin del LED

#define SENSOR_KEY "ldr"
#define ACTION_KEY "led"

Redis redis(REDIS_ADDR, REDIS_PORT);

int ldrPin = A0;    // select the input pin for the LDR
int ldrValue = 0;  // variable to store the value coming from the sensor
String ledStatus;

void setup() {
    Serial.begin(9600);
    Serial.println();

    pinMode(LED_PIN, OUTPUT);
    pinMode(LDR_PIN, INPUT);

    WiFi.mode(WIFI_STA);
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting to the WiFi");
    while (WiFi.status() != WL_CONNECTED) {
        delay(250);
        Serial.print(".");
    }
    Serial.println();
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());

    if (redis.begin(REDIS_PASSWORD)) {
        Serial.println("Connected to the Redis server!");
    }
    else {
        Serial.println("Failed to connect to the Redis server!");
        return;
    }
}

void loop() {
  
  ldrValue = analogRead(LDR_PIN);
  char ldrValueString[4];
  String(ldrValue).toCharArray(ldrValueString, 4);
  redis.publish(SENSOR_KEY, ldrValueString);

  delay(2000);
  Serial.print("GET REDIS ACTION FROM ");
  Serial.println(ACTION_KEY);
  
  ledStatus = redis.get(ACTION_KEY);
  Serial.println(ledStatus);
  if (ledStatus == "LED_ON") {
    digitalWrite(LED_PIN, 255);
    redis.set(ACTION_KEY, "");
  } 
  else if(ledStatus == "LED_OFF") {
    digitalWrite(LED_PIN, 0);
    redis.set(ACTION_KEY, "");
  } 
}