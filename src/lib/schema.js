import { object, string, number, boolean, array, mixed } from 'yup';

if (process.env.NODE_ENV === 'development') {
  window.yup = { object, string, number, boolean, array, mixed };
}

function oneOfOrDefault(value) {
  const isOneOf = this._whitelist.has(value);
  return isOneOf ? value : this.default();
}

// const GeoPoint = array(number())
//   .min(2)
//   .max(2);

// const Polygon = array(GeoPoint).min(3);

const RUBRIC_TYPES = {
  flats: ['studija'],
  commercial: [
    'office',
    'universal',
    'retail',
    'warehouse',
    'industrial',
    'separate_building',
    'ready_business'
  ]
};

const ROOM_TYPES = ['1', '2', '3', '4', '5+'];
const LAYOUT_TYPES = ['free'];

export const roomsType = array(string())
  .ensure()
  .compact(v => ROOM_TYPES.includes(v));

export const typeType = array(string())
  .ensure()
  .when('rubric', (rubric, schema) => (
    RUBRIC_TYPES[rubric] ?
      schema.compact(v => RUBRIC_TYPES[rubric].includes(v)) :
      schema
  ));

export const layoutType = array(string())
  .ensure()
  .compact(v => LAYOUT_TYPES.includes(v));

export const schema = object({
  rubric: string()
    .oneOf(['flats', 'rooms', 'cottage', 'commercial', 'dacha', 'land', 'garages'])
    .default('flats')
    .transform(oneOfOrDefault)
    .required(),
  deal_type: string()
    .oneOf(['sell', 'rent_out'])
    .default('sell')
    .transform(oneOfOrDefault)
    .required(),
  // context: string()
  //   .oneOf(['city', 'region'])
  //   .default('city')
  //   .transform(oneOfOrDefault),
  // region: number(),
  // city: object(), // TODO: Уточнить тип
  // cities: array(object()), // TODO: Уточнить тип
  // region_area: array(object()), // TODO: Уточнить тип,
  // housing_estate: array(object()), // TODO: Уточнить тип,
  // district: array(object()), // TODO: Уточнить тип,
  // microdistrict: array(object()), // TODO: Уточнить тип,
  // polygon: array(Polygon),
  // metro: array(object()), // TODO: Уточнить тип,
  // addresses: array(object()), // TODO: Уточнить тип,
  // metro_time: number(),
  // transport_time: object(), // TODO: Уточнить тип,
  rooms: roomsType,
  // is_newbuilding: boolean().nullable(), // TODO: Уточнить тип,
  // rent_period: string().oneOf(['day', 'month']),
  // include_suburbs: boolean().default(true),
  type: typeType,
  // house_type: array(string()), // TODO: Уточнить тип
  // purposes: array(string()), // TODO: Уточнить тип
  // has_balcony: boolean(),
  // sewerage_type: string(),
  // water_supply_type: string(),
  // gas_supply_type: string(),
  // heating_location: string(),
  // wc_type: array(string()),
  // material_type: array(string()),
  // price_type: string().oneOf(['per_object', 'per_sqm']),
  // price_min: number(),
  // price_max: number(),
  // price_sqm_min: number(),
  // price_sqm_max: number(),
  // total_area_min: number(),
  // total_area_max: number(),
  // living_area_min: number(),
  // living_area_max: number(),
  // kitchen_area_min: number(),
  // kitchen_area_max: number(),
  // release_date_min: number(),
  // release_date_max: number(),
  // floor_not_first: boolean(),
  // floor_not_last: boolean(),
  // floor_min: number(),
  // floor_max: number(),
  // floors_count_min: number(),
  // floors_count_max: number(),
  layout_type: layoutType
  // author: string(),
  // agency_id: number(),
  // owner_id: number(),
  // is_mortgage: boolean(),
  // is_haggle: boolean(),
  // is_net_sale: boolean(),
  // is_exchange: boolean(),
  // page: number(),
  // has_photos: boolean(),
  // limit: number(),
  // creation_date_min: number(),
  // sort: string(), // TODO: Уточнить
  // billing_options: string(),
  // has_furniture: boolean(),
  // has_internet: boolean(),
  // has_refrigerator: boolean(),
  // has_cellar: boolean(),
  // has_pit_stop: boolean(),
  // has_asphalt_road: boolean(),
  // has_electricity: boolean(),
  // has_garage: boolean(),
  // has_greenhouse: boolean(),
  // has_bathhouse: boolean(),
  // has_plantings: boolean(),
  // has_toilet: boolean(),
  // has_water_supply: boolean(),
  // homestead_area_max: number(),
  // homestead_area_min: number(),
  // railway_direction: array(), // TODO: Уточнить тип
  // reference_point: string(),
  // road: array(), // TODO: Уточнить тип
  // land_area_max: number(),
  // land_area_min: number(),
  // has_sewerage: boolean(),
  // in_business_center: boolean(),
  // in_shopping_center: boolean(),
  // own_entrance: boolean()
});

export function cast(value) {
  return schema.cast(value, { stripUnknown: true, recursive: true });
}
