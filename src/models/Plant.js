import { JsonConverter, JsonObject, JsonProperty, JsonType, JsonWriteonly, OnDeserialized } from 'ta-json';
import MomentSerializer from 'serializers/MomentSerializer';
import { nanoid } from 'nanoid';

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
  @JsonWriteonly()
  categorySlug = '';

  @JsonType(Number)
  @JsonProperty()
  difficulty = 1;

  @JsonType(Number)
  @JsonProperty()
  fertilizingInterval = undefined;

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
  @JsonWriteonly()
  url = '';

  @JsonType(Number)
  @JsonProperty()
  wateringInterval = undefined;

  constructor() {
    this.uuidRegenerate();
  }

  @OnDeserialized()
  uuidRegenerate() {
    this.uuid = nanoid();
  }

}

export default Plant;