package com.reactproj;


import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import io.hassan.arshad.Package;  


public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new Package() 
      );
    }

    
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
