WidgetGap
=========

WidgetGap is a W3C widget that can be used in [Apache Wookie](http://incubator.apache.org/wookie/) and in [Apache Cordova](http://incubator.apache.org/cordova/).
It retrieves the content from [Hippo Go Green](http://www.demo.onehippo.com).

## Deploy in Wookie

There's no build script. If you can access the webapp directory of your application container, you can copy a zipped version of the www folder.

    cd www
    zip -r widgetgap.wgt *
    cp widgetgap.wgt <wookie-webapp>/deploy

## Disclaimer

The goal of this project is to show that it is possible to write a single widget that can be shown on the web and be converted into a native app for the mobile phone. The code is not optimised at all.