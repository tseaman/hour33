package com.tns.gen.com.google.android.gms.location;

public class LocationCallback_geolocation_72_77_ extends com.google.android.gms.location.LocationCallback implements com.tns.NativeScriptHashCodeProvider {
	public LocationCallback_geolocation_72_77_(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public void onLocationResult(com.google.android.gms.location.LocationResult param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onLocationResult", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
