var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'brand:wikidata': 'brand:wikidata', 'branch': 'branch', 'alt_name': 'alt_name', 'atm': 'atm', 'tower:type': 'tower:type', 'tower:construction': 'tower:construction', 'man_made': 'man_made', 'covered': 'covered', 'access': 'access', 'healthcare': 'healthcare', 'stars': 'stars', 'rooms': 'rooms', 'reservation': 'reservation', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'image': 'image', 'email': 'email', 'description': 'description', 'air_conditioning': 'air_conditioning', 'cuisine': 'cuisine', 'addr:housenumber': 'addr:housenumber', 'sport': 'sport', 'beauty': 'beauty', 'website': 'website', 'brand': 'brand', 'evacuation_center': 'evacuation_center', 'tourism': 'tourism', 'religion': 'religion', 'leisure': 'leisure', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'shop': 'shop', 'height': 'height', 'office': 'office', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'admin_level': 'admin_level', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'type': 'type', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'brand:wikidata': '', 'branch': '', 'alt_name': '', 'atm': '', 'tower:type': '', 'tower:construction': '', 'man_made': '', 'covered': '', 'access': '', 'healthcare': '', 'stars': '', 'rooms': '', 'reservation': '', 'internet_access:fee': '', 'internet_access': '', 'image': '', 'email': '', 'description': '', 'air_conditioning': '', 'cuisine': '', 'addr:housenumber': '', 'sport': '', 'beauty': '', 'website': '', 'brand': '', 'evacuation_center': '', 'tourism': '', 'religion': '', 'leisure': '', 'school:type_idn': '', 'operator:type': '', 'amenity': '', 'addr:street': '', 'addr:postcode': '', 'shop': '', 'height': '', 'office': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'admin_level': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'type': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'brand:wikidata': 'no label', 'branch': 'no label', 'alt_name': 'no label', 'atm': 'no label', 'tower:type': 'no label', 'tower:construction': 'no label', 'man_made': 'no label', 'covered': 'no label', 'access': 'no label', 'healthcare': 'no label', 'stars': 'no label', 'rooms': 'no label', 'reservation': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'image': 'no label', 'email': 'no label', 'description': 'no label', 'air_conditioning': 'no label', 'cuisine': 'no label', 'addr:housenumber': 'no label', 'sport': 'no label', 'beauty': 'no label', 'website': 'no label', 'brand': 'no label', 'evacuation_center': 'no label', 'tourism': 'no label', 'religion': 'no label', 'leisure': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'shop': 'no label', 'height': 'no label', 'office': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'admin_level': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'type': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});