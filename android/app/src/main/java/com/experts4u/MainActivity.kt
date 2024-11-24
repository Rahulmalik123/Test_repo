package com.expert4u

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.github.wumke.RNImmediatePhoneCall.RNImmediatePhoneCallPackage
import android.os.Bundle


class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "Experts4u"




  /**
   * Called when the activity is starting. This is where most initialization should go: calling
   * setContentView(int) to inflate the activity's UI, using findViewById(int) to programmatically
   * interact with widgets in the UI, calling managedQuery(android.net.Uri , String[], String, String[], String)
   * to retrieve cursors for data being displayed, etc.
   */
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null) // Ensure the state is not restored
  }


  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
