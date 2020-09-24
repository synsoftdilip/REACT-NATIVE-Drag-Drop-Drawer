
import React, { useState } from 'react';
import {Image,TextInput,View, Text, StyleSheet,TouchableOpacity, Dimensions, FlatList, SafeAreaView, LayoutAnimation, ScrollView} from 'react-native';
import {
  Draggable,
  DragContainer,
  DropZone
} from "react-native-drag-drop-and-swap";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

/**
 *  define Canvas props
 *
*/
interface canvasProps {
  location: string,
  name:string
  items: any,
  showCategories: boolean,
  showTitle: boolean,
  searchIsEnabled: boolean,
  disableDragAndDrop: boolean,
  title:string,
  closeButtonIsShowing:boolean,
  dndName:string,
  onDrop?: any,
  onHover?: any,
  dragOver?: any,
  alphabet?:any,
  index?: any
}


/**
 * 
 *  Canvas view with drawer options
 * 
 */
const Canvas = (props:canvasProps) => {

  const [droppedItem, setDroppedItem] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  
   const onDrop = (data: any) =>{
    setDroppedItem(droppedItem.concat(data))

  }


  const onHover = (hoverData: any, hoverDataIndex: any)=> {
    //this.setState({ hoverData, hoverDataIndex });
    
  }
  /**
   * Grop item by category
   */
    const groupBy = (xs: any, key: string) => {
      return xs.reduce(function (rv: any, x: any) {
        (rv[x[key]] = rv[x[key]] || []).push(x)
        return rv
      }, {})
    }
    
    // events define

  /**
   * Function is called on item drag
   * @param item 
   */
    const onItemDrag=()=>{
      console.log("onItemDrag");
    }

  /**
   * FUnction is called on item drop
   */
    const onItemDrop=()=>{
      console.log("onItemDrop");
    }

  /**
   * FUnction is called on item click
   */
    const onItemClick=()=>{
      console.log("onItemClick");
    }

  /**
   * FUnction is called on item search
   */
    const onSearch=()=>{
      console.log("onSearch");
    }

   /**
   * On click of button closes the drawer
   */
    const onClose=()=>{
        setOpenDrawer(false);
      console.log("drawer onClose");
    }
  
    
  /**
   * On click of button opens and closes the drawer
   */
  const onPressButton = () => {
    setOpenDrawer(true)
}

  /**
   * FUnction is called on handle Search Change
   */
    const  handleSearchChange = (text:string) => {
      onSearch();
      let searchText = text.trim();
      const arraySearchedResults = props.items.filter(function (item: any) {
          return (item.name.toLowerCase().includes(searchText.toLowerCase()))
        })
        setItems(groupBy(arraySearchedResults,"group"))
     }

     //const [arrayCat, setArrayCat] = useState(groupBy(props.items,"group"));

     const [items, setItems] = useState(groupBy(props.items,"group"));
 //console.log("items",items);
 
   
 /**
   * FUnction is called on render Category Items
   */
    const renderCategoryItems = (arrayCatItems: any,i: string | number | null | undefined) => {
              
      return (
          <FlatList
            data={arrayCatItems}
            renderItem={({ item }) => (
              <View key={i} testID = "ItemDrawerItems">  
              <Draggy
                key={i}
                item={item}
                onHover={onHover}
                onDrop={onDrop}
                index={i}
            />    
            </View>       
        )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        );       
    }
  


  /**
   * render view
   */
    return (  
      <DragContainer>       
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
        <View style={{top:openDrawer && props.location == "Top" ?  windowHeight/2 : 0  , left: openDrawer && props.location == "Left" ?  windowWidth/2 : 0, bottom:openDrawer && props.location == "Bottom" ?  windowHeight/2 : 0, right: openDrawer && props.location == "Right" ?  windowWidth/2 : 0, position: 'absolute'}}>
          <View style = {styles.headerView}> 
              <Text style = {styles.canvasHeader}>{props.title}</Text>
            </View>
           
            <DropZone
              style={styles.dropZone}
              onDrop={(e: any) =>onDrop(e)}
            >
                {droppedItem &&
      <View>
          {droppedItem.map((data: any) => 
            <View style={styles.dropItemView}>
            <View style = {styles.imageBg}>
                   <Image style={styles.imgCss}  source={{uri : data.image}}/>
             </View>
             <View >
                <Text style= {styles.itemName}> {data.name} </Text>
             </View>
       </View>
          )}
          </View>
     } 
   
            </DropZone>
          </View>
        
        <View style={[styles.floatingBtnCss]}>
              <TouchableOpacity onPress={onPressButton} testID={"drawerButtom"}>
                 <Text style={styles.text}>+</Text>
              </TouchableOpacity>
           </View>
        { openDrawer && props.location == "Left" &&
              <View testID={'ItemDrawerLocationLeft'} style={styles.overlayFromleft}>
                <ScrollView>
                {props.showTitle &&
                  <Text testID={'menuHeaderTitle'} style={[styles.menuHeader]}>{props.name}</Text>
                }

                {props.closeButtonIsShowing &&
                <TouchableOpacity testID='closeBtn' style={styles.closeBtn} onPress={onClose}>
                <View style = {styles.btnTextBackGroundView}>
                    <Text>X</Text>
                    </View>
            </TouchableOpacity>     
          }
               
               {props.searchIsEnabled &&
                  <TextInput testID='search-input' style={styles.textInputStyle}
                     onChangeText={(searchText) => handleSearchChange(searchText)}
                     // value={props.searchText}
                     underlineColorAndroid="transparent"
                    placeholder="Search Products"
                />
               }
                <View>
                  { Object.keys(items).map((group:any,i:number) => {
                    return (
                      <View key={i} >
                        {props.showCategories &&
                          <Text testID='showCategories' style={[styles.textBlack]}>{group}</Text>
                        }
                          
                          {renderCategoryItems(items[group],i)}
                        </View>
                      ) 
                    })
                  }
                   </View>
                  </ScrollView>
                 
              </View>
          }
            
            { openDrawer && props.location == "Right" &&
              <View testID={'ItemDrawerLocationRight'} style={styles.overlayFromRight}>
                <ScrollView>
                {props.showTitle &&
                  <Text testID={'menuHeaderTitle'} style={[styles.menuHeader]}>{props.name}</Text>
                }

                {props.closeButtonIsShowing &&
                <TouchableOpacity testID='closeBtn' style={styles.closeBtn} onPress={onClose}>
                <View style = {styles.btnTextBackGroundView}>
                    <Text>X</Text>
                    </View>
            </TouchableOpacity>

                }
               
               {props.searchIsEnabled &&
                  <TextInput testID='search-input' style={styles.textInputStyle}
                     onChangeText={(searchText) => handleSearchChange(searchText)}
                     // value={props.searchText}
                     underlineColorAndroid="transparent"
                    placeholder="Search Products"
                />
               }
                <View>
                  { Object.keys(items).map((group:any,i) => {
                    return (
                      <View >
                        {props.showCategories &&
                          <Text testID='showCategories' style={[styles.textBlack]}>{group}</Text>
                        }
                          
                          {renderCategoryItems(items[group],i)}
                        </View>
                      ) 
                    })
                  }
                   </View>
                  </ScrollView>
             
              </View>
          }

          { openDrawer && props.location == "Top" &&
              <View testID={'ItemDrawerLocationTop'} style={styles.overlayFromTop}>
                
                <ScrollView>
                {props.showTitle &&
                  <Text testID={'menuHeaderTitle'}  style={[styles.menuHeader]}>{props.name}</Text>
                }

                {props.closeButtonIsShowing &&
                <TouchableOpacity testID='closeBtn' style={styles.closeBtn} onPress={onClose}>
                <View style = {styles.btnTextBackGroundView}>
                    <Text>X</Text>
                    </View>
            </TouchableOpacity>
       
                }
               
               {props.searchIsEnabled &&
                  <TextInput testID='search-input' style={styles.textInputStyle}
                     onChangeText={(searchText) => handleSearchChange(searchText)}
                     // value={props.searchText}
                     underlineColorAndroid="transparent"
                    placeholder="Search Products"
                />
               }
                <View>
                  { Object.keys(items).map((group:any,i) => {
                    return (
                      <View >
                        {props.showCategories &&
                          <Text testID='showCategories' style={[styles.textBlack]}>{group}</Text>
                        }
                          
                          {renderCategoryItems(items[group],i)}
                        </View>
                      ) 
                    })
                  }
                   </View>
                  </ScrollView>
              </View>
          }
          { openDrawer && props.location == "Bottom" &&
              <View testID={'ItemDrawerLocationBottom'} style={styles.overlayFromBottom}>
                
                <ScrollView>
                {props.showTitle &&
                  <Text testID={'menuHeaderTitle'} style={[styles.menuHeader]}>{props.name}</Text>
                }

                {props.closeButtonIsShowing &&
                <TouchableOpacity testID='closeBtn' style={styles.closeBtn} onPress={onClose}>
                <View style = {styles.btnTextBackGroundView}>
                    <Text>X</Text>
                    </View>
            </TouchableOpacity>
  
                }
               
               {props.searchIsEnabled &&
                  <TextInput testID='search-input' style={styles.textInputStyle}
                     onChangeText={(searchText) => handleSearchChange(searchText)}
                     // value={props.searchText}
                     underlineColorAndroid="transparent"
                    placeholder="Search Products"
                />
               }
                <View >
                  { Object.keys(items).map((group:any,i) => {
                    return (
                      <View >
                        {props.showCategories &&
                          <Text testID='showCategories' style={[styles.textBlack]}>{group}</Text>
                        }
                          
                          {renderCategoryItems(items[group],i)}
                        </View>
                      ) 
                    })
                  }
                   </View>
                  </ScrollView>
              </View>
          }

          { openDrawer && props.location == "Inline" &&
              <View testID={'ItemDrawerLocationInline'} style={styles.overlayFromInline}>
                 <ScrollView>
                {props.showTitle &&
                  <Text testID={'menuHeaderTitle'} style={[styles.menuHeader]}>{props.name}</Text>
                }

                {props.closeButtonIsShowing &&
                <TouchableOpacity testID='closeBtn' style={styles.closeBtn} onPress={onClose}>
                <View style = {styles.btnTextBackGroundView}>
                    <Text>X</Text>
                    </View>
            </TouchableOpacity>

                }
               
               {props.searchIsEnabled &&
                  <TextInput testID='search-input' style={styles.textInputStyle}
                     onChangeText={(searchText) => handleSearchChange(searchText)}
                     // value={props.searchText}
                     underlineColorAndroid="transparent"
                    placeholder="Search Products"
                />
               }
                <View
                  style={styles.inlineView}
                >
                  { Object.keys(items).map((group:any,i) => {
                    return (
                      <View >
                        {props.showCategories &&
                          <Text testID='showCategories' style={[styles.textBlack]}>{group}</Text>
                        }
                          {renderCategoryItems(items[group],i)}
                        </View>
                      ) 
                    })
                  }
                   </View>
                  </ScrollView>
              </View>
          }
        </View>
        
        </SafeAreaView>
        </DragContainer> 
      );
  }
  
export default Canvas;


/**
 * 
 *  define draggy Props
 * 
 */
interface draggyProps {
  onDrop?: any,
  onHover?: any,
  dragOver?: any,
  item?:any,
  index?: any
}

/**
 * 
 *  Draggy component used to create daggable view.
 * 
 */
class Draggy extends React.Component<draggyProps> {
  /**
   * render view
   */
  render() {
    return (
      <Draggable data={this.props.item} style={{ marginTop: 9.5 }}>
        <DropZone
          onDrop={(e: any) => this.props.onDrop(e, this.props.index)}
          onEnter={() =>
            this.props.onHover(this.props.item, this.props.index)
          }
        >
          <DraggyInner
            item={this.props.item}
            index={this.props.index}
          />
        </DropZone>
      </Draggable>
    );
  }
}


/**
 * 
 *  Define props for DraggyInner
 * 
 */
interface draprops {
  dragging?: any,
  ghost?: any,
  dragOver?: any,
  item?:any,
  index?: any
}

/**
 * 
 *  Define State for DraggyInner
 * 
 */
interface draStatae {
  color: any
}

/**
 * 
 *  Draggy component used to create daggable item view.
 * 
 */
class DraggyInner extends React.Component<draprops,draStatae> {
    constructor(props: draprops) {
        super(props);
        this.state = {
          color: []
        };
    
      }

  /**
   * render view
   */
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
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  // topContainer: {
  //   top:openDrawer && props.location == "Top" ?  windowHeight/2 : 0  ,
  //   left: openDrawer && props.location == "Left" ?  windowWidth/2 : 0, 
  //   bottom:openDrawer && props.location == "Bottom" ?  windowHeight/2 : 0,
  //   right: openDrawer && props.location == "Right" ?  windowWidth/2 : 0, 
  //   position: 'absolute'
  // },

  dropZone: {
    top: 45,
    left: 0,
    right: 0,
    bottom:0,
    flex:1,
    position: 'absolute',
    backgroundColor:'white'
  },

  dropItemView:{
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },

  inlineView:{
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  viewContanr:{
    marginTop:20,
    marginStart:20,
    backgroundColor:"white"
  },

  overlayFromTop: {
    top:10,
    position: "absolute",
    right: 0,
    left: 0,
    height: "50%",
    backgroundColor: "#f2f2f2",
    opacity: 1.0,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ababab",
  },
  
  overlayFromBottom: {
    position: "absolute",  
    right: 0,
    bottom:0,
    left: 0,
    width: "100%",
    height:"50%",
    backgroundColor: "#f2f2f2",
    opacity: 1.0,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ababab", 
  },

overlayFromleft: {
  position: "absolute",
  top: 0,
  right: windowWidth/2,
  bottom: 0,
  left: 0,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f2f2f2",
  opacity: 0.9,
  shadowColor: "#000",
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.19,
  shadowRadius: 0.23,
  elevation: 5,
  },
  overlayFromRight: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: "50%",
    backgroundColor: "#f2f2f2",
    opacity: 1.0,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ababab"
  },

  overlayFromInline: {
    position: "absolute",
    display: "flex",
    top: "20%",
    bottom: "20%",
    left: 0,
    width: "100%",
    backgroundColor: "#f2f2f2",
    opacity: 1.0,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ababab"
  },

  text: {
    width: "100%",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign:'center'
  },

  textBlack: {
    margin: 5 ,fontSize: 15,
    color: "black",
    fontWeight: "bold"
  },
  
  textInputStyle: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 8,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  
  floatingBtnCss: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    position: "absolute",
    bottom: 20,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 40,
    textAlign: "center",
    display: "flex",
  },
  draggable: {
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    borderWidth: 1,
    borderColor: "#ababab",
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    zIndex: 1
  },
  droppableArea: {
    width: "100%",
    height: "100%",
    paddingVertical: 20,
    // alignItems: "center",
    // justifyContent: "space-between",
    backgroundColor: "white"
  },
  trashIconWrapper: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  grid: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
},
list:{
  flex:1,
  flexDirection:'row',
  flexWrap: 'wrap',
  width:50,
  height:50,
  justifyContent: 'center',
},
menuHeader: {
    color: 'black',
    fontSize: 20,
    marginTop:20,
    marginLeft:20,
    marginEnd:40,
    textAlign:'center',

  },

  headerView : {
    top: 0,
    height: 65,
    alignItems:'center',
    justifyContent: 'center',
    display: 'flex',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.19,
    shadowRadius: 0.23,
    backgroundColor: "#f2f2f2"
    
  },

   canvasHeader: {
    color: 'black',
    textAlign:'center'
  },
  
  closeBtn: {
    fontSize: 15,
    width: 50,
    color: "#999",
    textAlign: "center",
    right: 0,
    position: "absolute",
    top:10,
  },
  btnTextBackGroundView : {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropView: {
    top: 0, left: 0, bottom:0, right:0, position: 'absolute'
  },
  
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







