// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReactNative from "react-native";
import * as NewAppScreen from "react-native/Libraries/NewAppScreen";
import * as OpenURLInBrowser from "react-native/Libraries/Core/Devtools/openURLInBrowser";

var Header = { };

var ReloadInstructions = { };

var LearnMoreLinks = { };

var DebugInstructions = { };

var styles = ReactNative.StyleSheet.create({
      scrollView: {
        backgroundColor: NewAppScreen.Colors.lighter
      },
      engine: {
        position: "absolute",
        right: 0
      },
      body: {
        backgroundColor: NewAppScreen.Colors.white
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
      },
      sectionTitle: {
        color: NewAppScreen.Colors.black,
        fontSize: 24,
        fontWeight: "600"
      },
      sectionDescription: {
        color: NewAppScreen.Colors.dark,
        fontSize: 18,
        fontWeight: "400",
        marginTop: 8
      },
      highlight: {
        fontWeight: "700"
      },
      footer: {
        color: NewAppScreen.Colors.dark,
        fontSize: 12,
        fontWeight: "600",
        textAlign: "right",
        padding: 4,
        paddingRight: 12
      }
    });

function App$app(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement(ReactNative.StatusBar, {
                  barStyle: "dark-content"
                }), React.createElement(ReactNative.SafeAreaView, {
                  children: React.createElement(ReactNative.ScrollView, {
                        contentInsetAdjustmentBehavior: "automatic",
                        style: styles.scrollView,
                        children: null
                      }, React.createElement(NewAppScreen.Header, { }), React.createElement(ReactNative.View, {
                            style: styles.body,
                            children: null
                          }, React.createElement(ReactNative.View, {
                                style: styles.sectionContainer,
                                children: null
                              }, React.createElement(ReactNative.Text, {
                                    style: styles.sectionTitle,
                                    children: "Step One"
                                  }), React.createElement(ReactNative.Text, {
                                    style: styles.sectionDescription,
                                    children: null
                                  }, "Edit ", React.createElement(ReactNative.Text, {
                                        style: styles.highlight,
                                        children: "src/App.re"
                                      }), " to change this screen and then come back to see your edits.")), React.createElement(ReactNative.View, {
                                style: styles.sectionContainer,
                                children: null
                              }, React.createElement(ReactNative.Text, {
                                    style: styles.sectionTitle,
                                    children: "See Your Changes"
                                  }), React.createElement(ReactNative.Text, {
                                    style: styles.sectionDescription,
                                    children: React.createElement(NewAppScreen.ReloadInstructions, { })
                                  })), React.createElement(ReactNative.View, {
                                style: styles.sectionContainer,
                                children: null
                              }, React.createElement(ReactNative.Text, {
                                    style: styles.sectionTitle,
                                    children: "Debug"
                                  }), React.createElement(ReactNative.Text, {
                                    style: styles.sectionDescription,
                                    children: React.createElement(NewAppScreen.DebugInstructions, { })
                                  })), React.createElement(ReactNative.View, {
                                style: styles.sectionContainer,
                                children: null
                              }, React.createElement(ReactNative.Text, {
                                    style: styles.sectionTitle,
                                    children: "Learn More"
                                  }), React.createElement(ReactNative.Text, {
                                    style: styles.sectionDescription,
                                    children: "Read the docs to discover what to do next:"
                                  })), React.createElement(ReactNative.View, {
                                style: styles.sectionContainer,
                                children: null
                              }, React.createElement(ReactNative.Text, {
                                    style: styles.sectionDescription,
                                    children: React.createElement(ReactNative.Text, {
                                          style: styles.highlight,
                                          children: "Reason React Native"
                                        })
                                  }), React.createElement(ReactNative.TouchableOpacity, {
                                    onPress: (function (param) {
                                        OpenURLInBrowser.default("https://reasonml-community.github.io/reason-react-native/en/docs/");
                                        return /* () */0;
                                      }),
                                    children: React.createElement(ReactNative.Text, {
                                          style: {
                                            color: NewAppScreen.Colors.primary,
                                            fontSize: 18,
                                            fontWeight: "400",
                                            marginTop: 8
                                          },
                                          children: "https://reasonml-community.github.io/\nreason-react-native/"
                                        })
                                  })), React.createElement(ReactNative.View, {
                                style: styles.sectionContainer,
                                children: React.createElement(ReactNative.Text, {
                                      style: styles.sectionDescription,
                                      children: React.createElement(ReactNative.Text, {
                                            style: styles.highlight,
                                            children: "React Native"
                                          })
                                    })
                              }), React.createElement(NewAppScreen.LearnMoreLinks, { })))
                }));
}

var app = App$app;

export {
  Header ,
  ReloadInstructions ,
  LearnMoreLinks ,
  DebugInstructions ,
  styles ,
  app ,
  
}
/* styles Not a pure module */
