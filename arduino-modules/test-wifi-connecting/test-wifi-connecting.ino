#include <Redis.h>
#include <ESP8266WiFi.h>

#define WIFI_SSID       "wolox-red"  // configurar con la red wifi de wolox arg 
#define WIFI_PASSWORD   ""

#define REDIS_ADDR      "192.168.0.121" // configurar con la ip de la máquina donde esté instalado redis (raspi)
#define REDIS_PORT      6379 
#define REDIS_PASSWORD  "" 

#define MODULE_KEY  "ldr" 

#define LDR_PIN A0 // pin del ADC para leer el ldr
#define LED_PIN 1 // configurar con el pin del LED

Redis redis(REDIS_ADDR, REDIS_PORT);

//int ldrPin = A0;    // select the input pin for the LDR
int ldrValue = 0;  // variable to store the value coming from the sensor
char ledStatus;

void setup()
{
    Serial.begin(9600);
    Serial.println();

    pinMode(LED_PIN, OUTPUT);

    WiFi.mode(WIFI_STA);
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting to the WiFi");
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(250);
        Serial.print(".");
    }
    Serial.println();
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());

    if (redis.begin(REDIS_PASSWORD))
    {
        Serial.println("Connected to the Redis server!");
    }
    else
    {
        Serial.println("Failed to connect to the Redis server!");
        return;
    }
}

void loop()
{
  
  ldrValue = analogRead(LDR_PIN);
  redis.publish(MODULE_KEY, ldrValue);

  delay(2000);

  ledStatus = redis.get(MODULE_KEY);
  if (ledStatus == "LED_ON") {
    digitalWrite(LED_PIN, HIGH);
  } 
  if(ledStatus == "LED_OFF") {
    digitalWrite(LED_PIN, LOW);
  } 
}
