import React,{Component} from "react";
import {
  Text,
  View,
  LayoutAnimation,
  StyleSheet,
  Image
} from "react-native";



interface draprops {
  dragging?: any,
  ghost?: any,
  dragOver?: any,
  item?:any,
  index?: any
}

interface draStatae {
  color: any
}

export default class DraggyInner extends React.Component<draprops,draStatae> {
    constructor(props: draprops) {
        super(props);
        this.state = {
          color: []
        };
    
      }
      render() {
        if (this.props.dragOver && !this.props.ghost && !this.props.dragging) {
          LayoutAnimation.easeInEaseOut();
          return (
            <View
              style={{
                width: this.props.dragOver ? 110 : 100,
                alignItems: "center",
                justifyContent: "center",
                height: this.props.dragOver ? 110 : 100,
                backgroundColor: "rgba(255,0,0,.7)"
              }}
            >
              <View>
                 <View style = {styles.imageBg}>
                        <Image style={styles.imgCss}  source={{uri : this.props.item.image}}/>
                  </View>
                  <View >
                     <Text style= {styles.itemName}> {this.props.item.name} </Text>
                  </View>
            </View>
            </View>
          );
        }
        let shadows = {
          shadowColor: "black",
          shadowOffset: { width: 0, height: 20 },
          shadowOpacity: 0.5,
          shadowRadius: 20,
          opacity: 0.5
        };
        return (
          <View
            style={[
              {
                height: 100,
                width: 100,
                alignItems: "center",
                justifyContent: "center"
              },
              this.props.dragging ? shadows : null
            ]}
          >
            <View>
                 <View style = {styles.imageBg}>
                        <Image style={styles.imgCss}  source={{uri : this.props.item.image}}/>
                  </View>
                  <View >
                     <Text style= {styles.itemName}> {this.props.item.name} </Text>
                  </View>
            </View>
          </View>
        );
      }
}


/**
 * create styles css
*/
export const styles = StyleSheet.create({
  imageBg : {
    backgroundColor: '#ddd',
    width: 75,
    height: 75,
    alignItems:'center',
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
    display: 'flex'
  },
  imgCss : {
    width: 60,
    height: 60,
    marginTop:5
  },

  itemName: {
    textAlign: 'center',
    marginRight: 20,
    marginBottom: 30,
  }
});