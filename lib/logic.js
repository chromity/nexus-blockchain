function onSetVolumePlatform(setVolumePlatform) {
    setVolumePlatform.vol.volume = setVolumePlatform.newVolume; 
    return getAssetRegistry('org.nexus.basic.Platform')
      .then(function (assetRegistry) {
          return assetRegistry.update(setVolumePlatform.vol);
      });
}


function onSetSensorTemp(setSensorTemp) {
    setSensorTemp.temp.temperature = setSensorTemp.newTemperature; 
    return getAssetRegistry('org.nexus.basic.Sensor')
      .then(function (assetRegistry) {
          return assetRegistry.update(setSensorTemp.temp);
      });
}

function onSetSpeed(setSpeed) {
    setSpeed.sp.speed = setSpeed.newSpeed; 
    return getAssetRegistry('org.nexus.basic.Sensor')
      .then(function (assetRegistry) {
          return assetRegistry.update(setSpeed.sp);
      });
}

function onSetOrder(setOrder) {
	setOrder.ord.order = setOrder.newOrder;
  	return getAssetRegistry('org.nexus.basic.Sensor')
  		.then(function (assetRegistry) {
      		return assetRegistry.update(setOrder.ord);
    });
}

function onSetLocationLat(setLocationLat) {
    setLocationLat.lat.locationLat = setLocationLat.newLocationLat; 
    return getAssetRegistry('org.nexus.basic.Sensor')
      .then(function (assetRegistry) {
          return assetRegistry.update(setLocationLat.lat);
      });
}

function onSetLocationLon(setLocationLon) {
    setLocationLon.lon.locationLon = setLocationLon.newLocationLon; 
    return getAssetRegistry('org.nexus.basic.Sensor')
      .then(function (assetRegistry) {
          return assetRegistry.update(setLocationLon.lon);
      });
}

function onSetSentiment(setSentiment) {
    setSentiment.sent.sentiment = setSentiment.newSentiment; 
    return getAssetRegistry('org.nexus.basic.Sensor')
      .then(function (assetRegistry) {
          return assetRegistry.update(setSentiment.sent);
      });
}

function onSetVolume(setVolume) {
    setVolume.vol.volume = setVolume.newVolume; 
    return getAssetRegistry('org.nexus.basic.Sensor')
      .then(function (assetRegistry) {
          return assetRegistry.update(setVolume.vol);
      });
}




