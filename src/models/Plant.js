import { JsonConverter, JsonObject, JsonProperty, JsonType, OnDeserialized } from 'ta-json';
import MomentSerializer from 'serializers/MomentSerializer';
import { v1 as uuidv1 } from 'uuid';

@JsonObject()
class Plant {
  @JsonType(Boolean)
  @JsonProperty()
  blooming = false;

  @JsonType(Number)
  @JsonProperty()
  category = undefined;

  @JsonType(String)
  @JsonProperty()
  categorySlug = '';

  @JsonType(Number)
  @JsonProperty()
  difficulty = 1;

  @JsonType(Number)
  @JsonProperty()
  fertilizingInterval = 0;

  @JsonType(Number)
  @JsonProperty()
  id = undefined;

  @JsonProperty()
  @JsonConverter(new MomentSerializer())
  @JsonType(String)
  lastFertilized = undefined;

  @JsonProperty()
  @JsonConverter(new MomentSerializer())
  @JsonType(String)
  lastWatered = undefined;

  @JsonType(String)
  @JsonProperty()
  name = '';

  @JsonType(String)
  @JsonProperty()
  requiredExposure = '';

  @JsonType(String)
  @JsonProperty()
  requiredHumidity = '';

  @JsonType(String)
  @JsonProperty()
  requiredTemperature = '';

  @JsonType(Number)
  @JsonProperty()
  room = undefined;

  @JsonType(String)
  @JsonProperty()
  url = '';

  @JsonType(Number)
  @JsonProperty()
  wateringInterval = 0;

  constructor() {
    this.uuidRegenerate();
  }

  @OnDeserialized()
  uuidRegenerate() {
    this.uuid = uuidv1();
  }

}

export default Plant;