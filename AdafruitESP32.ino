#include "config.h"
#include "String.h"
AdafruitIO_Feed *counter = io.feed("thisone");

#define dirPin 4
#define stepPin 2
#define stepsPerRevolution 200

int stepperDelayFast = 3000;
int stepperDelaySlow = 4000;
long long pos = 0;
int ipos =1;

long long motorPos = 0;

void setup() {
  // Declare pins as output:
  pinMode(stepPin, OUTPUT);
  pinMode(dirPin, OUTPUT);

  Serial.begin(115200);
  while(! Serial);

  Serial.print("Connecting to Adafruit IO");

  // start MQTT connection to io.adafruit.com
  io.connect();
  counter->onMessage(handleMessage);

  // wait for an MQTT connection
  // NOTE: when blending the HTTP and MQTT API, always use the mqttStatus
  // method to check on MQTT connection status specifically
  while(io.mqttStatus() < AIO_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  // Because Adafruit IO doesn't support the MQTT retain flag, we can use the
  // get() function to ask IO to resend the last value for this feed to just
  // this MQTT client after the io client is connected.
  counter->get();

  // we are connected
  Serial.println();
  Serial.println("ESP32 Connected");
}
void loop() {
  io.run();
}

void motorTo(long long stepPos){
  if (stepPos > pos)
    digitalWrite(dirPin, LOW);
  else
    digitalWrite(dirPin, !LOW);
  int steps = abs(stepPos-pos);
  for (int i = 0; i < steps; ++i){
    digitalWrite(stepPin, HIGH);
    delayMicroseconds(stepperDelayFast);
    digitalWrite(stepPin, !HIGH);
    delayMicroseconds(stepperDelayFast);
  }
  pos = stepPos;
}

void handleMessage(AdafruitIO_Data *data) {

  Serial.print("receive thing: ");
  int x = data->toInt();
  Serial.print("X: ");
  Serial.println(x);
   Serial.print("Ipos ");
  Serial.println(ipos);
  while(ipos!=x)
  {
    motorPos += 100;
    motorTo(motorPos);
    ipos++;
   Serial.print("X: ");
  Serial.println(x);
   Serial.print("Ipos ");
  Serial.println(ipos);
    if(ipos==5)
      ipos=1;
  }
  

}
