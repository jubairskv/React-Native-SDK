import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class MyLibraryModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "MyLibrary"
    }

    @ReactMethod
    fun getDummyText(promise: Promise) {
        val dummyText = "This is some dummy text from the native module!"
        promise.resolve(dummyText)
    }
}