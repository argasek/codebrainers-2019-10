import { JsonObject, JsonProperty, JsonType } from 'ta-json';

@JsonObject()
class Category {

  @JsonType(Number)
  @JsonProperty()
  id = undefined;

  @JsonType(String)
  @JsonProperty()
  name = '';

  @JsonType(String)
  @JsonProperty()
  url = '';

  @JsonType(String)
  @JsonProperty()
  slug = '';

}

export default Category;