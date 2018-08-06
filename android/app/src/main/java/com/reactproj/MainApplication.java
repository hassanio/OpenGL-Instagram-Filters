package com.reactproj;


import android.app.Application;
import android.content.Context;

import com.facebook.react.ReactApplication;
import fr.greweb.rnwebgl.RNWebGLPackage;
import com.paitoo.RNReactNativeSnapkitPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import org.reactnative.camera.RNCameraPackage;
import android.support.multidex.MultiDex;
import com.projectseptember.RNGL.RNGLPackage;

import java.util.Arrays;
import java.util.List;

import io.hassan.arshad.Package;


public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNWebGLPackage(),
          new RNReactNativeSnapkitPackage(),
          new RNCameraPackage(),
          new RNGLPackage(),
          new Package()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  @Override
  public void attachBaseContext(Context base) {
  super.attachBaseContext(base);
  MultiDex.install(this);
  }
}

